var path = require('path')
var exp = require('express')
var app = exp()

var staticpath = path.join(__dirname, '../public')

app.use(exp.static(staticpath, { index: 'second.html' }))

app.get('/process_get', (req, res) => {
    res.set('content-type', 'text/html')
    firstname = req.query.fn
    lastname = req.query.ln
    res.send(`<span style="background-color:orange; font-size:50px">Hello,<span style="color: orange; background-color:black"> ${firstname} ${lastname}</span></span>`)
})

app.get('/process_get_json', (req, res) => {
    var obj = {}
    obj['firstname'] = req.query.fn
    obj['lastname'] = req.query.ln
    res.send(obj)
})

app.listen(6001)
