const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const foundAdmin = await Admin.findOne({ name });
    if (!foundAdmin) {
      return res
        .status(400)
        .send({ errors: [{ msg: "veuillez vérifier votre nom" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!checkPassword) {
      return res
        .status(400)
        .send({ errors: [{ msg: "veuillez vérifier votre mot de passe" }] });
    }
    const token = jwt.sign(
      {
        id: foundAdmin._id,
      },
      process.env.SCRT_KEY,
      { expiresIn: "240h" }
    );
    res
      .status(200)
      .send({ success: [{ msg: "welcome back" }], admin: foundAdmin, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "admin non touvé" }] });
  }
};



exports.registerAdmin = async(req,res) =>{
  try {
      const { name, password} = req.body;
      
      const foundAdmin = await Admin.findOne({name})
      if(foundAdmin){
         return  res.status(400).send({errors: [{ msg : "Nom... Réessayez"}]})
      }
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds )
      const newAdmin = new Admin({...req.body})
      newAdmin.password = hashedPassword;

 
      await newAdmin.save()
      
 
      const token = jwt.sign({
          id : newAdmin._id
      },
      process.env.SCRT_KEY,{expiresIn: "240h"}
      )
      res.status(200).send({ success : [{msg : "Inscription avec succès..."}] , admin : newAdmin , token})

  } catch (error) {
      res.status(400).send({ errors : [{ msg : "inscription non reussi ... "}]})
  }
}



exports.updateAdminPassword = async (req, res) => {
  const { oldPassword, password , confirmedpassword } = req.body;
  const{_id}= req.params;
  try {
    // get user
    const admin = await Admin.findById(req.params);
    if (!admin) {
        return res.status(400).send('User not found');
    }

    // validate old password
    const isValidPassword = await bcrypt.compare(oldPassword, admin.password);
    if (!isValidPassword) {
        return res.status(400).send({ errors : [{ msg : "Veuillez vérifier votre ancien mot de passe "}]});
    }
    
      if (password !== confirmedpassword)
      {
        return res.status(400).send({ errors : [{ msg : "Veuillez vérifier votre nouveau mot de passe "}]});
      }
    // hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // update user's password
    admin.password = hashedPassword;

    const updatedAdminPassword = await admin.save();

    return res.json({success : [{msg:"Votre mot de passe a été modifié avec succès"}] , admin : updatedAdminPassword});

  } catch (err) {
    return res.status(400).send({errors : [{ msg : "Veuillez réessayer ultérieurement "}]});
  }
};

