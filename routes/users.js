var express = require('express');
var request = require('request');
const qs = require('querystring');
const { setToken } = require('../public/javascripts/tokenVertify.js');
var router = express.Router();
const db = require('../mysql/db.js');
router.post('/getIdentify', (req, res) => {
	console.log('getIdentify:', req.body);
	let {
		phone
	} = req.body;
	let identify = '';
	for (let i = 0; i < 6; i++) {
		identify += parseInt(Math.random() * 10).toString()
	}
	if (identify[0] == 0) {
		identify = '1' + identify.slice(-5);
	}
	console.log('identify', identify)
	let sql = `select * from user where phone = ${phone}`;
	db.query(sql).then(result => {
		console.log('result', result);
		let sql;
		if (result.length) {
			sql = `update user set identify=${identify} where phone=${phone}`
		} else {
			sql = `insert into user (phone, photosrc, identify) values (${phone},'',${identify})`
		}
		return db.query(sql)
	}).then(result => {
		res.json({
			identify,
			code: 0
		});
	})
	// 手机短信验证码
	// let options = {
	// 	method: 'Submit',
	// 	account: 'C53198034',
	// 	password: '75274eb2d60a4e64a5725cd20483c942',
	// 	mobile: req.body.phone,

	// 	content: '您的验证码是：'+identify+'。请不要把验证码泄露给其他人。'
	// }
	// let url = ' http://106.ihuyi.com/webservice/sms.php?' + qs.stringify(options)
	// console.log(url);
	// request(url,(error,response,body) => {
	// 	console.log('body',body);
	// })
});

router.post('/login', async (req, res) => {
	console.log('login:', req.body);
	let {
		phone,
		identify
	} = req.body;
	let sql = `select * from user where phone = ${phone}`;
	let user = await db.query(sql);
	if (user.length) { //如果存在
		if (identify == user[0].identify) { //如果验证码匹配成功
			setToken({id: user[0].id}).then(token => {
				res.json({
					code: 0,
					msg: '登录成功',
					token: token,
					user: user[0]
				})
			})
		} else {
			res.json({
				code: 1,
				msg: '验证码不正确'
			})
		}
	} else {
		res.json({
			code: 1,
			msg: '登录失败'
		})
	}
});

//上传文件的方式
router.post('/savePhoto', async (req, res) => {
	console.log(global.localIp)
	console.log('/savePhoto', req.files, req.body);
	let {
		photoImg
	} = req.files;
	let {
		userid
	} = req.body;
	let saveSrc = `http://47.101.129.247:3000/static/photoImg/${photoImg.name}`;
	let sql = `select * from user where id = ${userid}`;
	let user = await db.query(sql);
	
	photoImg.mv(`public/static/photoImg/${photoImg.name}`, err => {
		if (err) {
			return res.status(500).send(err);
		}
		if(user.length) {
			let sql = `update user set photosrc="http://47.101.129.247:3000/static/photoImg/${photoImg.name}" where id=${userid}`;
			console.log(sql);
			db.query(sql).then(result => {
				res.json({
					code: 0,
					photosrc: saveSrc
				})
			});
		}
	})
})

router.post('/getCollect', async (req, res) => {
	console.log('/getCollect',req.body);
	let { id } = req.body;
	let collectSql = `select d.* from discovery d
					  left join collect c on c.discovery_id = d.id
					  where c.user_id = ${id}
					`
	let collectList = await db.query(collectSql);
	res.json({
		code: 0,
		collectList
	})
})

module.exports = router;
