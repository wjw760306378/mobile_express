var express = require('express');
var router = express.Router();
const db = require('../mysql/db.js');
router.post('/sorkBook',async (req,res) => {
	console.log('参数:', req.body);
	let { code, choosedList, pageSize, currentPage } = req.body;
	let arr = ['collect','collect','collect','collect','rate','readcount']
	let orderMethod = arr[code-1];
	let sql = 'select * from discovery'
	if(choosedList.length) {
		sql += ` where type in(${choosedList})`
	}
	sql += ` order by ${orderMethod} desc limit ${currentPage * pageSize},${pageSize}`;
	let result = await db.query(sql);
	res.json({
		result,
		code: 0,
		finished: result.length == 10 ? false : true
	});
});

router.post('/getDetail',async (req,res) => {
	console.log('参数:', req.body);
	let { id,userid } = req.body;
	let sqlbook = `select * from discovery where id=${id}`;
	let book = await db.query(sqlbook);
	let iscollect = false;
	if(userid) {
		let sqluser = `select * from collect where user_id=${userid} and discovery_id = ${id}`;
		let user = await db.query(sqluser);
		iscollect = user.length ? true : false;
	}
	res.json({
		book,
		iscollect,
		code: 0
	});
});

router.post('/collectBook',async (req,res) => {
	console.log('参数:', req.body);
	let { id,userid,iscollect } = req.body;
	//在收藏表中删除或者增加一条数据
	let collectsql = iscollect ? `delete from collect where user_id=${userid} and discovery_id = ${id}` : `insert into collect (user_id,discovery_id) values (${userid},${id})`;
	let result = await db.query(collectsql);
	if(result.affectedRows > 0) { //如果成功在收藏表中插入或者删除一条数据     for update  排他锁
		let discoverySql = `select collect from discovery where id=${id} for update`;
		//查找对应书本的collect值
		let result = await db.query(discoverySql);
		let collect = result[0].collect;
		collect = iscollect ? --collect : ++collect;
		//更新对应书本collect值
		let updateCollectNum = `update discovery set collect=${collect} where id=${id}`;
		db.query(updateCollectNum).then(result => {
			if(result.affectedRows > 0) { //如果更新成功
				res.json({
					code: 0
				})
			}
		})
	}
	// res.json({
	// 	code: 0,
	// 	result
	// })
});

module.exports = router;
