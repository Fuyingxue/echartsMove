var fileSystem = require("fs")
var log = console.log.bind(console)

var registerRoutes = (app, routes) => {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        app[route.method](route.path, route.func)
    }
}

var sendHTML = (path, response) => {
    var options = {
        encoding: "utf-8",
    }
    path = "template/" + path
    fileSystem.readFile(path, options, (error, data) => {
        // log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

var routeUtil = {
    registerRoutes,
    sendHTML,
}

module.exports = routeUtil
