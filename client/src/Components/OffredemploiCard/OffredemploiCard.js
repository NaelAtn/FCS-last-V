import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useDispatch, useSelector } from "react-redux";
import { deleteOffredemploi } from "../../JS/Actions/offredemploi";
import { useNavigate } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function OffredemploiCard({ offredemploi }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 50,
    p: 4,
  };

  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOffredemploi(offredemploi._id));
  };

  return (
    <Card
      sx={{
        maxWidth: 550,
        mb: "6%",
        height: "fit-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        width : 550
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap",fontFamily : "Abel", fontWeight : "bold" , mb : "3%" }}
        >
          <WorkOutlineIcon /> {offredemploi.name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap",fontFamily : "Abel" }}
        >
          <CalendarMonthIcon />
          &nbsp;Ajouté le :{converTime(offredemploi.createdAt)}
        </Typography>
        <br />
        <Typography
          gutterBottom
          component="div"
          sx={{ display: "flex", verticalAlign : "middle",fontFamily : "Abel"  }}
        >
          <LocationOnOutlinedIcon />
          {offredemploi.local}
        </Typography>
        <CardActions>
          {isAuthAdmin ? (
            <div>
            <Button onClick={handleOpen} sx={{borderRadius : 0}} variant="outlined" color="error"> <DeleteForeverOutlinedIcon/>Supprimer</Button>
              <Modal open={open} onClose={handleClose} data-aos="fade-up">
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Voulez-vous vraiment supprimer cet offre d'emploi
                  </Typography>
                  <CardActions>
                  <Button onClick={handleDelete} sx={{borderRadius : 0}} variant="outlined" color="error"> <DeleteForeverOutlinedIcon/>Supprimer</Button>
                  <Button  onClick={handleClose} variant="contained" sx={{borderRadius : 0}}>← Annuler</Button>
                  </CardActions>
                </Box>
              </Modal>
            </div>
          ) : (
            <Button onClick={() => navigate(`/candidature/${offredemploi._id}`)} sx={{background : "black" ,fontFamily : "Abel", color : "white" ,fontSize : "0.8rem",padding: "1.5%" , borderRadius : 0,"&:hover":{background : "#4d4d4d"} }}>Postuler ➔</Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
