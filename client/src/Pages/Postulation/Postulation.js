import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { getOneOffre } from "../../JS/Actions/offredemploi";
import './Postulation.css'
import BackupIcon from '@mui/icons-material/Backup';
import { addCandidature } from "../../JS/Actions/candidature";
import {useNavigate} from 'react-router-dom'
import { Button, CircularProgress, Skeleton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Postulation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch("/candidature/:id")

  const offreToGet = useSelector(state => state.offredemploiReducer.offreToGet)
  const loadOffer = useSelector(state => state.offredemploiReducer.load)
  const load = useSelector((state) => state.candidatureReducer.load);

  const [postulation, setPostulation] = useState({});
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    setPostulation({ ...postulation, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const handleADD = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", postulation.name);
    data.append("adresse", postulation.adresse);
    data.append("email", postulation.email);
    data.append("phone", postulation.phone);
    data.append("age", postulation.age);
    data.append("lettre", postulation.lettre);
    data.append("poste", offreToGet.name);
    data.append("cv", file);
    dispatch(addCandidature(data,navigate));
  };
  
  useEffect(() => {
    dispatch(getOneOffre(match.params.id))
  },[dispatch,match.params.id])
  
  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Candidature | {`${offreToGet.name}`} </title>
        <link rel="canonical" />
        <meta name="description" content="Candidature FCS" />
      </Helmet>
      <div className='offreemploibackground'>
      <div className='background-text-offre'>
      <AssignmentIndIcon sx={{fontSize : "2.5rem" , display : "flex" ,alignItems : "center" , justifyContent : "center" , m: "auto"}} />
      <h1 className="Offredemploi-text">Candidature</h1>
      <p className='text-center' >Rejoignez notre famille FCS en tant que {offreToGet.name} .</p>
      </div>
      </div>
      <div className="Postulation-container" >
        <p className="postulation-text">Description :</p>
        {
          loadOffer ? 
          <Box sx={{ width: "81%" , alignItems : "center" , justifyContent : "center" , m :"auto" }}>
          <Skeleton animation="wave" height={30} />
          <Skeleton animation="wave" height={30} />
          <Skeleton animation="wave" height={30} />
          <Skeleton animation="wave" height={30} width={"30%"} />
          </Box>
          :
          <p className="pos-desc-text" >{offreToGet.description}</p>
        }
      <hr className="hr1" />
      <p className="postulation-text" >CV <span style={{color : "red"}} >*</span></p>

    <div className="input-cv" >
      <input type="file" id="file-input" encType="multipart/form-data" onChange={handlePhoto} />
      <label for="file-input" style={{cursor : "pointer"}} >Importez un fichier ou glissez-déposez ici<br/>
      Nous acceptons les fichiers PDF,JPEG et PNG.<br/>
      <BackupIcon sx={{alignItems : "center" , textAlign: "center " , display : "flex" , m :"auto", mt:"3%" , fontSize : "2.5rem" }} />
      </label>
      </div>

      <hr className="hr1" />
      <p className="postulation-text">Informations personnelles <span style={{color : "red"}} >*</span></p>
      <div style={{display : "flex" , flexDirection : "column"}} >
        <div className="can-input" >
      <Grid container xs={10} sm={8} md={4} lg={5} >
      <TextField
      fullWidth
      sx={{ mb: "6%", paddingTop : "3%" }}
      id="standard-basic"
      label="Nom et Prénom*"
      variant="standard"
      name="name"
      type ="text"
      onChange={handleChange}
    />

    <TextField
    fullWidth
    sx={{ mb: "6%", paddingTop : "3%" }}
    id="standard-basic"
    label="Age*"
    variant="standard"
    type="number"
    onChange={handleChange}
    name="age"
  />

  <TextField
  fullWidth
  sx={{ mb: "6%", paddingTop : "3%" }}
  id="standard-basic"
  label="Adresse*"
  variant="standard"
  type="text"
  onChange={handleChange}
  name="adresse"
/>

<TextField
fullWidth
sx={{ mb: "6%", paddingTop : "3%" }}
id="standard-basic"
label="Numéro de téléphone*"
variant="standard"
type="number"
onChange={handleChange}
name="phone"
/>

<TextField
fullWidth
sx={{ mb: "6%", paddingTop : "3%" }}
id="standard-basic"
label="Adresse e-mail*"
variant="standard"
type="email"
onChange={handleChange}
name="email"
/>

      </Grid>
      </div>
    </div>
      <hr className="hr1" />
      <p className="postulation-text">Lettre de motivation<span style={{color : "red"}} >*</span></p>
      <div className="can-input" >
      <Grid container xs={10} sm={8} md={4} lg={5} >
          <TextField
          fullWidth
          multiline
          rows={7}
          sx={{ mb: "3%" , mt : "3%" ,paddingTop : "3%"}}
          id="standard-basic"
          label="Votre Message*"
          variant="standard"
          onChange={handleChange}
          name="lettre"
          type="text"
        />
        </Grid>
        </div>
        <div style={{marginTop : "3.5%"}} >
      { load ? 
        <Button  sx={{m : "auto" ,display : "flex" , alignItems : "center" ,fontFamily : "Abel",padding: "1%" ,  borderRadius : 0,color : "black" ,backgroundColor : "white" ,border : "2px solid rgb(0, 0, 0)" }}><CircularProgress  size="1.25rem"  sx={{ color: "black"}} />Envoyer</Button>
        :
      <Button onClick={handleADD} sx={{border : "2px solid rgb(0, 0, 0)",background : "black" , color : "white" ,padding: "1%" , paddingLeft : "2.5%" , paddingRight : "2.5%" , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center",fontFamily : "Abel" , "&:hover":{color : "black" ,background : "white"} }}>Envoyer</Button>
    }
    </div>
    
      </div>
    </div>
  );
};

export default Postulation;
