const http = require("http");
const current = require("./myModule");

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.write("Current Date and time is " + current.currentDateTime());
    res.end("");
}).listen(8001);