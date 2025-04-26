var exp = require('express')
var app = exp()
var bp = require('body-parser')
var url = bp.urlencoded({ extended: true })

app.use(exp.static(__dirname))
app.post('/check', url, (req, res, next) => {
    uname = req.body.un
    pass = req.body.pass
    if (uname == 'admin') {
        next()
    } else {
        res.set('content-type', 'text/html')
        res.write(`<h1 style='color: red'>Warning!.</h1>`)
        res.send()
    }
})

app.post('/check', (req, res) => {
    res.set('content-type', 'text/html')
    res.write(`<h1 style='color: red'>welcome....admin!.</h1>`)
    res.send()
})
app.listen(6001)