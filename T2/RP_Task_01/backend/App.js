var path = require('path')
var exp = require('express')
var app = exp()

var staticpath = path.join(__dirname, '../frontend')

app.use(exp.static(staticpath, { index: 'homepage.html' }))

app.listen(6001)
