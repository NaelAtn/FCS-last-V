import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import ContactHome from "../../Components/ContactHome/ContactHome";
import Stats from "../../Components/Stats/Stats";
import { useNavigate } from "react-router-dom";
import HomeVideo from "../../Components/HomeVideo/HomeVideo";
import { Typewriter } from 'react-simple-typewriter'
import ActusHome from "../../Components/ActusHome/ActusHome";
import Prices from "../../Components/Prices/Prices";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1100,
      once: true, });
  }, []);

  const myRef = useRef(null);
  const scroldown = () => {
    myRef.current.scrollIntoView({ behavior: "smooth"});
  };

  const navigate = useNavigate()
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS, Lavage Auto ,Specialiste dans le lavage bio ecologique et gestion de flotte</title>
        <link rel="canonical"/>
        <meta
          name="description"
          content="FCS Lavage Auto Specialiste dans le lavage bio ecologique et gestion de flotte depuis 2012 , Convoyage de vos véhicules, lavage et désinfection Bio écologique par la vapeur de l'extérieur et de l'habitacle, prestations sur site ou sur l'un de nos nombreux centres partout en France. Confiez-nous vos véhicules, FCS s'occupe de tout !"
        />
        <meta
        name="description"
        content="FCS vous offre des solutions professionnelles qui répondent à tous votres besoins. Des services clés en main pour augmenter l'efficacité et assurer l'uniformité du service"
      />
      <meta
      name="description"
      content="Convoyage de vos véhicules, lavage et désinfection Bio écologique par la vapeur de l'extérieur et de l'habitacle, prestations sur site ou sur l'un de nos nombreux centres partout en France. Confiez-nous vos véhicules, FCS s'occupe de tout !"
    />
      </Helmet>
      <div className="intro" >
        <div className="text-backgound">
          <div>
            <h1 className="FCS">FCS</h1>
            <h1 className="service">GROUPE</h1>
          </div>
          <div className="description2">
            <h4 className="description">
      <Typewriter 
      words={["Spécialiste dans le lavage Bio écologique et gestionnaire de flotte depuis 2012"]}
      typeSpeed={40}
      />
            </h4>
            <div className="home-btns-1">
              <div className="home-btns">
                <button className="home-button" onClick={()=>navigate("/reservation")}>Réserver maintenant</button>
                <button className="home-button1" onClick={scroldown}>
                  Nos services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="water-background" >
        <p className="a-propos" ref={myRef}>
          À Propos
        </p>
        <h1 className="offres" data-aos="fade-up">
          Découvrez Nos Meilleurs Services
        </h1>
        <ServiceCard />
        </div>
        <Stats/>
        <HomeVideo/>
        <Prices/>
        <h1 className="offres" data-aos="fade-up">
          Contactez Nous
        </h1>
        <ContactHome />
        <ActusHome/>
        <br/><br/>
        <div>
        <h1 className="offres" data-aos="fade-up">
        Rendez nous visite
      </h1>
      <hr className="hr1" />
        <iframe title="fcs localisation" className="map" width="433" height="200"  frameBorder="0.5" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=215%20Av.%20Georges%20Clemenceau%20Nanterre+(FCS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </div> 
  );
};

export default Home;
