import React from "react";
import "./Apropos.css";
import { Helmet } from "react-helmet";
import img1 from './img1.jpg'
import CarouselAprops from "../../Components/CarouselApropos/CarouselAprops";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useNavigate } from "react-router-dom";

const Apropos = () => {

  const navigate = useNavigate() ;

  return (
    
    <div className="Offredemploi-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | À Propos</title>
        <link rel="canonical" />
        <meta name="description" content="Groupe FCS ,À Propos" />
        <meta name="description" content="Créé en 2012,FCS est devenu un acteur majeur du lavage automobile écologique. Nos techniques durables alliées à une qualité professionnelle sont mises à disposition des acteurs du monde automobile ,Aujourd'hui,FCS propose une large gamme de services complète et adaptée aux besoins automobiles. Nos innovations liés à notre expertise font de nous un référent de ce secteur." />
        <meta name="description" content="FCS vous offre des solutions professionnelles qui répondent à tous leurs besoins. Des services clés en main pour augmenter l'efficacité et assurer l'uniformité du service" />
        <meta name="description" content="Meilleurs forfaits FCS" />
        </Helmet>
      <div className="offreemploibackground">
        <div className="background-text-offre">
        <ContactSupportIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
          <h1 className="Offredemploi-text">À Propos</h1>
          <p className='text-center'>FCS vous offre des solutions professionnelles qui répondent à tous leurs besoins. Des services clés en main pour augmenter l'efficacité et assurer l'uniformité du service</p>
        </div>
      </div> 
      <div  >
      <p className="histoire" data-aos="fade-up" >Notre histoire</p>
      <p className="a-propos-text" data-aos="fade-up" >Créé en 2012,FCS est devenu un acteur majeur du lavage automobile écologique. Nos techniques durables alliées à une qualité professionnelle sont mises à disposition des acteurs du monde automobile</p>
      <div className="carousel-mid" >
      <CarouselAprops/>
      </div>
      <p className="a-propos-text" data-aos="fade-up">Aujourd’hui FCS propose une large gamme de services complète et adaptée aux besoins automobile. Nos innovations liées à notre expertise font de nous un référent de ce secteur.</p>
    
    <div className="container-aprops-img" >
      <img src={img1} alt="fcs-lavage" className="img1-a-propos" loading="lazy"/>
      <p className="text-img" data-aos="fade-up" >Chez FCS,l’humain est au cœur de nos préoccupations.FCS encourage le nettoyage à la vapeur d’eau et à la main avec des produits écologiques et respectueux de l'environnement. Innovant grâce à l’amélioration continue, FCS cherche à proposer la meilleure qualité de service à ses clients de part des process de nettoyage adaptés à chacun de leur besoin.
      </p>
      </div>
    </div>

    <h2 style={{textAlign : "center" , color : "#274C77"}} >
      Découvrez nos meilleurs forfaits
      </h2>

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
             <div className="price-container-info" >
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
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
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
             <div className="price-container-info" >
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
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
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
             <div className="price-container-info" >
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
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    </div>

    <h2 style={{textAlign : "center" , color : "#274C77"}} >
       Rendez nous visite
    </h2> 
    <iframe title="fcs localisation" className="map" width="433" height="200"  frameBorder="0.5" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=215%20Av.%20Georges%20Clemenceau%20Nanterre+(FCS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  );
};

export default Apropos;
