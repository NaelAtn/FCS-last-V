import { Route, Routes} from "react-router-dom";
import "./App.css";
import "./Pages/Offredemploi/Offredemploi.css";
import "./Pages/Professionel/Professionel.css";
import "./Pages/Postulation/Postulation.css"
import "./Pages/Particulier/Particulier.css";
import "./Pages/LoginAdmin/LoginAdmin.css";
import "./Pages/Home/Home.css";
import "./Pages/Gestionnairedeflotte/Gestionnairedeflotte.css";
import "./Pages/Error/Error.css";
import "./Pages/ContactUs/ContactUs.css";
import "./Pages/Candidature/Candidature.css";
import "./Pages/Apropos/Apropos.css";
import "./Pages/AddOffreEmploi/AddOffreEmploi.css";
import "./Pages/Actualités/Actualités.css";
import "./Components/ActusHome/ActusHome.css";
import "./Components/ContactFooter/ContactFooter.css";
import "./Components/ContactHome/ContactHome.css";
import "./Components/Footer/Footer.css";
import "./Components/Gestionnairedeflootecards/Gestionnairedeflootecards.css";
import "./Components/GestionnairedeflotteHome/GestionnairedeflotteHome.css";
import "./Components/HomeVideo/HomeVideo.css";
import "./Components/NavBar/Navs.css";
import "./Components/NewsLetter/NewsLetter.css";
import "./Components/Prices/Prices.css";
import "./Components/ReservationForm/ReservationForm.css";
import "./Components/ScrollTop/ScrollTop.css";
import "./Components/ServiceCard/ServiceCard.css";
import "./Components/Sponsor/Sponsor.css";
import "./Components/Stats/Stats.css";
import "./Components/Successnotification/Successnotification.css";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import Successnotification from "./Components/Successnotification/Successnotification";
import Errornotification from "./Components/Errornotification/Errornotification";
import { Helmet } from "react-helmet";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import "aos/dist/aos.css";
import Sponsor from "./Components/Sponsor/Sponsor";
import { lazy, Suspense, useEffect, useRef } from "react";
import { currentAdmin } from "./JS/Actions/admin";
import{useLocation} from"react-router-dom";
import { Crisp } from "crisp-sdk-web";
import { CircularProgress } from "@mui/material";
const NavBar = lazy(()=>import("./Components/NavBar/NavBar"))
const Error = lazy(()=>import("./Pages/Error/Error"))
const Home = lazy(()=>import("./Pages/Home/Home"))
const Professionel = lazy(()=>import("./Pages/Professionel/Professionel"))
const Offredemploi = lazy(()=>import("./Pages/Offredemploi/Offredemploi"))
const Gestionnairedeflotte = lazy(()=>import("./Pages/Gestionnairedeflotte/Gestionnairedeflotte"))
const ContactUs = lazy(()=>import("./Pages/ContactUs/ContactUs"))
const Actualités = lazy(()=>import("./Pages/Actualités/Actualités"))
const Particulier = lazy(()=>import("./Pages/Particulier/Particulier"))
const Apropos = lazy(()=>import("./Pages/Apropos/Apropos"))
const Reservation = lazy(()=>import("./Pages/Reservation/Reservation"))
const LoginAdmin = lazy(()=>import("./Pages/LoginAdmin/LoginAdmin"))
const Parametre = lazy(()=>import("./Pages/Paramétre/Parametre"))
const OneActus = lazy(()=>import("./Pages/OneActus/OneActus"))
const AddActus = lazy(()=>import("./Pages/AddActus/AddActus"))
const Candidature = lazy(()=>import("./Pages/Candidature/Candidature"))
const ListNewsLetter = lazy(()=>import("./Pages/ListNewsLetter/ListNewsLetter"))
const ListReservation = lazy(()=>import("./Pages/ListReservation/ListReservation"))
const AddOffreEmploi = lazy(()=>import("./Pages/AddOffreEmploi/AddOffreEmploi"))
const Postulation = lazy(()=>import("./Pages/Postulation/Postulation"))

