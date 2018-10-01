const http=require("http");

const debug=require("debug")("node-angular");
const socketIO=require("socket.io");
const app=require("express")();
const  {consumeQueue}=require("./consumer");

let socketInstance;

// let server=http.createServer((req,resp)=>{
//     resp.end("This is ITTT")
// })

const normalizePort = val => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  };
  
  const onError = error => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  
  const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
   console.log("Listening on " + bind);
    
  };
  
  const port = normalizePort(process.env.PORT || "3001");
 

let server=http.createServer(app)

let io= socketIO(server);




io.on("connection",(socket)=>{

  console.log("In");
  socketInstance=socket;

  socket.on('changeTrade', () =>{
                
    console.log("event occured");

    consumeQueue(io);

    //console.log(data);

   // io.emit("newTrade")
    

})


// socket.on('deleteTrade', () =>{
                
//   console.log("event occured");

//   consumeQueue(io);

//   //console.log(data);

//  // io.emit("newTrade")
  

// })
})



server.on("error", onError);
server.on("listening", onListening);


server.listen(port);

