const express = require('express')
const fs = require('fs')
const app = express()

const light = true;

// serve up the "public" directory at the / route,
app.use('/', express.static('public'))

var port = 8080
app.listen(port, () => {
  console.log('Listening On', port)
})