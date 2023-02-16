import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { deleteCandidature } from '../../JS/Actions/candidature';
import { Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CandidatureCard({candidature}) {

  const dispatch = useDispatch();

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

  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCandidature(candidature._id));
    handleClose()
  };

  return (
    <Card sx={{ maxWidth: 500 , width : 450 , boxShadow :"-2px 5px 10px rgb(0 0 0 / 15%)", borderRadius : 0 , mb : "5%"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[900] }} aria-label="recipe">
            <AccountCircleIcon/>
          </Avatar>
        }
        title={candidature.name}
        subheader={`Ajouté le : ${converTime(candidature.createdAt)}`}
      />
      <p style={{textAlign : "center" , marginTop : "2%" , fontWeight : "bold"}} >Coordonnées du candidat :</p>
      <hr className="hr1" />
       <CardContent>

       <Typography sx={{textDecoration : "underline" , fontWeight : "bold"}} >Poste désiré:</Typography>
       <Typography variant="body2" >
           {candidature.poste}
       </Typography>
       <br/>
       <Typography  sx={{textDecoration : "underline" , fontWeight : "bold"}} >Adresse:</Typography>
        <Typography variant="body2" >
            {candidature.adresse}
        </Typography>
        <br/>
        <Typography  sx={{textDecoration : "underline" , fontWeight : "bold"}} >Mail:</Typography>
        <Typography variant="body2" >
            {candidature.email}
        </Typography>
        <br/>
        <Typography  sx={{textDecoration : "underline" , fontWeight : "bold"}} >Numéro de téléphone:</Typography>
        <Typography variant="body2" >
            {candidature.phone}
        </Typography>
        <br/>
        <Typography sx={{textDecoration : "underline" , fontWeight : "bold"}} >Age:</Typography>
        <Typography variant="body2" >
            {candidature.age}
        </Typography>
        <br/>
        <Typography sx={{textDecoration : "underline" , fontWeight : "bold"}} >CV candidat:</Typography>
        <Typography variant="body2" >
            <a href={candidature.cv} target="blank" >Cliquez içi pour afficher le cv .</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  >
        <div>
          <DeleteForeverIcon onClick={handleOpen} sx={{color : "red" , "&:hover":{color: '#8B0909'}}} />
          <Modal
         open={open}
         onClose={handleClose}
         data-aos="fade-up"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           Voulez-vous vraiment supprimer cette candidature
           </Typography>
           <CardActions>
           <Button onClick={handleDelete} sx={{borderRadius : 0}} variant="outlined" color="error"> <DeleteForeverOutlinedIcon/>Supprimer</Button>
           <Button  onClick={handleClose} variant="contained" sx={{borderRadius : 0}}>← Annuler</Button>
           </CardActions>
           </Box>
       </Modal>
       </div>
        </IconButton>
        <ExpandMore
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p style={{fontSize : "small"}} >Afficher plus</p>
          <ExpandMoreIcon />      
        </ExpandMore>       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{textDecoration : "underline" , fontWeight : "bold"}} >Lettre de motivation:</Typography>
          <Typography paragraph>
              {candidature.lettre}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}