module.exports = {
	PRIVATE_KEY: 'my_privite_key',
	EXPIRESD: 60 * 60 * 24 * 30 ,// 30天过期,
	UNLESS: ['/users/login','/users/getIdentify','/sorkBook','/getDetail','/findBook']
}