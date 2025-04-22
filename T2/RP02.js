// display arr of objs in table form on browser
var exp = require('express')
var app = exp()

var obj = [
    {
        name: 'P1', id: 1, marks: 50
    },
    {
        name: 'P2', id: 3, marks: 45
    },
    {
        name: 'P3', id: 11, marks: 47
    }
]

app.get('/table', (req, res) => {
    res.set('content-type', 'text/html')
    res.write("<table border='1px solid black' rules='all' width='500px'>")
    res.write(`<tr><th align='center'>ID</td><th align='center'>Name</td><th align='center'>Marks</td></tr>`)
    for (p in obj) {
        res.write(`<tr><td align='center'>${obj[p].id}</td><td align='center'>${obj[p].name}</td><td align='center'>${obj[p].marks}</td></tr>`)
    }
    res.write('</table>')
    res.send()
})

app.get('/home', (req, res) => {
    res.set('content-type', 'application/json')
    res.send(obj)
})

app.get('/sort', (req, res) => {
    res.set('content-type', 'text/html')
    for (i in obj) {
        for (j in obj) {
            if (obj[i].marks > obj[j].marks) {
                var temp = obj[j]
                obj[j] = obj[i]
                obj[i] = temp
            }
        }
    }

    for (i in obj) {
        res.write(`<h2>Name: ${obj[i].name}, Marks: ${obj[i].marks}</h2>`)
    }
    res.send()
})

app.listen(6001, () => { console.log('Go to http://localhost:6001/home') })