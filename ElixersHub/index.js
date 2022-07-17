const express = require("express")
const app = express()
const path = require("path")
const port = 3000

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/', require(path.join(__dirname, "routes/routes.js")))

app.listen(port, () => {
    console.log(`ElixersHub hosted at ${port}`);
})
