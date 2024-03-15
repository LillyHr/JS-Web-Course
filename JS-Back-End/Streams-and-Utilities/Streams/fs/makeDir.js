const fs = require('fs');

fs.mkdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
