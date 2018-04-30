var route = require("../utils/routeUtil")

var index = {
    path: "/",
    method: "get",
    func: (request, response) => {
        var path = 'movie_index.html'
        route.sendHTML(path, response)
    }
}

var routes = [
    index,
]

module.exports.routes = routes
