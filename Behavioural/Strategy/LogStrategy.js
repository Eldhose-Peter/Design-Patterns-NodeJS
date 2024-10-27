var path = require("path");
var { appendFile } = require("fs");
var morse = require("morse");

// all the strategies are defined here.
// you can also add additional strategies without affecting much of the code.
class LogStrategy {
  static toMorseCode(timestamp, message) {
    var morseCode = morse.encode(message);
    console.log(morseCode);
  }

  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    var fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message} \n`, (error) => {
      if (error) {
        console.log("Error writing to file");
        console.error(error);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {}
}

module.exports = LogStrategy;
