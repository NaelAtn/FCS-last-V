import React from 'react'
import './ContactUs.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ContactForm from '../../Components/ContactForm/ContactForm'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import { Helmet } from "react-helmet";
import MarkunreadIcon from '@mui/icons-material/Markunread';

const ContactUs = () => {
  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Contactez Nous</title>
        <link rel="canonical" />
        <meta name="description" content="Contactez Nous , Contact Us" />
        <meta name="description" content="Convoyage de vos véhicules, lavage et désinfection Bio écologique par la vapeur de l'extérieur et de l'habitacle, prestations sur site ou sur l'un de nos nombreux centres partout en France. Confiez-nous vos véhicules, FCS s'occupe de tout ." />
      </Helmet>
      <div className='offreemploibackground'>
      <div className='background-text-offre' >
      <MarkunreadIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text" >
      Contactez Nous
      </h1>
      <p className='text-center' >
        Convoyage de vos véhicules, lavage et désinfection Bio écologique
            par la vapeur de l'extérieur et de l'habitacle, prestations sur site
            ou sur l'un de nos nombreux centres partout en France. Confiez-nous
            vos véhicules, FCS s'occupe de tout .</p>

      </div>
      </div>
        <div className='ContactUs-container'>  
        <div className='info-box-contact'>
        <AccessTimeIcon sx={{m : "auto" , alignItems : "center" , display : "flex" , justifyContent : "center" , color :"#056CF2" , fontSize:"2rem" }} />
        <br/>
        <h3 className='text-box'>Horaires  de travail</h3>
        <p className='text-box'>ouvert tous les jours</p>
        <br/>
        <h4  className='text-box'>De lundi ➔ vendredi</h4>
        <p style={{color : "#056CF2"}} className='text-box'>09:00 matin - 18:00 après-midi</p>
        <br/>
        <h4 className='text-box'>Du samedi ➔ dimanche</h4>
        <p style={{color : "#056CF2"}} className='text-box'>09:00 matin - 18:00 après-midi</p>

        <hr className="hr1" />
        <ContactSupportOutlinedIcon sx={{m : "auto" , alignItems : "center" , display : "flex" , justifyContent : "center" , color :"#056CF2" , fontSize:"2rem" }}/>
        <br/>
        <h3 className='text-box'>Contactez-Nous</h3>
        <br/>
        <a className="res-text" href="tel:+33 1 47 10 93 90"> <LocalPhoneIcon/> +33 1 47 10 93 90</a>
        <a className="res-text" target="blank" href="mailto: contact@groupefcs.com"> <MailIcon/> contact@groupefcs.com</a>
        <a className="res-text" href="https://www.google.com/maps/place/215+Av.+Georges+Clemenceau,+92000+Nanterre,+France/@48.8865303,2.2162472,17z/data=!4m13!1m7!3m6!1s0x47e664edb5503093:0x502c42f8307ae7e8!2s215+Av.+Georges+Clemenceau,+92000+Nanterre,+France!3b1!8m2!3d48.8865303!4d2.2162472!3m4!1s0x47e664edb5503093:0x502c42f8307ae7e8!8m2!3d48.8865303!4d2.2162472"> <LocationOnIcon/> 215 Av. Georges Clemenceau,9000 Nanterre</a>
      <br/>
      <hr className="hr1" />
      <ForwardToInboxOutlinedIcon sx={{m : "auto" , alignItems : "center" , display : "flex" , justifyContent : "center" , color :"#056CF2" , fontSize:"2rem" }}/>
      <br/>
      <h3 className='text-box'>Poser une question?</h3>
      <ContactForm/>
      <div>
      <a href="https://twitter.com/auto_fcs" target='blank'><TwitterIcon sx={{ cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"}}}  /></a>
      <a href="https://www.facebook.com/profile.php?id=100064028010764" target='blank'><FacebookIcon sx={{ml:"4%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"} , mt:"6%"}}  /></a>
      <a href="https://www.linkedin.com/company/fcs-facilityservices1/about/?viewAsMember=true" target="blank"><LinkedInIcon sx={{ml:"4%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"} }}/></a>
      <a href="https://www.instagram.com/groupe_fcs/" target="blank" ><InstagramIcon sx={{ml:"4%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"}}}/></a>
      </div>
      </div>
      </div>

</div>
  )
}

export default ContactUs