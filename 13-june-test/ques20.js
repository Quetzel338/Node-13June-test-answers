const fs = require('fs');

function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    reject('File does not exist');
                } else {
                    resolve('File exists');
                }
            });
        }, 1000);
    });
}

checkFileExists('/path/to/file.txt')
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });

