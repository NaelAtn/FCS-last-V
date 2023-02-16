import React from 'react'
import "./Particulier.css"
import { Helmet } from "react-helmet";
import location from './location.png'
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Particulier = () => {

    const navigate = useNavigate()
    
  return (
    <div className='Offredemploi-top'>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Particulier</title>
        <link rel="canonical" />
        <meta name="description" content="sites références fcs , particulier " />
      </Helmet>
      <div className='offreemploibackground'>
        <div className='background-text-offre'>
        <MapIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text" >Particulier</h1>
      <p className='text-center'>Retrouvez nous sur un de nos sites références.</p>
      </div>
      </div>
      <br/><br/>
      <Button onClick={()=>navigate("/reservation")} sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white" ,fontSize : "0.8rem",padding: "1%" , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant &nbsp;&nbsp;<EventAvailableIcon/> </Button>

      <div className='particulier-container'>
        <div className='particulier-card'  data-aos="flip-up"  >
                <img src={location} alt="localisation" className='location-img' />
                <p className='total-color' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Saint germain Niv-1; 169 Boulevard Saint Germain, 75006 Paris </p>
        </div>       
        <div className='particulier-card'  data-aos="flip-down" >
        <img src={location} alt="localisation" className='location-img' loading="lazy"/>
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo place vendome Niv -1; 28 Place Vendome, 75001 Paris</p>
        </div>

        <div className='particulier-card'  data-aos="flip-up" >
        <img src={location} alt="localisation" className='location-img' loading="lazy"/>
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Paris Louvre Samaritaine Niv -1; Pl; Du Louvre, 75001 Paris </p>
        </div>

        <div className='particulier-card'  data-aos="flip-down">
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Saint sulpice Niv -2; 8 place saint sulpice, 75006 Paris</p>
        </div>

        <div className='particulier-card' data-aos="flip-up" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Muse Niv -2; 2 rue des messageries, 57000 Metz </p>
        </div>

        <div className='particulier-card' data-aos="flip-down" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Réaumur Saint Denis Niv -1; 40 rue Dussoubs, 75002 Paris </p>
        </div>

        <div className='particulier-card' data-aos="flip-up" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Marché St Honoré Niv -2; 39 Place du marché Saint Honoré, 75001 Paris</p>
        </div>

        <div className='particulier-card'  data-aos="flip-down" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Paris Soufflot Pnthéon Niv -2; 22 Rue Soufflot, 75005 Paris </p>
        </div>

        <div className='particulier-card' data-aos="flip-up" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Croix des petits champs Niv-2; 14 Rue croix des petits champs, 75001 Paris </p>
        </div>

        <div className='particulier-card' data-aos="flip-down" >
        <img src={location} alt="localisation" className='location-img' />
        <p className='particulier-text' >Total Wash</p>
            <p className='particulier-text' >Parking indigo Paris Saint Martin Niv ; 254 Rue saint martin face au, 75003 PARIS </p>
        </div>

      </div>
      </div>
  )
}

export default Particulier