/**
 * Created by sf on 2017/6/24.
 */

var express = require('express');
var app = express();

// 主页输出Hello World
app.get('/', function (req, res) {
    console.log('主页GET请求');
    res.send('Hello Get');
});

// POST
app.post('/', function (req, res) {
    console.log('主页POST请求');
    res.send('Hello Post');
});

// /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log('/del_user响应DELETE请求');
    res.send('删除页面');
});

// /list_user 页面GET请求
app.get('/list_user', function (req, res) {
    console.log('/list_user GET请求');
    res.send('用户列表页面');
});

// 对页面abcd响应GET请求
app.get('/ab*cd/',function(req,res){
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});


