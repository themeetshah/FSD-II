var pm = require('path')

v1 = pm.dirname('D:/A1_MeetS/FSD/Path/abc.html')
v2 = pm.basename('D:/A1_MeetS/FSD/Path/abc.html')
v3 = pm.extname('D:/A1_MeetS/FSD/Path/abc.html')
v4 = pm.parse('D:/A1_MeetS/FSD/Path/abc.html')

console.log('Directory: ' + v1)
console.log('filename: ' + v2)
console.log('extension: ' + v3)
console.log(v4)