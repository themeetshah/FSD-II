// write express js to req server to display json obj on browser
var exp = require('express')
var app = exp()

var obj = {
    studs: ['S1', 'S2', 'S3']
}

app.get('/obj', (req, res) => {
    res.set('content-type', 'application/json')
    res.send(obj)
})


app.get('/obj/:name/:id', (req, res) => {
    res.set('content-type', 'application/json')
    var obj1 = {
        name: req.params.name,
        id: req.params.id
    }
    res.send(obj1)
})

app.listen(6001, () => { console.log('Server started on http://localhost:6001/') })