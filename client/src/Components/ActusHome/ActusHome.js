import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getActus} from "../../JS/Actions/actus"
import ActusHomeCard from "../ActusHomeCard/ActusHomeCard";
import Indispo from "../Indispo/Indispo";
import "./ActusHome.css"

const ActusHome = () => {
    const dispatch = useDispatch();  
    const navigate = useNavigate()
    const listActus = useSelector((state) => state.actusReducer.listActus);   
    useEffect(() => {
      dispatch(getActus());
    }, [dispatch]);

  return (
    <div>
      <h1 className="offres" data-aos="fade-up">
        Les Actus
      </h1>
      <hr className="hr1" />
        <div className="actus-home-container" >
      {listActus?.length > 0 ? 
        listActus?.map((el)=>( <ActusHomeCard actus={el} key={el._id} />)) : 
        <Indispo/>
      }
       </div>
       <Button onClick={()=>navigate("/blogs")} sx={{fontFamily : "Abel" , border : "2px solid rgb(0, 0, 0)" ,background : "black" , color : "white" ,padding: "1%"  , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center","&:hover":{color : "black" ,background : "white"} }}>Voir toutes les actus FCS ➔</Button>
    </div>
  );
};

export default ActusHome;
