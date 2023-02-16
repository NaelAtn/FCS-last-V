import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMail } from "../../JS/Actions/mail";
import { Button, CircularProgress, TextField } from "@mui/material";


const ContactForm = () => {
  const load = useSelector((state) => state.mailReducer.load);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleMail = (e) => {
    e.preventDefault();
    let newMail = { name, phone, message, email };
    dispatch(addMail(newMail, setName, setPhone, setEmail, setMessage));
  };

  return (
    <div onSubmit={handleMail}>
      <form >
          <TextField
            fullWidth
            sx={{ mb: "3%", color: "black" }}
            id="standard-basic"
            label="Nom et Prénom*"
            variant="standard"
            onChange={handleName}
            name="name"
            value={name}
            type ="text"
          />
          
          <TextField
            fullWidth
            sx={{ mb: "3%" }}
            id="standard-basic"
            label="(+33) Numéro de téléphone*"
            variant="standard"
            onChange={handlePhone}
            name="phone"
            value={phone}
            type="number"
          />
          <TextField
            fullWidth
            sx={{ mb: "3%" }}
            id="standard-basic"
            label="Adresse E-mail*"
            variant="standard"
            onChange={handleEmail}
            name="email"
            value={email}
            type="email"
          />
          <TextField
            fullWidth
            multiline
            rows={7}
            sx={{ mb: "3%" }}
            id="standard-basic"
            label="Votre Message*"
            variant="standard"
            onChange={handleMessage}
            name="message"
            value={message}
            type="text"
          />
          <br />
          {load ? (
            <Button
              sx={{
                padding: "2%",
                width: "25%",
                borderRadius: 0,
                color: "black",
                backgroundColor: "white",
                border: "2px solid rgb(0, 0, 0)",
                fontFamily : "Abel"
              }}
            >
              <CircularProgress size="1.25rem" sx={{ color: "black" }} />
              Envoyer
            </Button>
          ) : (
            <Button
              onClick={handleMail}
              sx={{
                border: "2px solid rgb(0, 0, 0)",
                background: "black",
                color: "white",
                padding: "2%",
                width: "25%",
                fontFamily : "Abel",
                borderRadius: 0,
                "&:hover": { color: "black", background: "white" },
              }}
            >
              Envoyer
            </Button>
          )}
      </form>
    </div>
  );
};

export default ContactForm;
