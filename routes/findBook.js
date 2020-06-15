var express = require('express');
var router = express.Router();
const db = require('../mysql/db.js');
router.post('/',async (req, res) => {
	console.log('参数:', req.body);
	let {
		pageSize,
		currentPage,
		type
	} = req.body;
	let sql = `SELECT * FROM discovery WHERE type = ${type} limit ${currentPage * pageSize},${pageSize}`
	let result = await db.query(sql);
	res.json({
		result,
		code: 0,
		finished: result.length == 10 ? false : true
	});
});



module.exports = router;
