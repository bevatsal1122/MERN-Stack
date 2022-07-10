const express = require('express')
const app = express()
const fs = require('fs');
const port = 3500

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    const data = fs.readFileSync("./index.html");
    res.send(data.toString())
})
app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.send("<h1>Hello Vatsal</h1><p>Welcome to my Node.js Server About Page</p>")
  })
app.get('/home', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.send("<h1>Hello Vatsal</h1><p>Welcome to my Node.js Server Home Page</p>")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})