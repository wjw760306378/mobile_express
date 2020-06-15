const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const findBookRouter = require('./routes/findBook');
const history = require('connect-history-api-fallback');
const fileUpload = require('express-fileupload');
const getLocalIp = require('./public/javascripts/getLocalIp.js');
const expressJWT = require('express-jwt');
const { verToken } = require('./public/javascripts/tokenVertify.js');
let app = express();

global.localIp = getLocalIp();

let {
	PRIVATE_KEY,
	UNLESS
} = require('./public/javascripts/tokenSetting.js');


app.use(history());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// 使用 express-fileupload 中间件
app.use(fileUpload());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// 解析token获取用户信息
app.use(function(req,res,next) {
	let token = req.headers['authorization'];
	console.log('token',token);
	if(token == undefined) {
		return next();
	} else {
		console.log('开始解析token')
		verToken(token).then(data => {
			console.log('data',data)
			req.data = data;
			return next();
		}).catch(error => next())
	}
})
//验证token是否过期并规定哪些路由不用验证
app.use(expressJWT({
	secret: PRIVATE_KEY
}).unless({
	path: UNLESS //白名单,除了这里写的地址，其他的URL都需要验证
}));

// const cors = require('cors');  
// app.use(cors({  
//     origin:['http://localhost:8080'],
//     methods:['GET','POST'],
// }));
// //跨域问题解决方案
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
// 　next();　
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/findBook', findBookRouter)

// error handler
app.use(function(err, req, res, next) {
	console.log('err',err);
	if (err.name === 'UnauthorizedError') {
		// 这个需要根据自己的业务逻辑来处理
		res.status(401).send({
			code: 1,
			msg: 'token验证失败'
		});
	} else {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};
		
		// render the error page
		res.status(err.status || 500);
		res.render('error');
	}
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});



module.exports = app;
