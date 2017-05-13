/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;




// // socket io 

// var socket = require ('socket.io');
// var io = socket (server);
// //if I have a new connection
// io. on ('connection', newConnection);

// function newConnection(socket){
//   console.log ('newConnection:'+ socket.id);
//   console.log (socket.id);// get new connections
//   socket.on ('mouse', mouseMsg);
//   function mouseMsg(data){
//     // socket.broadcast.emit('mouse', data);
//     console.log (data);
//   }
//   setInterval(function(){
//     io.emit('player2mouse', {x: 50, y:110});
//   }, 1000);
// }
// // Set up the server
// // process.env.PORT is related to deploying on heroku
// // var server = app.listen(process.env.PORT || 3000, listen);

// // // This call back just tells us that the server has started
// // function listen() {
// //   var host = server.address().address;
// //   var port = server.address().port;
// //   console.log('Example app listening at http://' + host + ':' + port);
// // }

// // app.use(express.static('public'));


// // // WebSocket Portion
// // // WebSockets work with the HTTP server
// // var io = require('socket.io')(server);

// // // Register a callback function to run when we have an individual connection
// // // This is run for each individual user that connects
// // io.sockets.on('connection',
// //   // We are given a websocket object in our function
// //   function (socket) {

// //     console.log("We have a new client: " + socket.id);

// //     // When this user emits, client side: socket.emit('otherevent',some data);
// //     socket.on('mouse',
// //       function(data) {
// //         // Data comes in as whatever was sent, including objects
// //         console.log("Received: 'mouse' " + data.x + " " + data.y);

// //         // Send it to all other clients
// //         socket.broadcast.emit('mouse', data);

// //         // This is a way to send to everyone including sender
// //         // io.sockets.emit('message', "this goes to everyone");

// //       }
// //     );

// // //
// //     socket.on('disconnect', function() {
//       console.log("Client has disconnected");
// //     });
// //   }
// // );


var express = require('express');
// Create the app
var app = express();



var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

// var io = require('socket.io').listen(server);

// io.sockets.on('connection',

//   function (socket) {
  
//     console.log("We have a new client: " + socket.id);
  

//     socket.on('mouse',
//       function(data) {

//         console.log("Received: 'mouse' " + data.x + " " + data.y);
      
//         // Send it to all other clients
//         socket.broadcast.emit('mouse', data);
        
//         // This is a way to send to everyone including sender
//         // io.sockets.emit('message', "this goes to everyone");

//       }
//     );
    
//     socket.on('disconnect', function() {
//       console.log("Client has disconnected");
//     });
//   }
// );

