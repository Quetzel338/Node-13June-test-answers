const fs = require("fs");

fs.unlink("mynewfile2.txt", function(err,data){
    console.log("file deleted");
})