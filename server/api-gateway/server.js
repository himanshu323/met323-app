const http=require("http");
let config=require("./config/config")
const debug=require("debug")("node-angular");
const socketIO=require("socket.io");
const app=require("express")();

const httpProxy = require('express-http-proxy')

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
  
  const port = normalizePort(process.env.PORT || "9090");
 

let server=http.createServer(app)


app.use((req, resp, next) => {

    resp.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");


    resp.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");

    resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS,PUT")

    resp.setHeader("Access-Control-Allow-Credentials", "true")
    next();
})

const authProxy = httpProxy(process.env.AUTH_SERVICE);

const tradeProxy=httpProxy(process.env.TRADE_SERVICE);

const notifyProxy=httpProxy(process.env.NOTIFY_SERVICE);


app.all(["/api/:service","/api/:service/**","/"], (req, resp, next) => {
  
  if (req.params.service.indexOf("trades")>=0) {
    tradeProxy(req, resp, next)

  }
  else if (req.params.service.indexOf("user") >= 0){
    authProxy(req,resp,next);
  }
  else{
    notifyProxy(req, resp, next);
  }
  })

server.on("error", onError);
server.on("listening", onListening);


server.listen(port);

