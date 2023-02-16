import React from "react";
import "./Footer.css";
import Logowhite from './FCS-white.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-flex">
        <img src={Logowhite} alt="FCS-Logo" className="white-logo2"/>
          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100064028010764" target='blank' className="v1"> <FacebookIcon sx={{fontSize : "1.8rem" , '&:hover': {color: "#bdbdbd"}}} /></a>
            <a href="https://www.instagram.com/groupe_fcs/" target="blank" className="v1"> <InstagramIcon sx={{fontSize : "1.8rem", '&:hover': {color: "#bdbdbd"}  }}/></a> 
            <a href="https://www.linkedin.com/company/fcs-facilityservices1/about/?viewAsMember=true" target="blank" className="v1"><LinkedInIcon sx={{fontSize : "1.8rem", '&:hover': {color: "#bdbdbd"}}}/></a> 
            <a href="https://twitter.com/auto_fcs" target='blank' className="v1"><TwitterIcon sx={{fontSize : "1.8rem", '&:hover': {color: "#bdbdbd"}}}/></a>
          </div>
          <img src={Logowhite} alt="FCS-Logo" className="white-logo"/>
          <div className="Footer-infos">
            <a className="v1" href="/">Accueil</a>
            <a className="v1" href="/a-propos">À propos</a>
            <a className="v1" href="/contactez-nous">Contact</a>
            <a className="v1" href="/blog">Actualités</a>
          </div>
        </div>
      <hr className="hr2"/>
      <div className="footer-flex">
      <div>
      <EmailIcon sx={{ textAlign : "center" , display : "flex" , margin : "auto" }} />
        <p className="v2">Mail</p>
        <a className="v1" target="blank" href="mailto: contact@groupefcs.com"><p className="v2">contact@groupefcs.com</p></a>
      </div>
      <div>
      <LocalPhoneIcon sx={{ textAlign : "center" , display : "flex" , margin : "auto" }} />
        <p className="v2">Téléphone</p>
       <a className="v1" href="tel:+33 1 47 10 93 90"><p className="v2">+33 1 47 10 93 90</p></a>
      </div>
      <div>
      <LocationOnIcon sx={{ textAlign : "center" , display : "flex" , margin : "auto" }} />
        <p className="v2">Adresse</p>
        <a className="v1" href="https://www.google.com/maps/place/215+Av.+Georges+Clemenceau,+92000+Nanterre,+France/@48.8865303,2.2162472,17z/data=!4m13!1m7!3m6!1s0x47e664edb5503093:0x502c42f8307ae7e8!2s215+Av.+Georges+Clemenceau,+92000+Nanterre,+France!3b1!8m2!3d48.8865303!4d2.2162472!3m4!1s0x47e664edb5503093:0x502c42f8307ae7e8!8m2!3d48.8865303!4d2.2162472" ><p className="v2">215 Av. Georges Clemenceau,92000 Nanterre</p></a>
      </div>
      </div>
        <hr className="hr2"/>
        <p className="footer-text">
           Groupe FCS&copy;{new Date().getFullYear()} | All rights reserved | Designed by Nael Atouani| 
        </p>
      </footer>
    </div>
  );
};

export default Footer;
