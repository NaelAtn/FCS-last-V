import React from 'react'
import img from "./null.png"

const Indispo = () => {
  return (
    <div>
    <p className="contact-text-form" >Indisponible pour le moment veuillez réessayer ultérieurement</p>
    <img src={img} alt="indisponible" width="25%" style={{alignItems : "center" , display : "flex" , margin : "auto" }}/>
    </div>
  )
}

export default Indispo
