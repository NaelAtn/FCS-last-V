const express = require("express");
const { addReservation, getReservations, deleteReservation, updateIsDoneReservation, updateNotDoneReservation } = require("../controllers/reservation");
const { reservationValidator, validation } = require("../middlewares/Validatior");
const isAuthAdmin = require("../middlewares/isAuThAdmin");

const router = express.Router();


router.post ("/post-reservation" , reservationValidator(), validation, addReservation )

router.get ("/get-reservation",isAuthAdmin, getReservations)

router.delete ("/:_id" ,isAuthAdmin, deleteReservation)

router.put ("/updateIsDone/:id" , updateIsDoneReservation)

router.put ("/updateNotDone/:id" ,updateNotDoneReservation)

module.exports = router;