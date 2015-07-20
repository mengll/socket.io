<!DOCTYPE HTML>
<html>
<body>
<script src="socket.io.min.js"></script>
	<script type="text/javascript">
	var callClientEvent = function (data) {
		var msg = "Server CallBack: "+ _sioClient.tag +  " Data :" + data.message;
		console.log(msg);  
	};
	
	var _sioClient;
	var SocketIO = SocketIO || io;
	_sioClient = SocketIO.connect("http://123.57.233.38:3000/");
    _sioClient.tag = "Cocos2d-JS Client1";
        
        //注册服务器端事件 侦听客户端的方法的实现
        _sioClient.on("callClientEvent", callClientEvent);
        
        _sioClient.on("connect", function() {
			console.log("connect");
        });        
        _sioClient.on("message", function(data) {
        	console.log(data);
			_sioClient.emit("callServerEvent","{\"message\":\"Hello Server.\"}");
			_sioClient.emit("login",{name:'mll',age:'18',wantdo:'love'});
        });        
        _sioClient.on("error", function(data) {
			console.log("Connect out of long time!");
        });
		
		_sioClient.on("callServerEvent",function(data){
			console.log(data);
		});
		
		_sioClient.on("logined",function(data){ //回调相关的时间和方法 参数的传递的类型使用的一般使用的是json的数据格式传输
			console.log(data.name);
			console.log(data.uid);
		});
		
		//创建一个用户的ID 在用户链接成功后，返回用户链接成功后的相关的信息 包含了创建的用户的名称，用户的ID 等信息
		//在创建回调函数的过程中要使用字段的回调 必须使用EMIT的方式来触发相关的事件
		//聊天室的创建完成用户的相关的问题的解决方案的
		
	</script>

</body>
</html>
