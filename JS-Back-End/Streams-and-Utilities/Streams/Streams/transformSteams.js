const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./data/input.txt', {encoding: 'utf8', highWaterMark: 1000});
const writeStream = fs.createWriteStream('./data/transformed.txt', {encoding: 'utf8'});
const zlibTransformStream = zlib.createGzip();

readStream.pipe(zlibTransformStream).pipe(writeStream);
