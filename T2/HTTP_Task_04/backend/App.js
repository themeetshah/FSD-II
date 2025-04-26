var path = require('path')
var bp = require('body-parser')
var exp = require('express')
var app = exp()
var url = bp.urlencoded({ extended: true })

app.use(exp.static(path.join(__dirname, '../frontend')))

app.post('/check', url, (req, res) => {
    uname = req.body.un
    pass = req.body.pass
    cpass = req.body.cpass
    gender = req.body.gender
    if (pass === cpass) {
        res.set('content-type', 'text/html')
        res.write(`<h3>Username: ${uname}</h3>`)
        res.write(`<h3>Password: ${pass}</h3>`)
        res.write(`<h3>Gender: ${gender}</h3>`)
    } else {
        res.write(`<h1 style='color: red'>Warning! Password and Confirm Password doesn't match.</h1>`)
    }
    res.end()
})

app.listen(6001)