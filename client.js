const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
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