import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch,useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { addFavActus, deleteActus, removeFavActus } from "../../JS/Actions/actus";
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button, TextField } from "@mui/material";
import EllipsisText from "react-ellipsis-text";
import Link from '@mui/material/Link';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { styled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast, cssTransition } from 'react-toastify';

export default function RecipeReviewCard({ actus }) {

  const navigate = useNavigate()

  const ExpandMore = styled((props) => {
    const {...other } = props;
    return <IconButton {...other} />;
  })({
    marginLeft: 'auto'
  });

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);   
  const dispatch = useDispatch();
  const [bcolor, setBcolor] = useState(false)
  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteActus(actus._id));
  };
  const handleFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(addFavActus(actus._id));
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const bounce = cssTransition({
    enter: "animate__animated animate__fadeIn",
    exit: "animate__animated animate__fadeOutUp",
    duration: [700, 1200]
  });
  

  const showToastMessage = () => {
    toast.success('Lien copié avec succès',{transition: bounce , toastId: 'success1'
  });
};

  const handleDeleteFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(removeFavActus(actus._id));
    handleClose()
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`www.groupefcs.com/blog/${actus._id}`);
    handleClose1()
    showToastMessage()
  }


  return (
    <div>

    <Card sx={{ maxWidth: 400,mb: "6%" , height : "max-content" , boxShadow :"-2px 5px 10px rgb(0 0 0 / 15%)" , borderRadius : 0}}  >

    <CardMedia
    component="img"
    height="250"
    image={actus.image}
    alt="fcs-blog-image"
    loading="lazy"
  /> 
      <CardContent  >
      <Typography variant="body1"  sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',fontFamily : "Abel"}} >
        <CalendarMonthIcon/>
      {converTime(actus.createdAt)}
      </Typography>
      </CardContent>
      <CardHeader title={actus.name} sx={{ color: "#056CF2",fontFamily : "Abel" }} />

      <CardContent>
      <Link href={`/blog/${actus._id}`} sx={{textDecoration :"none" , color:"black" , "&:hover" : {color : "#056CF2"}}} >
          <Typography variant="body1"  sx={{fontFamily : "Abel"}} >       
            <EllipsisText text={actus.description} length={"200"} />       
          </Typography>
        </Link>
      </CardContent>
      <hr className="hr1" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color :bcolor ? "red" : "gray" }} onClick={bcolor ? handleDeleteFav : handleFav } >
        <Badge  color="error" badgeContent={actus.likes} max={50}>
          <FavoriteIcon  />
        </Badge>
        </IconButton>
        <IconButton aria-label="share" sx={{color : "gray"}} onClick={handleOpen1} >
          <ShareIcon/>
        </IconButton>

        <Modal
         open={open1}
         onClose={handleClose1}
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
           value={`www.groupefcs.com/blog/${actus._id}`}
           type="text"
         />
           <CardActions>
           <Button  sx={{borderRadius : 0 , fontFamily : "Abel"}} onClick={handleClose1}  variant="outlined" color="error"> ← Annuler</Button>
           <Button onClick={handleCopy}   sx={{fontFamily : "Abel" , border : "2px solid rgb(0, 0, 0)" ,background : "black" , color : "white" ,padding: "1%"  , borderRadius : 0,"&:hover":{color : "black" ,background : "white"} }}><AttachFileIcon/>Copier le lien</Button>
           </CardActions>
           </Box>
       </Modal>

       <ExpandMore
       onClick={()=>navigate(`/blog/${actus._id}`)}
     >
     <Typography variant="body1"  sx={{fontFamily : "Abel"}}>    
     En savoir plus ➔
     </Typography>   
     </ExpandMore>


        {isAuthAdmin &&
          <div>
         <IconButton aria-label="delete" size="large" onClick={handleOpen}><DeleteIcon sx={{color : "red" , "&:hover":{color: '#8B0909'}  }} /></IconButton>
         <Modal
         open={open}
         onClose={handleClose}
         data-aos="fade-up"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           Voulez-vous vraiment supprimer cette actualité
           </Typography>
           <CardActions>
           <Button onClick={handleDelete} sx={{borderRadius : 0}} variant="outlined" color="error"> <DeleteForeverOutlinedIcon/>Supprimer</Button>
           <Button  onClick={handleClose} variant="contained" sx={{borderRadius : 0}}>← Annuler</Button>
           </CardActions>
           </Box>
       </Modal>
       </div>
   }

      </CardActions>
    </Card>
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

  );
}
