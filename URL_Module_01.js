var url = require('url')

q1 = url.parse('http://audio.google.com:8080/audioplay?docid=1234&h1=en#1234')
q2 = url.parse('http://audio.google.com:8080/audioplay?docid=1234&h1=en#1234', true)

console.log('False:\n')
console.log('Hostname: ' + q1.hostname)
console.log('Path: ' + q1.path)
console.log('Query: ' + q1.query)
console.log('\nTrue:\n')
console.log('Hostname: ' + q2.hostname)
console.log('Path: ' + q2.path)
console.log(q2.query)
console.log(q2.query.docid)