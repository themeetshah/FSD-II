var h = require("http");
var server = h.createServer(
    function (req, res) {
        if (req.url == "/") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1>This is Home page </h1><div><ul><li><a href = '/' > Home</a ></li > <li><a href='/about'>About</a></li> <li><a href='/abc'>Undefined Path</a></li></ul></div>");
            res.end();
        }
        else if (req.url == "/about") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1 style='color: green'>This is About Page </h1><div><ul><li><a href = '/' > Home</a ></li > <li><a href='/about'>About</a></li><li><a href='/abc'>Undefined Path</a></li></ul> </div>");
            res.end();
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<body style='background-color: red'><h2 style='color: white'>Page not found</h2>");
            res.end("\nPlease check the url<div><ul><li><a href = '/' > Home</a ></li > </div></body>");
        }
    });
server.listen(5051);
console.log("Thanks!");