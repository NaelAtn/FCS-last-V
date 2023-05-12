import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsletter, getNewsLetters } from '../../JS/Actions/newsletter';
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
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const ListNewsLetter = () => {
    const dispatch = useDispatch();

    const listNewsLetters = useSelector((state) => state.newsLetterReducer.listNewsLetters);  
    const load = useSelector((state) => state.newsLetterReducer.load); 

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
    
      useEffect(() => {
        dispatch(getNewsLetters());
      }, [dispatch]);

      const handleDelete = (e,row) => {
        e.preventDefault();
        dispatch(deleteNewsletter(row._id));
        handleClose()
      };
      
  return (
    <div className="Offredemploi-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Liste Des Newsletters </title>
        <link rel="canonical" />
        <meta name="description" content="Liste Des Newsletters" />
      </Helmet>
      <div className="offreemploibackground">
        <div className="background-text-offre">
          <h1 className="Offredemploi-text">Liste Des Newsletters</h1>
        </div>
      </div>
      {load  ? 
      <CircularProgress sx={{color : "black" ,display : "flex" , alignItems : "center" , justifyContent : "center" , m : "auto" , mt :"3%"  }} size="4rem" />
      :
      <Grid container xs={12} sm={8} md={8} lg={8} sx={{display : "flex" , m : "auto" , alignItems : "center" , mt : "3%" }} >
      <TableContainer component={Paper} sx={{boxShadow :"-2px 5px 10px rgb(0 0 0 / 15%)" , borderRadius : 0}} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor : "black" , color :"white" }} >E-mails(Utilisateurs)</TableCell>     
            <TableCell sx={{backgroundColor : "black" ,  color :"white"}}>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listNewsLetters?.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.email}
              </TableCell>   
              <TableCell component="th" scope="row" >
                <DeleteForeverIcon sx={{color : "red" , cursor : "pointer", ml :"10%","&:hover":{color: '#8B0909'}  }} onClick={handleOpen} /> 
                <Modal
                open={open}
                onClose={handleClose}
                data-aos="fade-up"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  Voulez-vous vraiment supprimer cet adresse e-mail
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
    </Grid>
      }

        
    </div>
  )
}

export default ListNewsLetter