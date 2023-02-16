const express = require("express");
const { loginAdmin, registerAdmin, updateAdminPassword, getOneAdmin } = require("../controllers/admin");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const { validation, loginValidator, updatePassword } = require("../middlewares/Validatior");

const router = express.Router();

router.post("/loginAdmin",loginValidator(), validation, loginAdmin);

router.post('/registerAdmin' , registerAdmin)

router.put('/password/:_id',isAuthAdmin, updatePassword(), validation,updateAdminPassword) 

router.get("/currentAdmin", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});


module.exports = router;