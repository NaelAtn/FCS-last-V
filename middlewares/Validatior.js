const { check , validationResult } = require("express-validator")


exports.mailValidator = () => [  
    check("name" , "Veuillez insérer votre Nom et Prénom !").not().isEmpty(),
    check("email" , "N'est pas un e-mail").isEmail(),
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(),
    check("message" , "Veuillez insérer votre Message").not().isEmpty()
]

exports.loginValidator = () => [
    check("name" , "Veuillez insérer votre Nom !").not().isEmpty(),
    check("password" , "Veuillez insérer votre mot de passe !").not().isEmpty(),
]

exports.updatePassword = () => [
    check("password" , "Votre mot de passe doit comporter 6 caractères minimum!").isLength({min:6, max:10})
]

exports.newsLetterValidator = () => [
    check("email" , "Veuillez insérer un e-mail valide").isEmail(),
]

exports.reservationValidator = () => [
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(), 
    check("name" , "Veuillez insérer votre Nom et Prénom !").not().isEmpty(), 
    check("time" , "Veuillez insérer la date !").not().isEmpty(),
    check("place" , "Veuillez choisir l'adresse !").not().isEmpty(),
]

exports.addoffreValidator = () => [
    check("name" , "Veuillez insérer le titre de l'offre ").not().isEmpty(), 
    check("local" , "Veuillez insérer le local !").not().isEmpty(), 
    check("description" , "Veuillez insérer la description du poste !").not().isEmpty(),
    check("role" , "Veuillez insérer le role du poste !").not().isEmpty(),
]

exports.validation = (req , res , next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }
    next();
}