const express = require('express');
const app = express();
require('./config');
const Product = require('./Schama');
const Product2 = require('./Schema2');
const Product3 = require('./Schema3');
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';
const multer = require('multer')
// require('./gallery');

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/upload', express.static(__dirname + '/upload'));


////////////////////////////////////////////////////////
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};






app.get('/home', async (req, resp) => {
    let data = await Product.find({});
    resp.send(data);
});







const storageCard = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'upload/');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}_${Date.now()}.jpg`);
    },
});
// const uploadOptions = multer({ storage: storage });


// const storageCard = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(uploadError, 'upload/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.filename+"_"+Date.now()+".jpg" );
//     },
// });
const uploadOptionCard = multer({ storage: storageCard });

// const uploadCard = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) { cb(null, 'upload/') },
//         fileName: function (req, file, cb) { cb(null, file.filename + "_" + Date.now() + ".jpg") }
//     })
// }).single('photo')

app.post('/card', uploadOptionCard.single('photo'), async (req, resp) => {
    // console.log(req.file);
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/upload/`;

    let data = new Product3({
        photo: `${basePath}${fileName}`,
        name:req.body.name,
        email:req.body.email,
        content:req.body.content
    })
    let clone = await data.save();
    console.log(clone);
    resp.send(clone);
})


app.get('/gallery',async(req,resp)=>{
    let data=await Product3.find({});
    // data= await data.json()
    resp.send(data);
    // console.log(data);
})



////signin page APi


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

       
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        // const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}_${Date.now()}.jpg`);
    },
});
const uploadOptions = multer({ storage: storage });

app.post('/insert', uploadOptions.single('photo'), async (req, resp) => {

    const file = req.file;

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/uploads/`;
    let data = new Product({
        photo: `${basePath}${fileName}`,
        email: req.body.email,
        name: req.body.name,
        college: req.body.name,
        password: req.body.password
    });
    data = await data.save();
    data = data.toObject();
    delete data.password;
    Jwt.sign({ data }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) resp.send({ clone: "something went wrong try after a while" });
        resp.send({ data, auth: token });

    })
    // resp.send(req.body);
})


/////////////////////////////////////////////////////////

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        console.log(req.body);
        const data = await Product.findOne(req.body);
        let clone=data;
        console.log(clone,"data console by backend");
        // resp.send(clone);
        if (data) {
            Jwt.sign({ data }, jwtKey, { expiresIn: "1h" }, (err, token) => {
                if (err) resp.send({ data: "something went wrong please try after a while" });
                resp.send({ data, auth: token });
            })
        }
        else resp.send("Invalid Credential");
    } else resp.send('NO result Found');
})

// app.post('/upload',upload,(req,resp)=>{
//     resp.send('request send');
// });

app.post('/add_product', async (req, resp) => {
    const data = new Product2(req.body);
    const clone = await data.save();
    console.log(clone);
    resp.send(clone);
})
app.get('/products', async (req, resp) => {
    const data = await Product2.find();
    // console.log(data);
    resp.send(data)
})
app.delete("/delete/:id", async (req, resp) => {
    const data = await Product2.deleteOne({ _id: req.params.id });
    console.log(data);
    resp.send(data);
})


app.post('/home', async (req, resp) => {
    if (req.body.email && req.body.name) {
        let data = await Product.findOne(req.body);
        if (data) {
            resp.send(data);
        } else resp.send('Invalid Credential');
    }
})

app.put("/update/:id", async (req, resp) => {
    const data = await Product2.updateOne({ _id: req.params.id }, { $set: req.body });
    console.log(data);
    resp.send(data);
})

app.get('/updates/:id', async (req, resp) => {
    const data = await Product2.find({ _id: req.params.id });
    // data=data.json();
    resp.send(data);
})
app.get('/search/:key', async (req, resp) => {
    let data = await Product.find({
        "$or": [
            { "id": { $regex: req.params.key } },
            { "name": { $regex: req.params.key } },
            { "category": { $regex: req.params.key } }
        ]
    });

    if (data.length > 0) resp.send(data);
    else resp.send("No Such data Found Here");
    // resp.send("Update Products");
    console.log(req.params.key);
})

app.listen(5000,console.log("connected succesfully"));
