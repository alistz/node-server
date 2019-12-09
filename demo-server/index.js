
var express = require('express');
var app = express();
const fs = require("fs");
// const process = require('process');

//调试信息是通过环境变量 DEBUG 控制的
// process.env['DEBUG'] = 'express:*';

app.get('/test', function (req, res) {
   fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
       console.log( data );
       res.send( data );
   });
})

app.all('/', function(req, res){
  // res.header("Content-Type", "application/json; charset=utf-8")
  res.end("Hello World");
  // res.status(404).send('Sorry, we cannot find that!');
  // res.status(500).send({ error: 'something blew up' });
})


/// kline contact
app.get('/contweb/api/trade/market/queryHistory', function (req, res) {
   fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
       console.log( data );
       res.send(data);
   });
})

/// kline token
app.get('api/v2/coin/coin/trade/kline', function(req, res){
  fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
     console.log( data );
     res.send(data);
 });
})

// area code
app.get('/api/operation/address/country', function(req, res){
  fs.readFile(__dirname + "/" + "areaCode.json", 'utf8', function(err, data){
    console.log( data );
    res.send(data);
  });
})










const server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})






