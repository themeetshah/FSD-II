var exp = require('express')
var app = exp()

app.use((req, res, next) => {
    console.log('initialization')
    res.write('Hello')
    next()
})

app.get('/', (req, res) => {
    res.write('Hello2')
    res.send()
})

app.listen(6001)