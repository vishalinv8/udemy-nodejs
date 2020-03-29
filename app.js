const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res)=>{
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    if(url === '/'){
        res.write(`<html>
        <head> <title> Enter message</title> </head>
        <body>
            <form action="/message" method="POST">
                <input type="text" name="message">
                <input type="submit">
            </form>
        </body>
        </html>`);
        return res.end();
    }
    //console.log("url", url, "req.method", req.method, req);
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunkData)=>{
            console.log("chunkData", chunkData);
            body.push(chunkData);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody", parsedBody);
            var message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            });            
        });
    }
    res.setHeader("Content-type", "text/html");
    res.write(`<html>
    <head> <title> First node Application</title> </head>
    <body><h1> Hello NODE js server</h1></body>
    </html>`);
    res.end();
});
server.listen(2020);
