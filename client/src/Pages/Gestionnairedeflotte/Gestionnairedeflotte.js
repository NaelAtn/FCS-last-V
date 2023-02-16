import React from "react";
import "./Gestionnairedeflotte.css";
import { Helmet } from "react-helmet";
import img2 from "./img2.jpg"
import img1 from "./img1.jpg"
import Gestionnairedeflootecards from "../../Components/Gestionnairedeflootecards/Gestionnairedeflootecards";
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

const Gestionnairedeflotte = () => {
  
  return (
    <div className="bck-gdf" >
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Gestionnaire de Flotte</title>
        <link rel="canonical" />
        <meta name="description" content="Groupe FCS ,Gestionnaire de Flotte" />
        <meta name="description" content="services concessionnaires" />
        <meta name="description" content="Que vous soyez un groupe national, régional, multirégional ou bien une concession automobile unique, FCS est la réponse à vos besoins." />
        <meta name="description" content="Une adaptabilité doublée à une réactivité pour vous proposer des solutions sur-mesure." />
        <meta name="description" content=">De la préparation esthétique en passant par la préparation mécanique sans oublier le convoyage et le stockage, le réseau s’adapte à vos problématiques." />  
        </Helmet>

      <div className='offreemploibackground'>
        <div className='background-text-offre' >
        <LocalCarWashIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}}/>
      <h1 className="Offredemploi-text">Gestionnaire de Flotte</h1>
      <p className='text-center'>Nos services concessionnaires.</p>
      <p className='text-center'>Que vous soyez un groupe national, régional, multirégional ou bien une concession automobile unique, FCS est la réponse à vos besoins.</p>
      </div>
      </div>    


      <div className="gdf-containers" >

        <div className="g-d-f-container1" >
          <img src={img2} alt="FCS-Lavage" className="g-d-f-img" />
          <p className="g-d-f-text" data-aos="fade-up" >Une <span style={{color : "#056CF2"}} >adaptabilité doublée</span> à une réactivité pour vous proposer des solutions sur-mesure.</p>
        </div>

        <div className="g-d-f-container2" >
          <p className="g-d-f-text"  data-aos="fade-down" >De la <span style={{color : "#056CF2"}} >préparation esthétique</span> en passant par la <span style={{color : "#056CF2"}} >préparation mécanique</span> sans oublier le convoyage et le stockage, le réseau s’adapte à vos problématiques.</p>
          <img src={img1} alt="FCS-Lavage" className="g-d-f-img" />
        </div>
        
      </div>
      <Gestionnairedeflootecards/>
    </div>
    </div>

  );
};

export default Gestionnairedeflotte;
