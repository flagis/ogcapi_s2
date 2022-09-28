const express = require('express')
const app = express()
const port = 80

var route = require('./route')

app.use('/kontich/v1.0', route)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
