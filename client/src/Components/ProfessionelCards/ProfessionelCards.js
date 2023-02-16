import React from "react";
import img1 from "./1.PNG";
import img2 from "./2.PNG";
import img4 from "./4.PNG";
import img5 from "./5.PNG";
import img6 from "./6.PNG";

const ProfessionelCards = () => {
  return (
    <div className="g-d-f-card-conatiner">
      <div className="g-d-f-card" data-aos="flip-up">
        <img
          src={img1}
          alt="NETTOYAGE DES FLOTTES"
          className="g-d-f-card-img"
          loading="lazy"
        />
        <div>
          <p className="g-d-f-text-card">NETTOYAGE DES PARCS AUTOMOBILES :</p>
          <p className="g-d-f-text-card1">
            FCS développe des services de nettoyage et de maintenance pour votre
            flotte d'entreprise.
          </p>
        </div>
      </div>

      <div className="g-d-f-card" data-aos="flip-down">
        <img
          src={img2}
          alt="ENTRETIEN PONCTUEL OU RÉGULIER"
          className="g-d-f-card-img"
          loading="lazy"
        />
        <div>
          <p className="g-d-f-text-card">ENTRETIEN PONCTUEL OU RÉGULIER :</p>
          <p className="g-d-f-text-card1">
            FCS offre aux gestionnaires de flotte la possibilité d'optimiser les
            retours de véhicules grâce à un entretien ponctuel proche de la
            remise à neuf des véhicules d'occasion ou à une planification
            régulière par le personnel de préparation de FCS sur les sites des
            clients.
          </p>
        </div>
      </div>

      <div className="g-d-f-card" data-aos="flip-down">
        <img
          src={img4}
          alt="ENTRETIEN PONCTUEL OU RÉGULIER"
          className="g-d-f-card-img"
          loading="lazy"
        />
        <div>
          <p className="g-d-f-text-card">SERVICES SUR-MESURE :</p>
          <p className="g-d-f-text-card1">
          FCS associe au lavage des prestations annexes telles que le contrôle des niveaux, le relevé kilométrique.
          </p>
        </div>
      </div>

      <div className="g-d-f-card" data-aos="flip-up">
        <img
          src={img5}
          alt="Reconditionnement VO"
          className="g-d-f-card-img"
          loading="lazy"
        />
        <div>
          <p className="g-d-f-text-card">Reconditionnement VO :</p>
          <p className="g-d-f-text-card1">
            FCS répare les voitures d'occasion chez les concessionnaires pour
            optimiser la reprise.
          </p>
        </div>
      </div>

      <div className="g-d-f-card" data-aos="flip-down">
        <img
          src={img6}
          alt="Stockage de proximité"
          className="g-d-f-card-img"
          loading="lazy"
        />
        <div>
          <p className="g-d-f-text-card">Stockage de proximité :</p>
          <p className="g-d-f-text-card1">
            FCS économise de l'espace pour les concessions en fournissant des
            solutions de stockage et en permettant aux concessions de consigner
            les véhicules
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionelCards;
