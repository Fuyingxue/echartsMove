var log = console.log.bind(console)
var route = require("./utils/routeUtil")
// 引入 express 并且创建一个 express 实例赋值给 app
var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.json())
// 配置静态文件目录
app.use(express.static("static"))


// 导入 route/index 的所有路由数据
var indexRoutes = require("./route/index").routes
route.registerRoutes(app, indexRoutes)

// 导入 route/movie 的所有路由数据
var movieRoutes = require("./route/movie").routes
route.registerRoutes(app, movieRoutes)


var host = 'localhost'
var port = 8000

var server = app.listen(port, host, function () {
    // var addressItem = server.address()
    // var host = addressItem.address
    // var port = addressItem.port
    log(`应用实例，访问地址为 ${host}:${port}`)
})
