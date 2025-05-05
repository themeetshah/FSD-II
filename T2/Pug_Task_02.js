// Write express js script to load student form using pug file which contains
// following fields Name(text), Email(email), Course(radio : CE, IT, CSE).Once form
// submitted then data must be displayed on ‘/student’ page using pug file.
// Means data should be submitted from express application to PUG file.

var exp = require('express')
var app = exp()
var bp = require("body-parser");
var url = bp.urlencoded();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(__dirname + '/Pug_Task_02_01');
});

app.post('/data', url, (req, res) => {
    const { name, email, course } = req.body
    res.render(__dirname + '/Pug_Task_02_02', {
        name: name, email: email, course: course
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));