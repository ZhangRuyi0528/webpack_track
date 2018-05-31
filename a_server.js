const app = require('http'),
    express = require('express'),
    dir = require('fs');

app.createServer((request, response) => (
    response.writeHead(200, {'Content-Type': 'text/plain'}),
    // 发送响应数据 "Hello World"
    response.end('ttttttt'))
).listen(5656)

/****阻塞代码***/
let file = dir.readFileSync('./html/abc.text');
console.log(file.toString())

/*****非阻塞代码
 * 读取public代码
*/
dir.readFile('./js/public.js', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log(123456789);

app.createServer((req, res) => {
    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('200空')
        break;
        case '/index':
            res.writeHead(200, {'Content-Type': 'utf-8'})
            res.end('index页面')
        break;
        default: 
        
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('页面飞走了')
        break;
    }
}).listen(5555)
