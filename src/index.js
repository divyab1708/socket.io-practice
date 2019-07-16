$("document").ready(function(){
              const socket = io('http://192.168.1.25:3040/fxposition');
 
    socket.on("connect",()=>{
      alert("connected")
    })
/*    socket.on('chat message', function(data){
        console.log(data);
    })*/
    
    $("#submit").on("click",function(){
/*        currencyChange.CCY1=$("#currency").val();
        currencyChange.SPOT=$("#value").val();*/
        
//        var currencyChange=$("#json").val();
        console.log("currencyChange");
//        socket.emit("currency change", currencyChange);
        socket.emit("currency change", "currencyChange");
    })
    
    socket.on('currency data',function(data){
        for(let i=0;i<data.length; i++){
            $("#"+data[i].CCY1).text(data[i].UTL_SPOT);
        }
    });
    
        socket.on('update currency',function(data){
            
            $("#"+data.CCY1).text(data.SPOT);
            
        });

});