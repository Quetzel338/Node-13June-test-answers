const fs = require("fs");

fs.rename("mynewfile1.txt", "myrenamedfile.txt", function(err, data){
    console.log("file renamed");
})