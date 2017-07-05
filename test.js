let cv = require('./index.js');
if (cv() === 'Hello! I am Mrugesh Mohapatra\'s resume') {
  console.log(cv());
  console.log('\nTests passed...');
  process.exit(0);
} else {
  console.log(cv());
  console.log('\nTests failed...');
  process.exit(1);
}
