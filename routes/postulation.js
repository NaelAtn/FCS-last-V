const express = require("express");
const cloudinary = require("../middlewares/cloudinary");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const upload = require("../middlewares/multer");
const Postulation = require("../model/Postulation");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/add-postulation" ,upload.single("cv"), async (req, res) => {
    try {

      const result = await cloudinary.uploader.upload(req.file.path,{
        folder : "Candidature"
      });

      let postulation = new Postulation({
        name: req.body.name,
        adresse : req.body.adresse,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age,
        lettre : req.body.lettre,
        poste : req.body.poste ,
        cv: result.secure_url,
        cloudinary_id: result.public_id,
      });
      // save user details in mongodb
      await postulation.save();

          let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_MAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
      let mailOptions = {
        from: process.env.GMAIL_MAIL,
        to: process.env.GMAIL_MAIL,
        subject: "Nouvelle canadidature",
        text: `Nouvelle candidature de ${req.body.name} ajoutée pour la poste ${req.body.poste} `,
      };
      await transporter.sendMail(mailOptions);

      res.status(200).send({success : [{msg:"Candidature envoyée avec succès...Un de nos conseillers vous contactera au plus vite"}] , postulation  })

    } catch (error) {
        res.status(400).send({ errors: [{ msg: "Veuillez remplir tous les champs requis" }] , error })   
    }
  } )

router.get('/get-postulation', isAuthAdmin,async(req,res) => {
    try {
        const listPostulation = await Postulation.find();
        res.status(200).send({msg : 'list Postulation',  listPostulation })
    } catch (error) {
        res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
    }
} )

router.delete('/delete-postulation/:id',isAuthAdmin,async (req, res) => {
    try {

      let postulation = await Postulation.findById(req.params.id);
    
      await cloudinary.uploader.destroy(postulation.cloudinary_id);

      await postulation.remove();
      res.status(200).send({success : [{msg:"Candidature supprimée avec succès"}]  })
    } catch (error) {
        res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
    }
  } )

module.exports = router;