const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    if (req.url == "/")
    {
        res.statusCode = 200;
        const data = fs.readFileSync("./index.html");
        res.end(data);
    }
    else if (req.url == "/home")
    {
        res.statusCode = 200;
        res.end("<h1>Hello Vatsal</h1><p>Welcome to my Node.js Server Home Page</p>");
    }
    else if (req.url == "/about")
    {
        res.statusCode = 200;
        res.end("<h1>Hello Vatsal</h1><p>Welcome to my Node.js Server About Page</p>");
    }
    else
    {
        res.statusCode = 404;
        res.end("<h1>Page not Found</h1>");
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
});
