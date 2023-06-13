const fs = require("fs")

fs.appendFile("mynewfile1.txt", " This is my text", function(err){
    console.log("file appended");
})