const express = require("express");
const cloudinary = require("../middlewares/cloudinary");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const upload = require("../middlewares/multer");
const Actus = require("../model/Actus");
const router = express.Router();

router.post("/postActus",isAuthAdmin , upload.single("image"), async (req, res) => {
    try {

      const result = await cloudinary.uploader.upload(req.file.path,{
        folder : "Actus"
      });

      let actus = new Actus({
        name: req.body.name,
        description : req.body.description,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
 
      await actus.save();
      res.status(200).send({success : [{msg:"Actualitée ajouté avec succès"}] , actus  })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "Veuillez remplir tous les champs requis" }] , error })    
    }
  });

router.get("/getActus", async(req,res) => {
    try {
        const listActus = await Actus.find();
        res.status(200).send({msg : 'list Blog',  listActus })
    } catch (error) {
        res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
 
    }
}  )


router.get("/getoneactus/:id" , async(req,res)=>{
  try {
    const{id}= req.params;
    const actusToGet = await Actus.findOne(req.params);
    res.status(200).send({msg : 'one blog',  actusToGet })
  } catch (error) {
    res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
  }
})


router.delete("/delete/:id",isAuthAdmin ,async (req, res) => {
    try {
      let actus = await Actus.findById(req.params.id);
      await cloudinary.uploader.destroy(actus.cloudinary_id);
      await actus.remove();
      res.status(200).send({success : [{msg:"Actualité supprimée avec succès"}]  })
    } catch (error) {
        res.status(400).send({ errors: [{ msg:'veuillez réessayer plus tard'}] , error})    
    }
  });


router.put("/removeFav/:id" , async(req,res)=> {
  const{id}= req.params;
  try {
     await Actus.findByIdAndUpdate({_id : req.params.id} , { $inc: {likes : -1}});
     res.status(200).send({msg : 'removed from fav'})
  } catch (error) {
    res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
  }
})


router.put("/addFav/:id" , async(req,res)=> {
  const{id}= req.params;
  try {
     await Actus.findByIdAndUpdate({_id : req.params.id} , { $inc: {likes : 1}});
     res.status(200).send({success : [{msg:"Ajoutée a fav"}]  })
  } catch (error) {
    res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
  }
})

module.exports = router;