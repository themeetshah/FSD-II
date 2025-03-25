// async write data to a file
// if no err during writing, append data
// finally it should read both the newly appended content and old content of the file
// display it on console

var fs = require('fs')

fs.writeFile('Node/Async_Test2.txt', 'Kasa kaay bhau????\n', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Ho gya likh ke!")
        fs.appendFile('Node/Async_Test2.txt', 'Me maje me hai\n', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Phir se Ho gya likh ke!")
                fs.readFile('Node/Async_Test2.txt', 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(data)
                    }
                })
            }
        })
    }
})