const express = require('express')
const app = express()
const path = require('path')
const port = 3500

// const customMiddleware = (req, res, next) => {
//     console.log(req);
// }

app.use(express.static(path.join(__dirname, "public"))) // Serving Static Folder
// app.use(customMiddleware) // Serving Custom Middleware

app.get('/hello/:further', (req, res) => {
    // res.status(500);
    // res.sendFile(path.join(__dirname, "index.html"))
    res.send("Hello World " + req.params.further)
    console.log(req.params);
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}/`)
})

// function(exports, require, module, __filename, __dirname) {}
