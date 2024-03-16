const fs = require('fs');
// const fs = require('fs/promises');

//SYNCRONONYMOUS 
// const text = fs.readFileSync('./data/data.txt', {encoding: 'utf-8'});
//console.log(text);

//ASYNCRONONYMOUS with callback
const text = fs.readFile('./data/data.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log(`There is a problem with the file system!`);
        return;
    }
    console.log(data);
});

///ASYNC with promise
// fs.readFile('./data/data.txt', {encoding: 'utf-8'})
//     .then(data => console.log(data))
//     .catch(err => console.log('There is a problem with the file system!'));
