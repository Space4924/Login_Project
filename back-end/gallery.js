const express = require('express');
const multer = require('multer');
const app = express();
const Product = require('./Schema3');
require('./config');

app.use('/upload', express.static(__dirname + '/upload'));

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) { cb(null, 'upload/') },
        fileName: function (req, file, cb) { cb(null, file.filename + "_" + Date.now() + ".jpg") }
    })
}).single('photo');

app.post('/upload', upload, async (req, resp) => {
    console.log('clone');
    const file = req.file;

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/upload/`;

    let data = new Product({
        photo: `${basePath}${fileName}`,
    })
    let clone = await data.save();
    console.log(clone);
    resp.send(clone);
})
