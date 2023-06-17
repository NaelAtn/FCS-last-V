import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearErrorsMail } from "../../JS/Actions/mail";
import { clearErrorsNewsLetter } from "../../JS/Actions/newsletter";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { clearErrorsReservation } from "../../JS/Actions/reservation";
import { clearErrorsAdmin } from "../../JS/Actions/admin";
import { clearErrorsOffredemploi } from "../../JS/Actions/offredemploi";
import { clearErrorsActus } from "../../JS/Actions/actus";
import { clearErrorsCandidature } from "../../JS/Actions/candidature";

const bounce = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOutUp",
  duration: [700, 1200]
});


const Errornotification = ({ error }) => {
  
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrorsMail());
      dispatch(clearErrorsNewsLetter());
      dispatch(clearErrorsReservation());
      dispatch(clearErrorsAdmin());
      dispatch(clearErrorsOffredemploi());
      dispatch(clearErrorsActus());
      dispatch(clearErrorsCandidature());
    }, 3000);
  }, [show, dispatch]);

  const customId = "";

  return (
    <div>
      {show && (
        <div>
          {toast.error(error.msg, { toastId: customId , transition: bounce })}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            className="toast-text"
            theme="dark"
            limit={1}        
          />
        </div>
      )}
    </div>
  );
};

export default Errornotification;
