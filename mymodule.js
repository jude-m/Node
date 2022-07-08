const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, fileList) => {
        if (err) return callback(err);

        let data = [];

        fileList.forEach(element => {
            if (path.extname(element).slice(1) === ext) {
                data.push(element);
            }
        });
        return callback(null, data);
    });
}