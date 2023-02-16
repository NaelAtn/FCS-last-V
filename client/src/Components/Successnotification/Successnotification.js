import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearSuccessMail } from "../../JS/Actions/mail";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { clearSuccessNewsLetter } from "../../JS/Actions/newsletter";
import "./Successnotification.css";
import { clearSuccessReservation } from "../../JS/Actions/reservation";
import { clearSuccessAdmin} from "../../JS/Actions/admin";
import { clearSuccessOffredemploi } from "../../JS/Actions/offredemploi";
import { clearSuccessActus } from "../../JS/Actions/actus";
import { clearSuccessCandidature } from "../../JS/Actions/candidature";

const bounce = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOutUp",
  duration: [700, 1200]
});

const Successnotification = ({ success }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearSuccessMail());
      dispatch(clearSuccessNewsLetter());
      dispatch(clearSuccessReservation());
      dispatch(clearSuccessAdmin());
      dispatch(clearSuccessOffredemploi());
      dispatch(clearSuccessActus());
      dispatch(clearSuccessCandidature());
    }, 3000);
  }, [show, dispatch]);

  const customId = "";

  return (
    <div>
      {show && (
        <div>
          {toast.success(success.msg, { toastId: customId , transition: bounce})}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
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

export default Successnotification;
