// display js obj data on html page using http server
var http = require('http')
var url = require('url')
var fs = require('fs')

var obj = [
    {
        name: 'Stud1',
        age: 12
    },
    {
        name: 'Stud2',
        age: 22
    }
]

http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Student Data</h1>')
        res.write('<table border="1px solid black">')
        res.write('<tr><th>Name</th><th>Age</th></tr>')
        for (let i = 0; i < obj.length; i++) {
            res.write('<tr><td>' + obj[i].name + '</td><td>' +
                obj[i].age + '</td></tr>')
        }
        res.end()
    } else {
        res.writeHead(404, { "content-type": "image/png" });
        var data = fs.readFileSync('imgs/error404.png')
        res.write(data);
        res.end()
    }
}).listen(3001, () => { console.log('Started') })