function App() {

  const dispatch = useDispatch()
  
    const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);   
    const mailsuccess = useSelector((state) => state.mailReducer.success);
    const errorMail = useSelector((state)=> state.mailReducer.errors); 
    const errorReservation = useSelector((state)=> state.reservationReducer.errors); 
    const reservationSuccess = useSelector((state) => state.reservationReducer.success);
    const errorNewsLetter = useSelector((state)=> state.newsLetterReducer.errors); 
    const NewsLetterSuccess = useSelector((state) => state.newsLetterReducer.success);
    const successAdmin = useSelector((state) => state.adminReducer.success);
    const errorsAdmin = useSelector((state) => state.adminReducer.errors);
    const successOffer = useSelector((state) => state.offredemploiReducer.success);
    const errorsOffer = useSelector((state) => state.offredemploiReducer.errors);
    const successActus = useSelector((state) => state.actusReducer.success);
    const errorsActus = useSelector((state) => state.actusReducer.errors);
    const successCandidature = useSelector((state) => state.candidatureReducer.success);
    const errorsCandidature= useSelector((state) => state.candidatureReducer.errors);
    
    const{pathname}=useLocation()
  
    const myRef1 = useRef(null);
    const scroldown1 = () => {
      myRef1.current.scrollIntoView({ behavior: "smooth",block: 'center',inline: 'center' });
    };
  
    useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(currentAdmin());
      }
    }, [dispatch]);
  
    useEffect(
      ()=>{
        window.scrollTo(0,0);
      },
      [pathname]
    );
    
  useEffect(()=>{
    Crisp.configure("7417f157-d1b7-4b70-aa36-2290c9a628b3")
  })
  
  // useEffect(() => {
  //     const handleContextmenu = e => {
  //         e.preventDefault()
  //     }
  //     document.addEventListener('contextmenu', handleContextmenu)
  //     return function cleanup() {
  //         document.removeEventListener('contextmenu', handleContextmenu)
  //     }
  // }, [ ])
   
  
    return (
      <div>
        {successAdmin && successAdmin.map((el) => <Successnotification success={el}/>)}
        {errorsAdmin && errorsAdmin.map((el) => <Errornotification error={el} /> )}
        {mailsuccess && mailsuccess.map((el) => <Successnotification success={el}/>)}
        {errorMail && errorMail.map((el) => <Errornotification error={el} /> )}
        {reservationSuccess && reservationSuccess.map((el) => <Successnotification success={el} />)}
        {errorReservation && errorReservation.map((el) => <Errornotification error={el}/>)}
        {NewsLetterSuccess && NewsLetterSuccess.map((el) => <Successnotification success={el} />)}
        {errorNewsLetter && errorNewsLetter.map((el) => <Errornotification error={el}  />)}
        {successOffer && successOffer.map((el) => <Successnotification success={el}/>)}
        {errorsOffer && errorsOffer.map((el) => <Errornotification error={el} /> )}
        {successActus && successActus.map((el) => <Successnotification success={el}/>)}
        {errorsActus && errorsActus.map((el) => <Errornotification error={el} /> )}
        {successCandidature && successCandidature.map((el) => <Successnotification success={el}/>)}
        {errorsCandidature && errorsCandidature.map((el) => <Errornotification error={el} /> )}
        
        <Helmet>
          <meta charSet="utf-8" />
          <title>Groupe FCS, Lavage Auto ,Specialiste dans le lavage bio ecologique et gestion de flotte</title>
          <link rel="canonical"/>
          <meta
            name="description"
            content="FCS Lavage Auto Specialiste dans le lavage bio ecologique et gestion de flotte depuis 2012 , Convoyage de vos véhicules, lavage et désinfection Bio écologique par la vapeur de l'extérieur et de l'habitacle, prestations sur site ou sur l'un de nos nombreux centres partout en France. Confiez-nous vos véhicules, FCS s'occupe de tout !"
          />
        </Helmet> 
        <div className="scrollbtn">
          <ScrollTop />
        </div>
  
        <header className="nav-fixed">
          <NavBar scroldown1={scroldown1} />
        </header>
            <Suspense fallback={<CircularProgress sx={{color : "black" ,display : "flex" , alignItems : "center" , justifyContent : "center" , m : "auto" , mt :"18.5%"  }} size="3.5rem" />} >   
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/*" element={<Error/>} />
                <Route  path="/professionnel" element={<Professionel/>}/> 
                <Route path="/offre-d-emploi" element={<Offredemploi/>} />
                <Route path="/gestionnaire-de-flotte" element={<Gestionnairedeflotte/>} />
                <Route path="/contactez-nous" element={<ContactUs/>} />
                <Route path="/a-propos" element={<Apropos/>} />
                <Route path="/blogs" element={<Actualités/>} />
                <Route path="/particulier" element={<Particulier/>} />
                <Route path="/reservation" element={<Reservation/>} />  
                <Route path="/candidature/:id" element={<Postulation/>} />      
                <Route path="/blog/:id" element={<OneActus/>} />  
                {!isAuthAdmin && <Route path="/loginadmin" element={ <LoginAdmin/>} />}  
                {isAuthAdmin && <Route path="/parametre/:id" element={<Parametre/>}/>}
                {isAuthAdmin && <Route path="/ajouter-offre-d-emploi" element={ <AddOffreEmploi/>} />}  
                {isAuthAdmin && <Route path="/ajouter-blog" element={ <AddActus/>} />} 
                {isAuthAdmin && <Route path="/listnewsletter" element={<ListNewsLetter/>} />}  
                {isAuthAdmin && <Route path="/listreservation" element={<ListReservation/>} />}     
                {isAuthAdmin && <Route path="/candidatures" element={<Candidature/>} />} 
              </Routes>
          </Suspense>
        <Sponsor myRef1={myRef1}/>
        <NewsLetter/>
        <Footer/>
      </div>
      
    );
  }
  
  export default App;
  