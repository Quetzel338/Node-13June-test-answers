const file = require("fs");

file.writeFile("mynewfile3.txt", "Hello Content", function(err, data){
    console.log("content replaced");
})