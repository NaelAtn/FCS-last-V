import React from "react";
import "./ContactFooter.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactFooter = () => {
  return (
    <div className="contactfooter-container" >
      <div><a  href="tel:+33 1 47 10 93 90"><LocalPhoneIcon sx={{fontSize : "2.3rem", color : "black" , padding : "2%" , '&:hover': {color : "#242424"} }}/> </a> </div> <hr/>
      <div><a  target="blank"href="mailto: contact@fcsfacilityservices.fr"> <EmailIcon sx={{fontSize : "2.3rem" , padding : "2%", color : "black", '&:hover': {color : "#242424"}  }}/></a> </div><hr/>
      <div><a href="https://www.facebook.com/profile.php?id=100064028010764" target='blank'><FacebookIcon sx={{fontSize : "2.3rem" , padding : "2%", color : "black", '&:hover': {color : "#242424"}  }}/> </a></div>
    </div>
  );
};

export default ContactFooter;
