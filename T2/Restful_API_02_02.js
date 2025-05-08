const expr = require("express");
const app = expr();
const movies = require("./Restful_API_02_01");

app.use("/", movies);
app.listen(3000, () => {
    console.log("Running at 3000");
});