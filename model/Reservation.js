const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const ReservationSchema = new Schema ({
    
        name : {
            type : String ,
            required : true 
        } ,
        phone : {
            type : Number ,
            required : true
        },
        isDone : {
            type : Boolean,
            default : false
        }
        ,
        time : {
            type : String ,
            required : true 
        }
        ,
        hour : {
            type : String ,
            required : true 
        }
        ,
        place : {
            type : String ,
            required : true
        }
},
{timestamps : true})

module.exports = Reservation = model ('reservation' ,ReservationSchema )