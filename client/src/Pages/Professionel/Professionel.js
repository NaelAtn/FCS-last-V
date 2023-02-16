import React from "react";
import "./Professionel.css";
import { Helmet } from "react-helmet";
import ProfessionelCards from "../../Components/ProfessionelCards/ProfessionelCards";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import img from "./img.jpg"

const Professionel = () => {
  return (
    <div className="Offredemploi-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Professionel</title>
        <link rel="canonical" />
        <meta name="description" content="Le réseau FCS offre aux gestionnaires de flotte un service sur mesure
        pour chaque entreprise, quelle que soit la taille de la flotte..Des interventions ponctuelles ou régulières sur site aux réparations
        de véhicules et au stockage de proximité, FCS et nos experts
        s'occupent de tout." />
      </Helmet>
      <div className="offreemploibackground">
        <div className="background-text-offre">
        <MyLocationIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
          <h1 className="Offredemploi-text">Professionel</h1>
          <p className="text-center">Nos services entreprise</p>
        </div>
      </div>
      <div className="proffessionel-container">
        <div className="container-aprops-img">
          <img
            src={img}
            alt="fcs-lavage"
            className="img1-a-propos"
          />
          <p className="text-img" data-aos="fade-up">
            Le réseau FCS offre aux gestionnaires de flotte un service sur mesure
            pour chaque entreprise, quelle que soit la taille de la flotte..
            <br />
            <br />
            Des interventions ponctuelles ou régulières sur site aux réparations
            de véhicules et au stockage de proximité, FCS et nos experts
            s'occupent de tout.
          </p>
        </div>
        <ProfessionelCards />
      </div>
    </div>
  );
};

export default Professionel;
