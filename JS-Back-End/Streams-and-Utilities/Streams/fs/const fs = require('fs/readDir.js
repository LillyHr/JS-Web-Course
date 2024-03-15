const fs = require('fs/promises');

fs.readdir('.','utf-8')
  .then(data => console.log(data));
