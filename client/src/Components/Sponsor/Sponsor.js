import React, { useEffect } from "react";
import "./Sponsor.css";
import img1 from "./cocacola.png";
import img2 from "./renault.png";
import img3 from "./adrian.png";
import img4 from "./ritz.png";
import img5 from "./total.png";
import img6 from "./avis.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsor = ({myRef1}) => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  
  return (
    <div className="sponsor-margin" ref={myRef1} >
        <div >
          <h1 className="text-footer" data-aos="fade-up">
          Nos Partenaires
          </h1>
          <hr className="hr1"/>
          <div className="sponsor-icons" >
            <img src={img1} alt="cocacola" className="sponsor-ico" loading="lazy" />
            <img src={img2} alt="Renault" className="sponsor-ico" loading="lazy"/>     
            <img src={img5} alt="TotalEnergies" className="sponsor-ico" loading="lazy"/>     
            <img src={img4} alt="Ritz-Carlton" className="sponsor-ico" loading="lazy"/>
            <img src={img3} alt="ADRIAN" className="sponsor-ico" loading="lazy"/>
            <img src={img6} alt="Avis Budget" className="sponsor-ico" loading="lazy"/>
          </div>
        </div>
    </div>
  );
};

export default Sponsor;
