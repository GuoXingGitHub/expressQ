/**
 * Created by 桥下红药ҩ on 2016/1/30 0030.
 * http 请求模块
 *
 * 示例
 * req.url('http://fyyh.net').cookie('key=123').get( function (body) {
    console.log(body)
});
 */
var iconv = require("iconv-lite");
iconv.extendNodeEncodings();
var cheerio = require('cheerio');
var fs = require('fs');
var http = require('request').defaults({jar: true});
function http_(){
    var that = this;
    var j = http.jar();
    var encode = 'utf-8';
    var url = '';
    var mcookie = '';
    var method = 'GET';

    var postData = {};
    this.url = function (a) {
        url = a;
        return that;
    };
    this.cookie = function (b) {
        mcookie = b;
        return that;
    };
    this.post = function (data,callback) {
        postData = data;
        method = 'POST';
        send(callback,true);
    };
    this.get = function (callback) {
        method = 'GET';
        send(callback,false);
    };
    this.encoding = function (e) {
        encode = encoding;
        return that;
    };

    var send = function (callback,m) {
        if(mcookie!=''){
            var cookie = http.cookie(mcookie);
            j.setCookie(cookie, url);
        }
        var opt = {
            method:method,
            url: url,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Referer': url,
                'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
                'content-encoding': encode,
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0'
            }
        };

        if(m){
            http.post(url,{form:postData}, function (error, response, body) {
                if (response.statusCode == 200) {
                    return callback(body);
                }
                return null;
            });
        }else{
            http(opt, function (error, response, body) {
                if (response.statusCode == 200) {
                    return callback(body);
                }
                return null;
            });
        }

    }

}

module.exports = http_;


