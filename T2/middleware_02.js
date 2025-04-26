var exp = require('express')
var app = exp()

app.get('/hello', (req, res, next) => {
    res.write('Hello2 ' + new Date())
    next()
})
app.get('/hello', (req, res, next) => {
    res.write('\nHello1')
    next()
})
app.get('/hello', (req, res) => {
    res.send()
})

app.listen(6001)