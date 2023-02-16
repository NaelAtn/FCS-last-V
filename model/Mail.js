const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const MailSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    } ,
    email : {
        type : String ,
        required : true 
    } ,
    message : {
        type : String ,
        required : true 
    }, 
    phone : {
        type : Number ,
        required : true
    },
    content : {
        type : String ,
        required : true 
    }
})

module.exports = Mail = model ('mail' ,MailSchema )
