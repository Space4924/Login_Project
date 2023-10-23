const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    photo:String,
    name:String,
    content:String,
    email:String
});
module.exports=mongoose.model('photoes',productSchema);