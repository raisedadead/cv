const fs = require("fs");

module.exports = function cv (){
  return JSON.parse(fs.readFileSync('./src/resume.json', 'utf8'));
};
