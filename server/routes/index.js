var express = require('express');
var router = express.Router();
var fs = require("fs");
var PATH = "./public/jsonData/";
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
// 在线调查
router.get("/online", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "onlineSurvey.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var onlineData = JSON.parse(data);
        return res.send({
            code:20000,
            data:onlineData.data
        })
    });
});

// 待办事项
router.get("/backlog", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "backlog.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var onlineData = JSON.parse(data);
        return res.send({
            code:20000,
            data:onlineData.data
        })
    });
});

// 获取消息
router.get("/message", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "message.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var onlineData = JSON.parse(data);
        return res.send({
            code:20000,
            data:onlineData.data
        })
    });
});
module.exports = router;
