import React from 'react'
import './Gestionnairedeflootecards.css'
import img1 from './1.PNG'
import img2 from './2.PNG'
import img3 from './3.PNG'
import img4 from './4.PNG'
import img5 from './5.PNG'
import img6 from './6.PNG'


const Gestionnairedeflootecards = () => {

  return (
    <div>

    <div className='g-d-f-card-conatiner'  >
        <div className='g-d-f-card'data-aos="flip-up" >
            <img src={img1} alt="Préparation Esthétique (VN/VO)" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Préparation Esthétique (VN/VO) :</p>
                <p className='g-d-f-text-card1'>FCS offre un service complet de préparation esthétique (intérieur et extérieur) et s'adapte aux besoins NV, UV et VD de chaque client en concession ou en atelier.</p>
            </div>
        </div>

        <div className='g-d-f-card'data-aos="flip-down" >
            <img src={img2} alt="Préparation Mécanique" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Préparation Mécanique :</p>
                <p className='g-d-f-text-card1'>FCS vérifie électroniquement les VN et effectue les actions finales de démarrage (tests, vérification de niveau, vérifications, etc.)</p>
            </div>
        </div>

        <div className='g-d-f-card' data-aos="flip-up" >
            <img src={img3} alt="Lavage Atelier / Hall" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Lavage Atelier / Hall :</p>
                <p className='g-d-f-text-card1'>FCS aide les concessionnaires à améliorer la satisfaction des clients en nettoyant les véhicules du marché secondaire.</p>
            </div>
        </div>

        <div className='g-d-f-card' data-aos="flip-down">
            <img src={img4} alt="Convoyage / Jockeyage" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Convoyage / Jockeyage :</p>
                <p className='g-d-f-text-card1'>Dans le cadre du service, FCS peut livrer le véhicule sur le site du client par route ou par transporteur.</p>
            </div>
        </div>

        <div className='g-d-f-card'data-aos="flip-up" >
            <img src={img5} alt="Reconditionnement VO" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Reconditionnement VO :</p>
                <p className='g-d-f-text-card1'>FCS répare les voitures d'occasion chez les concessionnaires pour optimiser la reprise.</p>
            </div>
        </div>

        <div className='g-d-f-card'  data-aos="flip-down">
            <img src={img6} alt="Stockage de proximité" className='g-d-f-card-img' />
            <div>
                <p className='g-d-f-text-card' >Stockage de proximité :</p>
                <p className='g-d-f-text-card1' >FCS économise de l'espace pour les concessions en fournissant des solutions de stockage et en permettant aux concessions de consigner les véhicules</p>
            </div>
        </div>

    </div>
    </div> 
  )
}

export default Gestionnairedeflootecards