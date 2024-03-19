const fs = require('fs');

fs.writeFile('./data/created.txt', 'Hello, world!\n', { encoding: 'utf-8', flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log('The file was created!');
});
