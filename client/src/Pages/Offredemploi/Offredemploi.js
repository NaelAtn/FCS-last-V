import React, { useEffect } from 'react'
import "./Offredemploi.css"
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { getOffredemploi } from '../../JS/Actions/offredemploi';
import OffredemploiCard from '../../Components/OffredemploiCard/OffredemploiCard';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Indispo from '../../Components/Indispo/Indispo';
import LoadOffre from '../../Components/LoadOffre/LoadOffre';
import { Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Offredemploi = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const listOffredemploi = useSelector((state) => state.offredemploiReducer.listOffredemploi); 
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);   
  const load = useSelector((state) => state.offredemploiReducer.load); 

  useEffect(() => {
    dispatch(getOffredemploi());
  }, [dispatch]);

  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Offre d'Emploi</title>
        <link rel="canonical" />
        <meta name="description" content="Offre d'Emploi groupe FCS" />
      </Helmet>
      <div className='offreemploibackground'>
      <div className='background-text-offre'>
      <BusinessCenterIcon  sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text" >Offre d'Emploi</h1>
      <p className='text-center' >Découvrez nos offres d'emploi et rejoignez notre équipe .</p>
      </div>   
      </div>
      <div className="prices-bg">
      {listOffredemploi.length > 0 && <p className="contact-text-form">Emplois disponibles <EventAvailableIcon/> </p> }
      {isAuthAdmin && <Button variant="contained"  onClick={()=>navigate('/ajouter-offre-d-emploi')}  sx={{borderRadius : 0 , m : "auto" , alignItems : "center" , justifyContent : "center" , display : "flex" , mt : "3%"}} ><AddIcon/> Ajouter nouveau offre</Button> }

      <div className='offredemploicontainer'>
      {load ?
         <LoadOffre/>
       : listOffredemploi.length > 0 ?
       listOffredemploi.map((el)=>( <OffredemploiCard offredemploi={el} key={el.id} /> 
       )) :
       <Indispo/>
    }
    </div>
    </div>
      
      </div>
  )
}

export default Offredemploi