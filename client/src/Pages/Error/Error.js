import React from "react";
import "./Error.css";
import error from "./error.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="Error-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oups...</title>
        <link rel="canonical" />
        <meta name="description" content="Error 404" />
      </Helmet>
      <img src={error} alt='error' className="error-img"/>
      <h2 className="err1">Whooops!</h2>
      <h3 className="error">
        La page que vous avez demandée n'a pas été trouvée.<br/>
        Vérifiez que l'URL du site est correcte.
      </h3>
      <div className="err-btn">
        <button className="error-button" onClick={() => navigate("/")}>
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default Error;
