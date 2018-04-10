//引入资源文件
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');//引入index.js路由配置文件
var users = require('./routes/users');//引入user.js路由配置文件

var app = express();//用express创建一个App应用
/*跨域*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods",["POST","PUT"]);
    res.header("Access-Control-Allow-Headers",["Content-type","X-Token"]);
    next();
});
//使用刚刚加载的资源
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());//使用cookie
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);//调用index路由
app.use('/user', users);//调用users路由

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
