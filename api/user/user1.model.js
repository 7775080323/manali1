const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    firstname :String,
    lastname:String,
    
});

const user1model=mongoose.model('user1',userSchema);

module.exports={
    user1model
}