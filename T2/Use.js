var exp = require('express')
var app = exp()

// app.use(exp.static('use')); // can also pass filename as parameter in the url -- eg: localhost:6001/index2.html
// app.use(exp.static(__dirname));  // to fetch index.html from current working folder

// without using middleware
// app.get('/', function (req, res) {
//     res.sendFile('D:/A1_MeetS/express/use/index2.html');
// })

app.listen(6001)