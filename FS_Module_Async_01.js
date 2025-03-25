var fs = require('fs')

fs.readFile('Node/Time.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})

console.log("Last Statement")


fs.writeFile('Node/Async_test.txt', 'kasa kaay?', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log("Ho gya likh ke!!")
    }
})