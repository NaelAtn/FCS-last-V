const Offredemploi = require("../model/Offredemploi")


exports.addOffredemploi= async(req,res)=> {
    try {
        const {name , local , description , role } = req.body
        const newOffredemploi = new Offredemploi({...req.body })
        await newOffredemploi.save()
        res.status(200).send({success : [{msg:"Offre d'emploi ajouté avec succés"}] , newOffredemploi })
    } catch (error) {
        res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
    }
}



exports.getOffredemploi = async (req,res) => {
    try {
        const listOffredemploi = await Offredemploi.find();
        res.status(200).send({msg : "list des offres d'emploi" , listOffredemploi})       
    } catch (error) {
        res.status(400).send({msg : 'cannot get ', error})
    }
  }

  exports.deleteOffredemploi = async (req,res) => {
    try {
        const{_id}= req.params;
        await Offredemploi.findOneAndDelete({_id})
        res.status(200).send({success : [{msg:"offre d'emploi supprimé"}] })
    } catch (error) {
        res.status(400).send({msg : "cannot delete ", error})      
    }
}     


exports.getOneOffredemploi = async (req,res) => {
   try{ 
    const{_id}= req.params;
    const offreToGet = await Offredemploi.findOne(req.params);
    res.status(200).send({msg : 'get offer ',offreToGet})
    
} catch (error) {
    res.status(400).send({msg : 'fail to get', error})
} }
