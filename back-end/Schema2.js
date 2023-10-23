const mongoose=require('mongoose');
let ProductSchema=new mongoose.Schema({
    items:String,
    brand:String,
    category:String,
    email:String,
    photo:String

})
module.exports=mongoose.model('products',ProductSchema)