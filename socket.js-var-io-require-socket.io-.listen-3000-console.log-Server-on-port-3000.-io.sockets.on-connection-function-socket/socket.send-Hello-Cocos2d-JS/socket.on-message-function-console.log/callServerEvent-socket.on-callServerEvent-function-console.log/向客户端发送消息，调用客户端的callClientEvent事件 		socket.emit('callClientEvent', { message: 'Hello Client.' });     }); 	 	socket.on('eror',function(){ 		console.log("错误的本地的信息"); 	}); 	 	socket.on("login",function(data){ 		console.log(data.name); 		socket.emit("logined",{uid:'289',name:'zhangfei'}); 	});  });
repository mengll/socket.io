
var io = require('socket.io').listen(3000);
console.log('Server on port 3000.');

io.sockets.on('connection', function (socket) 
{
	//向客户端发送消息
    socket.send('Hello Cocos2d-JS');
	//注册客户端消息
    socket.on('message', function () 
    {
        console.log('获取相关的数据');
    });
	
	//注册callServerEvent事件，便于客户端调用
    socket.on('callServerEvent', function () 
    {
        console.log("获取相关的数据");
		//向客户端发送消息，调用客户端的callClientEvent事件
		socket.emit('callClientEvent', { message: 'Hello Client.' });
    });
	
	socket.on('eror',function(){
		console.log("错误的本地的信息");
	});
	
	socket.on("login",function(data){
		console.log(data.name);
		socket.emit("logined",{uid:'289',name:'zhangfei'});
	});

});
