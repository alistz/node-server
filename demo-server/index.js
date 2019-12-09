
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/test', function (req, res) {
   fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/', function(req, res){
  res.end("Hello World");
})


/// kline contact
app.get('/contweb/api/trade/market/queryHistory', function (req, res) {
   fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
      //  console.log( data );
       res.end(data);
   });
})

/// kline token
app.get('api/v2/coin/coin/trade/kline', function(req, res){
  fs.readFile( __dirname + "/" + "kline_contract.json", 'utf8', function (err, data) {
    //  console.log( data );
     res.end(data);
 });
})

// area code
app.get('/api/operation/address/country', function(req, res){
  fs.readFile(__dirname + "/" + "areaCode.json", 'utf8', function(err, data){
    res.end(data);
  });
})










var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})






