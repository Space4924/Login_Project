const mongoose=require('mongoose');
const InfoSchema=new mongoose.Schema({
    name:String,
    college:String,
    password:String,
    email:String,
    photo:String
});
module.exports=mongoose.model('clones',InfoSchema);