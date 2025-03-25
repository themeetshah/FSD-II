const fs = require("fs");

// Define an array of objects with name and age properties
const data = [
    { name: "Stud1", age: 21 },
    { name: "Stud2", age: 22 },
    { name: "Stud3", age: 19 }
];

// Write to file
fs.writeFileSync("Node/Student.txt", JSON.stringify(data, null, 2), "utf-8");

// Read file
const read_data = fs.readFileSync("Node/Student.txt", "utf-8");

// Parse JSON and log to console
console.log(JSON.parse(read_data));
