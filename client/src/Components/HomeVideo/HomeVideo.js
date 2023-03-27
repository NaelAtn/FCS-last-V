import React from "react";
import "./HomeVideo.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const HomeVideo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="HomeVideo-container">
        <video  controls 
          loading="lazy"> 
          <source src="https://res.cloudinary.com/dlnrtlftr/video/upload/v1673515053/tegyhjydz01ecv5ju4gn.mp4" type="video/mp4" /> 
        </video>
        <div className="homevideo-text">
          <h1 className="homevideo-title">
          Lavage auto <span style={{ color: "#056CF2" }}>à la main</span>
          </h1>
          <p>
            Dans les centres de lavage à la main Wash, vous bénéficiez d’un
            nettoyage professionnel de votre voiture, jusque dans les moindres
            recoins de l’habitacle. En plus d’une aspiration intérieure
            complète, nos professionnels peuvent se charger du pressing des
            tapis, des moquettes et des sièges. Les finitions intérieures sont
            réalisées avec des produits d’entretien professionnels spécialement
            adaptés et respectueux des matériaux à l’intérieur de votre voiture.
            Vous n’aurez plus qu’à récupérer les clés : votre centre de lavage
            Wash se charge du reste !
          </p>
          <br />
          <Button onClick={() => navigate("/particulier")} sx={{background : "#056CF2" ,color : "white" ,padding: "1.5%"  , borderRadius : 0,fontFamily : "Abel" ,"&:hover":{color : "white" ,background : "#025cd1"} }}>Plus de détails</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
