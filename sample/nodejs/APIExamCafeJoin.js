var express = require('express');
var app = express();
var token = "YOUR_ACCESS_TOKEN" // 네아로 접근 토큰
var header = "Bearer " + token; // Bearer 다음에 공백 추가
var clubid = "28339939";// 카페의 고유 ID값 http://cafe.naver.com/apiexam
var nickname = "open api";
app.get('/cafe/join', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/cafe/' + clubid + '/members';
   var request = require('request');
   var options = {
       url: api_url,
       form: {'nickname': nickname},
       headers: {'Authorization': header}
    };
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       console.log('error');
       if(response != null) {
         res.status(response.statusCode).end();
         console.log('error = ' + response.statusCode);
       }
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/cafe/join app listening on port 3000!');
 });