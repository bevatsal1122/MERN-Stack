const express = require('express')
const router = express.Router()
const path = require('path')
const ejs = require('ejs');
const apiKeyCheck = require(path.join(__dirname, '../middlewares', 'apiKeyCheck.js'))

// router.use(apiKeyCheck) // Router-level Middleware

router.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page"
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page"
    })
})

router.get('/download', (req, res) => {
    res.download(path.join(__dirname, '../app.js'))
})

// router.get('/api/products', [apiKeyCheck0, apiKeyCheck1], (req, res) for Muliple Middlewares for a Single Route
router.get('/api/products', apiKeyCheck, (req, res) => {
    res.json([
        {
            id: '520',
            name: 'Lenevo'
        },
        {
            id: '410',
            name: 'HP'
        }
    ])
})

module.exports = router
