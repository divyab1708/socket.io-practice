var express=require("express");
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);
app.use("/src", express.static(__dirname + "/src"));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/userIp.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
    socket.on("currency data", function(data){
        console.log("data: ",data);
    })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});