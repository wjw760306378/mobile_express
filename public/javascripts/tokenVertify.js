const jwt = require("jsonwebtoken");
let { PRIVATE_KEY,EXPIRESD } = require('./tokenSetting.js');
module.exports = {
	setToken(content) {
		return new Promise((resolve,reject) => {
			const token = jwt.sign(content,PRIVATE_KEY,{expiresIn: EXPIRESD});
			resolve(token)
		})
	},
	verToken(token) {
		return new Promise((resolve,reject) => {
			console.log(token.split(' ')[1]);
			jwt.verify(token.split(' ')[1],PRIVATE_KEY,(err,decoded) => {
				if(err) {
					reject(err);
				} else {
					resolve(decoded);
				}
			});
			
		})
	}
}