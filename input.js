let connection;

const handleUserInput = (key) =>{
  if (key === '\u0003') {
    console.log("Left Game");
    process.exit();
  } else if (key === '\x77') {
    // key = w
    connection.write("Move: up");

  } else if (key === '\x61') {
    // key = a
  
     connection.write("Move: left");

  } else if (key === '\x73') {
    // key =s
    
   connection.write("Move: down");

  } else if (key === '\x64') {
    // key = d
   
    connection.write("Move: right");
  }
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

setupInput();
module.exports = {setupInput};