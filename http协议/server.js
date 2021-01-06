const Http = require('http')

Http.createServer(function(requset, responce) {
  console.log('requset come' + requset.url)
  responce.end('123')
}).listen(8888)

console.log('server start 8888')