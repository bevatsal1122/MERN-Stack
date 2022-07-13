const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
const mainRouter = require(path.join(__dirname, 'routes', 'routes'))
// const apiKeyCheck = require(path.join(__dirname, 'middlewares', 'apiKeyCheck.js'))

app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views', 'templates'))
// console.log(app.get('view engine'))
// console.log(app.get('views'))

// app.use(express.static(path.join(__dirname, 'public'))) Built-in Middleware
// app.use(apiKeyCheck); // Application-Level Middleware

app.use('/', mainRouter); // / as Prefix

app.listen(port, () => {
    console.log(`App hosted at ${port}`)
})
