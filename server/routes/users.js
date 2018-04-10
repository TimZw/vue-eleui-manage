var express = require('express');
var router = express.Router();
var fs = require("fs");
var query = require("querystring");
var PATH = "./public/jsonData/";
//读取数据模块，供客户端调用
//查询接口，token校验
//公共接口，无需校验
/* GET users listing. */

/*登录*/
router.post("/login", function (req, res) {
    var dataStr = "";
    req.on("data", function (data) {
        dataStr += data;
    });
    req.on("end", function () {
        console.log(dataStr)
        var dataObj = query.parse(dataStr);
        console.log(dataObj)
        var bol=false;
        fs.readFile(PATH + "login.json", "utf-8", function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: "读取文件异常"
                });
            }
            var userObj = JSON.parse(data);
            for (var i = 0; i < userObj.length; i++) {
                if (dataObj.username == userObj[i].username && dataObj.password == userObj[i].password) {
                    bol=true;
                    return res.send({
                        code:20000,
                        data:{
                            token:userObj[i].username
                        }
                    });
                }
            }
            if(!bol){
                return res.send("用户名或密码错误");
            }
        });
    });
});

/**获取用户信息*/
router.get("/info", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "userInfo.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var userInfo = JSON.parse(data);
        for(var i=0;i<userInfo.length;i++){
            if (dataObj.token == userInfo[i].token) {
                return res.send({
                    code:20000,
                    data:userInfo[i].data
                })
            }
        }
    });
});

// 退出
router.post("/logout", function (req, res) {
    var dataStr = "";
    req.on("data", function (data) {
        dataStr += data;
    });
    req.on("end", function () {
        var dataObj = query.parse(dataStr);
        console.log(dataObj)
        var bol=false;
        fs.readFile(PATH + "login.json", "utf-8", function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: "读取文件异常"
                });
            }
            var userObj = JSON.parse(data);
            for (var i = 0; i < userObj.length; i++) {
                if (dataObj.token == userObj[i].username) {
                    bol=true;
                    console.log(userObj[i].username)
                    return res.send({
                        code:20000,
                        data:{
                            token:userObj[i].username
                        }
                    });
                }
            }
            if(!bol){
                return res.send("退出失败");
            }
        });
    });
});

// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });
module.exports = router;
