const Reservation = require("../model/Reservation");
const nodemailer = require("nodemailer");

exports.addReservation = async (req, res) => {
  try {
    const { name, phone,  time , place} = req.body;
    const newReservation = new Reservation({ ...req.body });
    await newReservation.save();
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
        subject: "Nouvelle résérvation",
        text: `Nouvelle résérvation de ${name} ajoutée pour le ${time} `,
      };
      await transporter.sendMail(mailOptions);
    res
      .status(200)
      .send({success: [
          {msg: "Merci pour votre réservation ...Un de nos conseillers vous contactera au plus vite.",newReservation}]});
  } catch (error) {
    res.status(400).send({ msg: "veuillez réessayer plus tard", error });
  }
};


exports.getReservations = async (req, res) =>{
    try {
        const listReservations = await Reservation.find();
        res.status(200).send({msg : 'list des résérvations',  listReservations})
    } catch (error) {
        res.status(400).send({ msg: "veuillez réessayer plus tard", error });
    }
}


exports.deleteReservation = async(req,res) => {
    try {
        const{_id}= req.params;
        await Reservation.findOneAndDelete({_id})
        res.status(200).send({success : [{msg:"Reservation supprimée"}] })
    } catch (error) {
        res.status(400).send({ msg: "veuillez réessayer plus tard", error }); 
    }
}

exports.updateIsDoneReservation = async(req,res) => {
    try {
        const {id} = req.params;  
        const isDoneReservation = await Reservation.findByIdAndUpdate({_id : req.params.id} , {$set : {isDone : true}})
        isDoneReservation.save()
        res.status(200).send({success : [{msg:"Mise à jour avec succès"}]})

    } catch (error) {
        res.status(400).send({ errors: [{msg: "veuillez réessayer plus tard" }]});      
    }
}


exports.updateNotDoneReservation = async(req,res) => {
    try {
        const {id} = req.params;  
        const NotisDoneReservation = await Reservation.findByIdAndUpdate({_id : req.params.id} , {$set : {isDone : false}})
        NotisDoneReservation.save()
        res.status(200).send({success : [{msg:"Mise à jour avec succès"}]})

    } catch (error) {
        res.status(400).send({ errors: [{msg: "veuillez réessayer plus tard" }]});      
    }
}