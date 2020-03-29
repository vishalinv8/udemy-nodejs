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
                <input type="submit" name="submit">
            </form>
        </body>
        </html>`);
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt', "Dummy text");
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
    res.setHeader("Content-type", "text/html");
    res.write(`<html>
    <head> <title> First node Application</title> </head>
    <body><h1> Hello NODE js server</h1></body>
    </html>`);
    res.end();
});
server.listen(2020);
