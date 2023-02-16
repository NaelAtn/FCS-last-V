import React, { useEffect } from "react";
import "./Actualités.css";
import { Helmet } from "react-helmet";
import { useDispatch,useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import ActusCard from "../../Components/ActusCard/ActusCard";
import {getActus} from "../../JS/Actions/actus"
import Indispo from "../../Components/Indispo/Indispo";
import { Button } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';


const Actualités = () => {
  
  const dispatch = useDispatch();  
  const navigate = useNavigate()
  
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin); 
  const listActus = useSelector((state) => state.actusReducer.listActus);   
  
  useEffect(() => {
    dispatch(getActus());
  }, [dispatch]);
 
  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Actualités</title>
        <link rel="canonical" />
        <meta name="description" content="Actualités groupe FCS" />
        <meta name="description" content="Blog FCS" />
      </Helmet>
      <div className='offreemploibackground'>
      <div className='background-text-offre'>
      <NewspaperIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text">Actualités</h1>
      <p className='text-center' >Découvrez nos actualités récentes.</p>
      </div>
      </div>
      {isAuthAdmin && <Button  variant="contained" onClick={()=>navigate('/ajouter-blog')} sx={{borderRadius : 0 , m : "auto" , alignItems : "center" , justifyContent : "center" , display : "flex" , mt : "3%"}}><AddIcon/> Ajouter nouvelle actualité</Button> }
      <div className="actus-container" >
      {listActus.length>0 ? listActus.map((el)=>( <ActusCard actus={el} key={el.id} />)): <Indispo/>}
      </div>
    </div>
  );
};

export default Actualités;
