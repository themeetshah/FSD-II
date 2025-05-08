const expr = require('express')
const app = expr()
const players = require("./Restful_API_03_01");

app.use('/', players)
app.listen(3000, () => {
    console.log("Running at 3000");
});