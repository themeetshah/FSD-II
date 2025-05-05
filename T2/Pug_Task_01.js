// Create one pug file which contains a text field and a password field.
// By submitting the form, on next page called “/login” submitted data will be
// displayed

const express = require('express');
const app = express();
var bp = require("body-parser");
var url = bp.urlencoded();

app.set('view engine', 'pug');

//app.set('views', __dirname);
app.get('/', (req, res) => {
    res.render(__dirname + '/Pug_Task_01');
});

app.post('/login', url, (req, res) => {
    const username = req.body.uname
    const password = req.body.pass;
    res.send(
        `username = ${username}, password = ${password}`
    );
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));