var socket;

function setup() {
  createCanvas(1277, 1000);
  background(255);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:8080');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(5,0,55);
      noStroke();
      ellipse(data.x, data.y, 10, 10);
    }
  );
}



function draw() {
  // Nothing
}

function mouseDragged() {
  // Draw some white circles
  fill(2,10,50);
  noStroke();
  ellipse(mouseX,mouseY,10,10);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
