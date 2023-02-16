import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactHome.css";
const ContactHome = () => {
  return (
    <div>
      <hr className="hr1" />
      <div className="contact-container2">
        <div className="contact-container">
          <p className="contact-text">
            Convoyage de vos véhicules, lavage et désinfection Bio écologique
            par la vapeur de l'extérieur et de l'habitacle, prestations sur site
            ou sur l'un de nos nombreux centres partout en France. Confiez-nous
            vos véhicules, FCS s'occupe de tout !
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
