import React, { useEffect } from "react";
import "./ServiceCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="service-container2">

      <figure className="image-block" >
        <img src="https://res.cloudinary.com/dlnrtlftr/image/upload/v1675773504/btd1bkqh0lojlx8kdel4.jpg" alt="fcs particulier" className="img-service" loading="lazy"/>
        <figcaption>
          <h4>Particulier </h4>
          <br />
          <p className="service-detail">✓ Retrouvez nous sur <br/>&nbsp;&nbsp; un de nos sites<br/>&nbsp;&nbsp; références</p>
          <a href="/particulier" className="v5">
            En savoir plus ➔
          </a>
        </figcaption>
      </figure>
      <figure className="image-block" >
        <img src="https://res.cloudinary.com/dlnrtlftr/image/upload/v1675773395/c0ls3wzxzao8ydrfmdrp.jpg" alt="fcs Gestionnaire de flotte" className="img-service" loading="lazy" />
        <figcaption>
          <h4>Gestionnaire de flotte </h4>
          <br />
          <p className="service-detail">✓ Préparation mécanique</p>
          <p className="service-detail">✓ Lavage Atelier / HALL</p>
          <p className="service-detail">✓ CONVOYAGE / JOCKEYAGE</p>
          <a href="/gestionnaire-de-flotte" className="v5">
            En savoir plus ➔
          </a>
        </figcaption>
      </figure>
      <figure className="image-block" >
        <img src="https://res.cloudinary.com/dlnrtlftr/image/upload/v1675773590/o5ynaobz7ztrpm1fbwbx.jpg" alt="fcs professionel" className="img-service" loading="lazy"/>
        <figcaption>
          <h4>Professionnel </h4>
          <br />
          <p className="service-detail">✓ Reconditionnement VO </p>
          <p className="service-detail">✓ Stockage de proximité</p>
          <p className="service-detail">✓ NETTOYAGE DES FLOTTES</p>
          <a href="/professionnel" className="v5">
            En savoir plus ➔{" "}
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default ServiceCard;
