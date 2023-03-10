const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const OffredemploiSchema = new Schema ({

    name : {
        type : String ,
        required : true
    } ,
    local : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    role : {
        type : String ,
        required : true
    }
},
{timestamps : true})


module.exports = Offredemploi = model ('offredemploi' , OffredemploiSchema )