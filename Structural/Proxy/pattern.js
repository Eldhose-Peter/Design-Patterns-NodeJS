// Here we are creating the Proxy FS which would then invoke the real FS class
class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

var path = require("path");
var fs = new FS_Proxy(require("fs"));

// var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, "Readme.md");

var result = (error, contents) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("reading file...");
  console.log(contents);
};

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, "UTF-8", result);
