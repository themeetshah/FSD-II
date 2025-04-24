// PB 153
// Write a node.js script using Event handling to perform following tasks in sequence:
//  a) Create file in it named abc.txt and enter data into it.
//  b) Append data to that file abc.txt and print message “Data Appended Successfully”.
//  c) Read the content of the file abc.txt and print the content on http web server.
//  d) Do all the operations of File using asynchronous file system module. And Lastly print the
// message “All operations performed successfully” on console.

import EventEmitter from 'events';
import fs from 'fs';
import http from 'http';

var ee = new EventEmitter()

// a
ee.on('writeData', () => {
    fs.writeFile('Node/abc.txt', 'Hello, World!', (err) => {
        if (err) {
            console.log('Error occurred while writing data to file')
        } else {
            console.log('Data Written Successfully')
            ee.emit('appendData')
        }
    })
})

// b
ee.on('appendData', () => {
    fs.appendFile('Node/abc.txt', 'HEhehehehehe', (err) => {
        if (err) {
            console.log('Error occurred while appending data to file')
        } else {
            console.log('Data Appended Successfully')
            ee.emit('readData')
        }
    })
})

// c
ee.on('readData', () => {
    fs.readFile('Node/abc.txt', (err, out) => {
        if (err) {
            console.log('Error reading')
        } else {
            var h = http.createServer((req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(out);
                res.end()
            });
            h.listen(5000, () => {
                console.log('Server Started at port 5000')
                console.log('All Op performed Successfully')
            });
        }
    })
})

ee.emit('writeData')