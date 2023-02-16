import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subNewsletter } from "../../JS/Actions/newsletter";
import "./NewsLetter.css";
import { Tooltip , CircularProgress, Button, TextField, Grid} from "@mui/material";
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';

const NewsLetter = () => {

  const load = useSelector((state) => state.newsLetterReducer.load);
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    let newEmail = { email };
    dispatch(subNewsletter(newEmail,setEmail));
  };
  
  return (
    <div >
      <form  onSubmit={handleNewsletter}>
        <h1 className="text-footer" data-aos="fade-up">
          Newsletter
        </h1>
        <hr className="hr1" />
        <MarkAsUnreadOutlinedIcon sx={{justifyContent : "center" , alignItems : "center" , display : "flex" , m : "auto" , fontSize : "200%"}} />
        <div className="newletter-text">
          <h3>
            <span style={{ color: "#52D196" }}>Suivez </span>nos dernières
            actualités et événements
          </h3>
        </div>
        <p className="newletter-text">Abonnez-vous à notre newsletter.</p>
        <div className="newsletter-flex">
        <Tooltip title="Veuillez remplir ce champ" followCursor>
        <Grid container xs={6} sm={6} md={4} lg={4}  >
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
      </Grid>
          </Tooltip>
          {load ?
            <Button onClick={handleNewsletter} sx={{background : "#52D196" ,paddingLeft : "2%" , paddingRight : "2%"  ,color : "white" ,padding: "0.8%", mt : "3%"  , borderRadius : 0 ,fontFamily : "Abel" }}><CircularProgress  size="1.25rem"  sx={[{color : "white" }]} />&nbsp;S'abonner</Button>
           :
          <Button onClick={handleNewsletter} sx={{background : "black" ,color : "white" ,padding: "0.8%" ,paddingLeft : "2%" , paddingRight : "2%" , mt : "3%",fontFamily : "Abel" , borderRadius : 0 ,"&:hover":{color : "white" ,background : "#52D196"} }}>S'abonner</Button>
        }

        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
