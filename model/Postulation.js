const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const PostulationSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  adresse: {
    type: String,
    require: true,
  }, 
   email: {
    type: String,
    require: true,
  },
  phone: { 
    type: Number,
     require: true },
  age : {
    type : Number ,
    require : true 
  } , 
  lettre : {
    type: String,
    require: true,
  },
  cv: { type : String,
    require: true
    } , 
    poste : {
      type : String ,
      required : true
    } ,
  cloudinary_id: String
  }
 ,
 {timestamps : true});

module.exports = Postulation = model("postulation", PostulationSchema);
