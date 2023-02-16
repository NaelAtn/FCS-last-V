import React from 'react'
import "./GestionnairedeflotteHome.css"
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"

const GestionnairedeflotteHome = () => {
  return (
    <div className='gdh-container' >
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300">
            <img src={img1} alt="PRÉPARATION ESTHÉTIQUE (VN-VO)" className='img-gdh' />
            <p className='gdh-text' >PRÉPARATION ESTHÉTIQUE (VN-VO)</p>
        </div>
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700">
            <img src={img2} alt="PRÉPARATION MÉCANIQUE (VN)" className='img-gdh' />
            <p className='gdh-text'>PRÉPARATION MÉCANIQUE (VN)</p>
        </div>
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100">
            <img src={img3} alt="LAVAGE ATELIER / HALL" className='img-gdh' />
            <p className='gdh-text'>LAVAGE ATELIER / HALL</p>
        </div>
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <img src={img4} alt="CONVOYAGE / JOCKEYAGE" className='img-gdh' />
            <p className='gdh-text'>Convoyage/ Jokey</p>
        </div>
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900">
            <img src={img5} alt="RECONDITIONNEMENT VO" className='img-gdh' />
            <p className='gdh-text'>RECONDITIONNEMENT VO</p>
        </div>
        <div className='gdh-card' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2300">
            <img src={img6} alt="STOCKAGE DE PROXIMITÉ" className='img-gdh' />
            <p className='gdh-text'>STOCKAGE DE PROXIMITÉ</p>
        </div>

    </div>
  )
}

export default GestionnairedeflotteHome