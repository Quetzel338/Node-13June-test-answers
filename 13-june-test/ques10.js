const http = require("http");
const fs = require("fs")

fs.appendFile("mynewfile1.txt", " Hello Content", function(err){
    console.log("file appended");
})