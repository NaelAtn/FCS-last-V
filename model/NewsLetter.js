const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const NewsletterSchema = new Schema ({
    email : {
        type : String ,
        require : true ,
        unique : true
    }
})


module.exports = Newsletter = model ('newsletter' ,NewsletterSchema )