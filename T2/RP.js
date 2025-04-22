var express = require('express');
var app = express();
app.get('/:id', function (req, res) {
    // res.write('The id you specified is ' + req.params.id)
    res.write(JSON.stringify(req.params))
    // res.write string j accept krse
    // alternative:
    // res.send(req.params)
    res.send();
});

app.get('/things/:name/:id', function (req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(3000);