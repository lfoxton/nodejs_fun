
var fs = require('fs');
var folder = process.argv[2];
var file_extention = process.argv[3];

fs.readdir(folder, (err, files) => {
  if (err) throw err;
  
  files.filter(function(file_name){
    return (file_name.indexOf(file_extention) > -1);
  }).forEach(function(value) {
    console.log(value);
  });
});