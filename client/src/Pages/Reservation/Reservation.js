import React, { useRef } from 'react'
import './Reservation.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ReservationForm from '../../Components/ReservationForm/ReservationForm';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Helmet } from "react-helmet";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Reservation = () => {
  const myRef = useRef(null);
  const scroldown = () => {
    myRef.current.scrollIntoView({ behavior: "smooth",block: 'center',inline: 'center'});
  };

  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Réservation</title>
        <link rel="canonical" />
        <meta name="description" content="Réservez en ligne maintenant pour lavage" />
      </Helmet>
      <div className='offreemploibackground'>
      <div className='background-text-offre'>
      <CalendarMonthIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text" >
      Réservez maintenant
      </h1>
      <p className="text-center">Découvrez nos meilleurs forfaits</p>
      </div>
      </div>

      <div className="price-container" >

      <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",
        backgroundColor : "#F7F7F7"
      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                Citadine
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            29<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 29€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 29€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 49€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 65€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 99€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={scroldown} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",
        backgroundColor : "#F7F7F7"
      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                Berline
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            35<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 35€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 45€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 59€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 75€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 119€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={scroldown} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",
        backgroundColor : "#F7F7F7"
      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                4x4 / SUV Monospace
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            39<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 39€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 49€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 69€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 85€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 129€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={scroldown} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>



      </div>

    <div className='reservation-container'>
      <div className='info-box'>
        <AccessTimeIcon sx={{m : "auto" , alignItems : "center" , display : "flex" , justifyContent : "center" , color :"#056CF2" , fontSize:"2rem" }} />
        <br/>
        <h3 className='text-box'>Horaires d'ouverture</h3>
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
        <a className="res-text" target="blank"href="mailto: contact@groupefcs.com"> <MailIcon/>contact@groupefcs.com</a>
        <a className="res-text" href="https://www.google.com/maps/place/215+Av.+Georges+Clemenceau,+92000+Nanterre,+France/@48.8865303,2.2162472,17z/data=!4m13!1m7!3m6!1s0x47e664edb5503093:0x502c42f8307ae7e8!2s215+Av.+Georges+Clemenceau,+92000+Nanterre,+France!3b1!8m2!3d48.8865303!4d2.2162472!3m4!1s0x47e664edb5503093:0x502c42f8307ae7e8!8m2!3d48.8865303!4d2.2162472"> <LocationOnIcon/> 215 Av. Georges Clemenceau,9000 Nanterre</a>
      <br/>
      <div>
      <a href="https://twitter.com/auto_fcs" target='blank'><TwitterIcon sx={{ cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"}}}  /></a>
      <a href="https://www.facebook.com/profile.php?id=100064028010764" target='blank'><FacebookIcon sx={{ml:"2%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"}}}  /></a>
      <a href="https://www.linkedin.com/company/fcs-facilityservices1/about/?viewAsMember=true" target="blank"><LinkedInIcon sx={{ml:"2%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"} }}/></a>
      <a href="https://www.instagram.com/fcs_lavage_auto/?igshid=YmMyMTA2M2Y%3D" target="blank" ><InstagramIcon sx={{ml:"2%" , cursor :'pointer' , color : "black", '&:hover': {color: "#056CF2"}}}/></a>
      </div>
      </div>
      <div className='res-form' ref={myRef} >
    <ReservationForm />
    </div>
    </div>
    </div>
  )
}

export default Reservation