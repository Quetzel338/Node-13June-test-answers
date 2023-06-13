const file = require("fs");

file.open("mynewfile2.txt", "w",function(err, data){
    console.log("file created");
})