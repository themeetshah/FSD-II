var http = require('http')

var h = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Welcome to Node.js Server<h1>");
    res.end()
});
h.listen(5000, () => { console.log('Server Started at port 5000') });