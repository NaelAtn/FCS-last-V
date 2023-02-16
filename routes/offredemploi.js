const express = require("express");
const { addOffredemploi, getOffredemploi, deleteOffredemploi, getOneOffredemploi } = require("../controllers/offredemploi");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const { addoffreValidator, validation } = require("../middlewares/Validatior");


const router = express.Router();

router.post("/add-offre-d-emploi" , isAuthAdmin , addoffreValidator(), validation,addOffredemploi)

router.get("/get-offre-d-emploi" ,getOffredemploi)

router.get("/:_id" ,getOneOffredemploi)

router.delete ("/:_id" ,isAuthAdmin, deleteOffredemploi)

module.exports = router;