
var exp = require('express')
var app = exp()
const multer = require('multer');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/File_Upload_01.html')
});

var storage = multer.diskStorage(
    {
        destination: 'upload',
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }
)

const maxsize = 1000 * 1000 * 1000

const filter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
        return cb('only png')
    }
}

var upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: maxsize
        },
        fileFilter: filter
    }
    // ).single('mypic')
).array('mypic', 5)

app.post('/uploadfile', (req, res) => {
    upload(req, res, (err) => {
        if (err) res.send(err);
        else res.send('Success')
    })
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
