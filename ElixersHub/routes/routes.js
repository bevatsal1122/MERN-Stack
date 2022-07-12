const express  = require("express")
const router = express.Router()
const path = require("path")
const blogs = require("../assets/data")

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/blogs', (req, res) => {
    res.render('blogs', {
        blogs
    });
})

router.get('/blog/:slug', (req, res) => {
    thisblog = blogs.filter((element) => {
        return element.slug == req.params.slug
    })
    res.render('blogPage', {
        title: thisblog[0].title,
        body: thisblog[0].body
    });
})

module.exports = router
