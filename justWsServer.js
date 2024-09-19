const http = require('http');

const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end("I'm connected");
})

const wss = new websocket.WebSocketServer({server:server});

wss.on("headers", (headers, req)=>{
    console.log(headers);
})

wss.on('connection', (ws, req)=>{
    ws.send("Welcome to the websocket server");
    ws.on('message', (data)=>{
        console.log(data.toString());
    })
})



server.listen(8000);