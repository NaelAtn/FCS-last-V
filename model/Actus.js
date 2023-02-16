const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const ActusSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    },
    image : {
        type :String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    likes : {
        type :Number ,
        default: Math.floor(Math.random() * 11) 
    }
     ,
    cloudinary_id: String
} ,
{timestamps : true})


module.exports = Actus = model ('actus' ,ActusSchema )