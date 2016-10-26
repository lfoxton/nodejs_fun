var lsgrep = require('./modules/ls_grep.js')

var dir = process.argv[2]
var ext = process.argv[3]

lsgrep(dir, ext, function(err, list) {
  if (err) {
   throw err;
  }
  
  list.forEach(function (file) {
   console.log(file);
  });
});