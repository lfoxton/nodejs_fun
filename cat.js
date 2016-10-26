var fs = require('fs');
var file_name = process.argv[2];

fs.readFile(file_name, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});