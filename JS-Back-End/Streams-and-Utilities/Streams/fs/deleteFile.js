const fs = require('fs');

fs.unlink('./data/created.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log('The file was deleted!');
});
