// create a folder 'AAA' in 'Temp' folder
// create 'tempt.txt' in AAA
// chk physical mem>1GB ? write sufficient memory : insufficient memory

var os = require('os')
var fs = require('fs')

path = os.tmpdir() + '/AAA'

fs.mkdirSync(path)

phy_mem = os.freemem() / 1000000000
console.log(phy_mem)

if (phy_mem > 1) {
    content = "Sufficient Memory"
} else {
    content = "Insufficient Memory"
}

fs.writeFileSync(path + '/temp.txt', content)

console.log("Done")