const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 300
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  res.end('你好世界\n')
})

// 接受参数 node exit.js --name=hayho
const args = require('minimist')(process.argv.slice(2));
console.log(args['name'])


server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
  //设置环境变量  NODE_ENV=development node exit.js 
  console.log(process.env.NODE_ENV)
  setTimeout(() => {
    process.exit();
  }, 1000)
})

// process.on('SIGTERM',  () => {
//   server.close(()=>{
//     console.log('进程已终止')
//   })
// })