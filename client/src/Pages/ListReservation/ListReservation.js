import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, getReservation, updateisDoneReservation, updatenotisDoneReservation } from '../../JS/Actions/reservation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CircularProgress from '@mui/material/CircularProgress';
import { Helmet } from "react-helmet";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const ListReservation = () => {

      const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 50,
        p: 4,};
    
      const converTime = (time) => {
        return new Date(time).toLocaleDateString("fr-fr", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });};

    const dispatch = useDispatch();

    const listReservations = useSelector((state) => state.reservationReducer.listReservations);  
    const load = useSelector((state) => state.reservationReducer.load); 

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const handleDelete = (e,row) => {
        e.preventDefault();
        dispatch(deleteReservation(row._id));
        handleClose()
      };

      const handleIsDone = (e,row) => {
        e.preventDefault();
        dispatch(updateisDoneReservation(row._id));
      };

      const handleNotIsDone = (e,row) => {
        e.preventDefault();
        dispatch(updatenotisDoneReservation(row._id));
      };
    
      useEffect(() => {
        dispatch(getReservation());
      }, [dispatch]);


  return (
    <div className="Offredemploi-top">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Liste Des Reservations </title>
        <link rel="canonical" />
        <meta name="description" content="Liste Des Reservations" />
    </Helmet>
    <div className="offreemploibackground">
        <div className="background-text-offre">
          <h1 className="Offredemploi-text">Liste Des Reservations</h1>
        </div>
      </div>

        {load  ? 
      <CircularProgress sx={{color : "black" ,display : "flex" , alignItems : "center" , justifyContent : "center" , m : "auto" , mt :"3%"  }} size="4rem" />
      :
      <Grid container xs={12} sm={8} md={8} lg={11.5} sx={{display : "flex" , m : "auto" , alignItems : "center" , mt : "3%" }} >
      <TableContainer component={Paper} sx={{boxShadow :"-2px 5px 10px rgb(0 0 0 / 15%)" , borderRadius : 0}} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Nom et prénom</TableCell>     
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Téléphone</TableCell> 
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Date d'ajout</TableCell>
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Date Rendez-vous</TableCell> 
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Heure Rendez-vous</TableCell>
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Adresse</TableCell> 
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >Terminé</TableCell>
            <TableCell sx={{backgroundColor : "black" ,  color :"white"}}>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listReservations?.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>   
              <TableCell component="th" scope="row" >
                {row.phone }
              </TableCell>   
              <TableCell component="th" scope="row" >
              {converTime(row.createdAt)}
            </TableCell> 
              <TableCell component="th" scope="row" >
              {converTime(row.time)}
              </TableCell>   
              <TableCell component="th" scope="row" >
              {row.hour}
              </TableCell>   
              <TableCell component="th" scope="row" >
                {row.place}
              </TableCell>     
              <TableCell component="th" scope="row" >
              {row.isDone ?
                <CheckCircleIcon sx={{color : "green" , cursor : "pointer"}} onClick={(e)=>handleNotIsDone(e,row)} /> :
                <CancelIcon sx={{color : "red" , cursor : "pointer"}} onClick={(e)=>handleIsDone(e,row)} />
            }       
              </TableCell>
              <TableCell component="th" scope="row" >
                <DeleteForeverIcon sx={{color : "gray" , cursor : "pointer", ml :"10%","&:hover":{color: '#8B0909'}  }} onClick={handleOpen}  /> 
                <Modal
                open={open}
                onClose={handleClose}
                data-aos="fade-up"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  Voulez-vous vraiment supprimer cette réservation
                  </Typography>
                  <CardActions>
                  <Button onClick={(e)=>handleDelete(e,row)} sx={{borderRadius : 0}} variant="outlined" color="error"> <DeleteForeverOutlinedIcon/>Supprimer</Button>
                  <Button  onClick={handleClose} variant="contained" sx={{borderRadius : 0}}>← Annuler</Button>
                  </CardActions>
                  </Box>
              </Modal>
                </TableCell>      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>}
    </div>
  )
}

export default ListReservation