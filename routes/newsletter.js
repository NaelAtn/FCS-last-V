const express = require("express");
const { subNewsLetter, getNewsLetters, deleteNewsLetters} = require("../controllers/newsletter");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const { newsLetterValidator, validation } = require("../middlewares/Validatior");

const router = express.Router();

router.post("/addNewsLetter" , newsLetterValidator(), validation, subNewsLetter)

router.get("/list-newsletter" ,isAuthAdmin, getNewsLetters)

router.delete("/:_id",isAuthAdmin, deleteNewsLetters) 



module.exports = router;