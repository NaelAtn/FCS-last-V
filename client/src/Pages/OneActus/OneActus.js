import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { addFavActus, getOneActus, removeFavActus } from '../../JS/Actions/actus'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import logo from "./logo.png"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Badge, Box, Button, CardActions, IconButton, Modal, Skeleton, TextField, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from '@mui/icons-material/Facebook';
import {FacebookShareButton , LinkedinShareButton , TwitterShareButton} from "react-share"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { cssTransition, toast, ToastContainer } from 'react-toastify'

const OneActus = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch("/blog/:id")
  const actusToGet = useSelector(state => state.actusReducer.actusToGet)
  const load = useSelector(state => state.actusReducer.load)

  const [bcolor, setBcolor] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 50,
    p: 4,
  };


  const handleFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(addFavActus(actusToGet._id));
  };

  const handleDeleteFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(removeFavActus(actusToGet._id));
  };

  useEffect(() => {
    dispatch(getOneActus(match.params.id))
  },[dispatch,match.params.id])

  const bounce = cssTransition({
    enter: "animate__animated animate__fadeIn",
    exit: "animate__animated animate__fadeOutUp",
    duration: [700, 1200]
  });
  

  const showToastMessage = () => {
    toast.success('Lien copié avec succès',{transition: bounce , toastId: 'success1'
  });
};

const handleCopy = () => {
  navigator.clipboard.writeText(`www.groupefcs.com/blog/${actusToGet._id}`);
  handleClose()
  showToastMessage()
}

  return (
    <div className='Offredemploi-top'>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Groupe FCS | {`${actusToGet.name}`}</title>
    <link rel="canonical" />
    <meta name="description" content={`${actusToGet.description}`} />
  </Helmet>
    <div className='offreemploibackground'>
    <div className='background-text-offre'>
    <NewspaperIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
    <p className='text-center' >{actusToGet.name}</p>
    </div>
    </div>

    <div className='ContactUs-container'>  
    <div className='info-box-contact'>

    <Typography sx ={{display: "flex", verticalAlign : "middle"}}>
        <img src={logo} alt="logo-fcs" /> &nbsp;&nbsp;&nbsp;&nbsp;
        {load ? <Skeleton animation="wave" height={30} width="70%" /> :
        <Typography variant="h6"  sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',fontFamily : "Abel"}} >
        <CalendarMonthIcon/>&nbsp;
        Ajouté le : {converTime(actusToGet.createdAt)}
        </Typography>
      }
    </Typography>
    {load ? <Skeleton animation="wave" height={35} width="90%"  /> : 
    <Typography sx={{fontFamily : "Abel" , mt :"5%" , color : "#056CF2" ,mb : "5%" }} variant="h5">
      {actusToGet.name}
    </Typography>}
    <hr/>
    {load ? <div>
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35}  />
    <Skeleton animation="wave" height={35}  />
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35}/>
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35} />
    <Skeleton animation="wave" height={35}/></div> :
    <div>
      <Typography sx={{fontFamily : "Abel" , mt :"5%" , color : "black" ,mb : "5%" }} variant="h6">
        {actusToGet.description}
      </Typography>
      <Typography sx={{fontFamily : "Abel" , mt :"5%" , color : "black" ,mb : "5%" }} variant="h6">
      Pour retrouver toutes les informations et services de <span style={{color : "#056CF2"}}>FCS</span>, rendez-vous sur <span style={{color : "#056CF2"}}> www.groupefcs.com</span> , contactez nous sur <span style={{color : "#056CF2"}}> contact@groupefcs.com</span>.
    </Typography></div>
  }
    <hr />
    <CardActions disableSpacing>
    <IconButton aria-label="add to favorites" sx={{color :bcolor ? "red" : "gray" }} onClick={bcolor ? handleDeleteFav : handleFav } >
    <Badge  color="error" badgeContent={actusToGet.likes} max={50}>
      <FavoriteIcon  />
    </Badge>
    </IconButton>
      <IconButton aria-label="share" sx={{color : "gray" , "&:hover":{color : "#4267B2"}}}>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon/>
      </FacebookShareButton>
     </IconButton>

     <IconButton aria-label="share" sx={{color : "gray" , "&:hover":{color : "#0077b5"}}}>
     <LinkedinShareButton url={window.location.href}>
       <LinkedInIcon/>
     </LinkedinShareButton>
    </IconButton>

    <IconButton aria-label="share" sx={{color : "gray", "&:hover":{color : "#1DA1F2"}}}>
    <TwitterShareButton url={window.location.href}>
      <TwitterIcon/>
    </TwitterShareButton>
   </IconButton>

    <IconButton aria-label="share" sx={{color : "gray"}} onClick={handleOpen}>
      <ShareIcon/>
    </IconButton>

    <Modal
         open={open}
         onClose={handleClose}
         data-aos="fade-up"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="p" sx ={{display: "flex", verticalAlign : "middle"}}>
           Partager le lien <AttachFileIcon/>
           </Typography>
           <TextField
           fullWidth
           sx={{ mb: "5%" , mt :"5%" }}
           id="standard-basic"
           variant="standard"
           value={`www.groupefcs.com/blog/${actusToGet._id}`}
           type="text"
         />
           <CardActions>
           <Button  sx={{borderRadius : 0 , fontFamily : "Abel"}} onClick={handleClose}  variant="outlined" color="error"> ← Annuler</Button>
           <Button onClick={handleCopy}  sx={{fontFamily : "Abel" , border : "2px solid rgb(0, 0, 0)" ,background : "black" , color : "white" ,padding: "1%"  , borderRadius : 0,"&:hover":{color : "black" ,background : "white"} }}><AttachFileIcon/>Copier le lien</Button>
           </CardActions>
           </Box>
       </Modal>

    </CardActions>
    </div>
    </div>
    <br/><br/><br/>
    <Button onClick={()=>navigate("/blogs")} sx={{mt : "5%",fontFamily : "Abel" , border : "2px solid rgb(0, 0, 0)" ,background : "black" , color : "white" ,padding: "1%"  , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center","&:hover":{color : "black" ,background : "white"} }}>Voir toutes les actus FCS ➔</Button>
    
    <ToastContainer  
    position="top-right"
    autoClose={500}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    pauseOnHover
    draggable
    className="toast-text"
    theme="dark"
    limit={1} />
    </div>
  )
}

export default OneActus
