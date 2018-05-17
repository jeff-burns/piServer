const express = require('express')
const fs = require('fs')
const app = express()
const PythonShell = require('python-shell');

var light = false;

// serve up the "public" directory at the / route,
app.use('/', express.static('public'))

app.get('/light', function(req, res) {
  PythonShell.run('lightsensor.py', function(err, results) {
    if (err) throw err;
    console.log(results[0])

    if (results[0] == 0) {
      light = true
      console.log('hello from true')
    } else {
      light = false
    }
    res.send(light)
  })
  ;
})

app.use(getLightStatus)

function getLightStatus() {
    
}

var port = 8080
app.listen(port, () => {
  console.log('Listening On', port)
})

// export the getLightSattus function, then import vthqat function in your frontend
// module.exports = {
//    getLightStatus: getLightStatus
// }

