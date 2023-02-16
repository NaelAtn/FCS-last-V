import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {getCandidature} from "../../JS/Actions/candidature"
import CircularProgress from '@mui/material/CircularProgress';
import CandidatureCard from "../../Components/CandidatureCard/CandidatureCard";
import "./Candidature.css"
import Indispo from "../../Components/Indispo/Indispo";

const Candidature = () => {

  const dispatch = useDispatch();

  const listCandidature = useSelector((state) => state.candidatureReducer.listPostulation);   
  const load = useSelector((state) => state.candidatureReducer.load); 

  useEffect(() => {
    dispatch(getCandidature());
  }, [dispatch]);
  
  return (
    <div className="Offredemploi-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Candidatures</title>
        <link rel="canonical" />
        <meta name="description" content="Candidatures" />
      </Helmet>
      <div className="offreemploibackground">
        <div className="background-text-offre">
          <h1 className="Offredemploi-text">Candidatures</h1>
        </div>
      </div>
      <p className="contact-text-form">Liste des candidats</p>
      <div className="candidature-container" >
        {load ? 
        <CircularProgress sx={{color : "black" ,display : "flex" , alignItems : "center" , justifyContent : "center" , m : "auto" , mt :"3%"  }} size="4rem" /> 
          :listCandidature.length > 0 ? 
          listCandidature.map((el)=>( <CandidatureCard  candidature={el} key={el.id}/>)):
          <Indispo/>
      }
      </div>


      
    </div>
  );
};

export default Candidature;
