const fs = require("fs");
const cv = require('./index.js');

const resumeOriginal = JSON.parse(fs.readFileSync('./src/resume.json', 'utf8'));
const resumeCaptured = cv();

if(JSON.stringify(resumeCaptured) === JSON.stringify(resumeOriginal)){
  console.log('resume\'s integrity is confirmed to PASS.\n');
  process.exit(0);
} else {
  console.log('resume\'s integrity is confirmed to FAIL.\n');
  process.exit(1);
}