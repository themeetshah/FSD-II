var ps = require("fs")
// ps.mkdirSync("Node")
ps.writeFileSync("Node/write.txt", "Helllo\n");
ps.appendFileSync("Node/write.txt", "Kaisee Hoo???");

// data = ps.readFileSync("Node/write.txt")
// console.log(data.toString());
data = ps.readFileSync("Node/write.txt", "utf-8")
console.log(data);
// ps.renameSync("Node/write.txt","Node/readWrite.txt");
// ps.unlinkSync("Node/readWrite.txt")