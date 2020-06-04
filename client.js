const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(IP,PORT) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect',() => {
    console.log("Successfuly connected to the game server");
    conn.write("Name: AHR");
  });
  // hard coding the snake to move
  // conn.on('connect',() => {
  //   setInterval(() => {conn.write("Move: left");

  //   },50);
    
  // });
  
  conn.on('data',(data) => console.log(data));

  return conn;
};

module.exports = {connect};