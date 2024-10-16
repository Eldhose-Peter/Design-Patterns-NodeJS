var fs = require("fs");
var path = require("path");

var txtFile = path.join(__dirname, "Readme.txt");
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

// Here we are reading both text and md files. 
// What if we need to prevent reading files with .txt extension ?
// We create a proxy FS Class which would inturn call the real FS Class. 
// And in this proxy FS Class we block reading files with .txt extension

fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);
