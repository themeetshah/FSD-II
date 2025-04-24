var path = require('path')
var bp = require('body-parser')
var exp = require('express')
var app = exp()
var url = bp.urlencoded({ extended: true })
// If not used then //TypeError: Cannot read properties of undefined (reading 'fname')

// app.post('/') -- aavu post method thi possible nthi -- get thi j thase aa
var staticpath = path.join(__dirname, '../public')
app.use(exp.static(staticpath, { index: 'third.html' }))
app.post('/process_get', url, (req, res) => {
    firstname = req.body.fn;
    lastname = req.body.ln;
    res.write(`FN: ${firstname}, LN: ${lastname}`)
    res.send()
}).listen(6001)