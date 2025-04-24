var path = require('path')
var bp = require('body-parser')
var exp = require('express')
var app = exp()
var url = bp.urlencoded({ extended: true })

app.use(exp.static(__dirname))
app.post('/calc', url, (req, res) => {
    val1 = parseInt(req.body.num1);
    val2 = parseInt(req.body.num2);
    method = req.body.dropdown;
    // res.write(method)
    console.log(val1 + val2)
    if (method == 'None') {
        res.write('You have not selected any formula')
    } else if (method == '+') {
        res.write(`${val1 + val2}`)
    } else if (method == '-') {
        res.write(`${val1 - val2}`)
    } else if (method == '*') {
        res.write(`${val1 * val2}`)
    } else if (method == '/') {
        res.write(`${val1 / val2}`)
    }
    res.send()
}).listen(6001)