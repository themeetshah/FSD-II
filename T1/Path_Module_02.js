// write node js script to check whether file extension is .txt or not
var pm = require('path')

f1 = 'Node/abc.txt'
f2 = 'Node/abc.html'

ext1 = pm.extname(f1)
ext2 = pm.extname(f2)

if (ext1 == '.txt') {
    console.log(f1 + " is a text file")
} else {
    console.log(f1 + " is not a text file")
}

if (ext2 == '.txt') {
    console.log(f2 + " is a text file")
} else {
    console.log(f2 + " is not a text file")
}