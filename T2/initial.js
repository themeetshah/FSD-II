const expr = require("express");
const app = expr();
app.get("/", (req, res) => {
    res.set("content-type", "text/html");
    res.send("<h1>Hello</h1>");
});
app.get("/about", (req, res) => {
    res.set("content-type", "text/html");
    // res.write("Hello");
    res.send("<h1> Hello from home</h1>");
});
// version 4 ma '*'
// version 5 or upper ma '*any'
app.get("*any", (req, res) => {
    res.status(404).send("page not found");
})
app.listen(5000, () => { console.log("server started"); })