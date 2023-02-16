import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BackupIcon from "@mui/icons-material/Backup";
import { useDispatch, useSelector } from "react-redux";
import {addActus} from "../../JS/Actions/actus"
import {useNavigate} from 'react-router-dom'
import { Button, CircularProgress, Grid, TextField } from "@mui/material";


const AddActus = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const load = useSelector((state) => state.actusReducer.load);

  const [actus, setActus] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setActus({ ...actus, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const handleADD = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", actus.name);
    data.append("description", actus.description);
    data.append("image", file);
    dispatch(addActus(data,navigate));
  };
  
  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Ajouter Nouvelle Actualité</title>
        <link rel="canonical" />
        <meta name="description" content="Ajouter Nouvelle Actualité" />
      </Helmet>
      <div className="offreemploibackground">
        <div className="background-text-offre">
          <h1 className="Offredemploi-text">Ajouter Nouvelle Actualité</h1>
        </div>
      </div>

      <div>
        <br/><br/><br/>
        <div className="can-input">
        <Grid container xs={10} sm={8} md={4} lg={5} >
        <p className="postulation-text">Titre Blog </p>

        <TextField
        fullWidth
        sx={{ mb: "6%", paddingTop : "3%" }}
        id="standard-basic"
        label="Titre*"
        variant="standard"
        name="name"
        type ="text"
        onChange={handleChange}
      />

        <p className="postulation-text">
          Description Blog
        </p>
        <TextField
        fullWidth
        multiline
        rows={7}
        sx={{ mb: "3%" , mt : "3%" ,paddingTop : "3%"}}
        id="standard-basic"
        label="Insérez la description ici*"
        variant="standard"
        onChange={handleChange}
        name="description"
        type="text"
      />

        </Grid>
        </div>
        <hr className="hr1" />
        <p className="postulation-text">Image Blog </p>
        <div className="input-cv">
          <input type="file" id="file-input" encType="multipart/form-data" onChange={handlePhoto} />
          <label for="file-input" style={{ cursor: "pointer" }}>
            Importez un fichier ou glissez-déposez ici
            <br />
            Nous acceptons les fichiers JPG,JPEG et PNG.
            <br />
            <BackupIcon
              sx={{
                alignItems: "center",
                textAlign: "center ",
                display: "flex",
                m: "auto",
                mt: "3%",
                fontSize: "2.5rem",
              }}
            />
          </label>

        </div>
      </div><br/><br/>
      <div style={{marginTop : "3.5%"}} >
      { load ? 
        <Button  sx={{m : "auto" ,display : "flex" , alignItems : "center" ,fontFamily : "Abel",padding: "1%" ,  borderRadius : 0,color : "black" ,backgroundColor : "white" ,border : "2px solid rgb(0, 0, 0)" }}><CircularProgress  size="1.25rem"  sx={{ color: "black"}} />Ajoutez</Button>
        :
      <Button onClick={handleADD} sx={{border : "2px solid rgb(0, 0, 0)",background : "black" , color : "white" ,padding: "1%" , paddingLeft : "2.5%" , paddingRight : "2.5%" , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center",fontFamily : "Abel" , "&:hover":{color : "black" ,background : "white"} }}>Ajoutez</Button>
    }
    </div>

    </div>
  );
};

export default AddActus;
