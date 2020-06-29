var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Kontich landing page')
})

// define the about route
router.get('/conformance', function (req, res) {
  res.send('conformance page')
})

// define the about route
router.get('/collections', function (req, res) {
  res.send('collections on this server')
})

//...

module.exports = router