const handleUserInput = (key) =>{
  if (key === '\u0003') {
    console.log("Left Game")
    process.exit();
  } else if ( key ==='\x77') {
    // key = w
    console.log("up");

  } else if (key === '\x61') {
    // key = a
    console.log('left');

  } else if (key === '\x73') {
    // key =s
    console.log('down');

  } else if (key === '\x64') {
    // key = d
    console.log('right');
  }
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

setupInput();
module.exports = {setupInput};