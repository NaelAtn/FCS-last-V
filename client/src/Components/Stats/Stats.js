import React, { useState } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SchoolIcon from '@mui/icons-material/School';
import './Stats.css'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { useNavigate } from "react-router-dom";
import CarouselAprops from '../CarouselApropos/CarouselAprops';
import GestionnairedeflotteHome from '../GestionnairedeflotteHome/GestionnairedeflotteHome';
import { Button } from '@mui/material';

const Stats = () => {
    const [counterOn , setCounterOn] = useState(false)
    const navigate = useNavigate()
  return (
    <div>
        <h1 className="offres" data-aos="fade-up">
          Pourquoi FCS ?
        </h1>
        <hr className="hr1" />
        <div className='stat-flex'>     
        <p className='info-intro'>
        FCS vous offre des solutions professionnelles qui
        répondent à tous vos besoins. Des services clés
        en main pour augmenter l’éfficacité et assurer
        l’uniformité du service.
        <br/>
        <span>
        <Button onClick={()=>navigate("/a-propos")} sx={{border : "2px solid rgb(0, 0, 0)" ,mt : "2%" , padding : "1.5%",background : "black" , color : "white",fontFamily : "Abel" ,borderRadius : 0, "&:hover":{color : "black" } }} >Plus de détails</Button>
          </span>       
      </p>
      <GestionnairedeflotteHome/>
      <div className='carousel-stats' >
      <CarouselAprops/>
      </div>
      </div>

      <div className='fcs-infos1'>

    </div>
        <h1 className="offres" data-aos="fade-up">
            Nos Chiffres
        </h1>
        <hr className="hr1" />
    <div className='stats-center'>
        <div className='stats-container'>         
        <div className='stats-info'><ThumbUpAltIcon sx={{color :"#056CF2" , fontSize:"2rem" , mb:'2.5%'}}/> <h1 className='info-number'><ScrollTrigger onEnter={()=>setCounterOn(true)}> {counterOn && <CountUp start={0} end={11} duration={2} delay={0} />}</ScrollTrigger></h1><p className='info-text'>ANNÉES D'EXPÉRIENCE</p> </div>
        <div className='stats-info'><DirectionsCarIcon sx={{color :"#056CF2" , fontSize:"2rem" , mb:'2.5%'}}/><h1 className='info-number'><ScrollTrigger onEnter={()=>setCounterOn(true)}>{counterOn && <CountUp start={0} end={12} duration={2} delay={0} />} k</ScrollTrigger></h1><p className='info-text'>VOITURES LAVÉES</p></div>
        <div className='stats-info'><SchoolIcon sx={{color :"#056CF2" , fontSize:"2rem" , mb:'2.5%'}}/><h1 className='info-number'><ScrollTrigger onEnter={()=>setCounterOn(true)}>{counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}</ScrollTrigger></h1><p className='info-text'>SALARIÉS QUALIFIÉS</p></div>
        <div className='stats-info'><AccessibilityNewIcon sx={{color :"#056CF2" , fontSize:"2rem" , mb:'2.5%'}}/><h1 className='info-number'><ScrollTrigger onEnter={()=>setCounterOn(true)}>{counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}k</ScrollTrigger></h1><p className='info-text'>CLIENTS SATISFAITS</p></div>
        </div>
    </div>
    </div>
  )
}

export default Stats