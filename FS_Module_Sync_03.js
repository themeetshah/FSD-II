// JSON obj having shape name and dimension and calculate perimeter and write in Shapes.txt
var ps = require('fs')

var shapes = [
    {
        name: 'Square',
        dimension: 5,
    },
    {
        name: 'Circle',
        dimension: 10,
    },
]

var output = 'Perimeter:\n'
var peri_sq = shapes[0].dimension * 4
var peri_circle = shapes[1].dimension * 2 * Math.PI
output += 'Square: ' + peri_sq + '\n'
output += 'Circle: ' + peri_circle + '\n'
ps.writeFileSync('Node/Shapes.txt', output)
