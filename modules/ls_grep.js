var fs = require('fs')

module.exports = function (folder, filter, callback) {

  var filelist = new Array();
  var i = 0;
  
  fs.readdir(folder, (err, files) => {
    if (err) { 
      throw err;
    }

    files.filter(function (file_name) {
      return (file_name.indexOf(filter) > -1);
    }).forEach(function (file_name) {
      filelist[i] = file_name;
      i += 1;
    });
    
    callback(null, filelist);

  });
};