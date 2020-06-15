//导入mysql配置
const mysqlconfig = require('./mysqlconfig.js')
//数据库
const mysql = require('mysql');
//创建数据库连接池
const pool = mysql.createPool(mysqlconfig);
//建立连接
const db = {
	query(sql) {
		return new Promise((resolve,reject) => {
			//从连接池中获取连接
			pool.getConnection((err,connection) => {
				if(err) {
					reject(err)
				} else {
					//开始数据操作
					connection.query(sql,(err,result) => {
						if(err) {
							reject(err)
						} else {
							resolve(result)
						}
						//停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
						connection.release();
					})
				}
			})
		})
	}
}
module.exports = db;