import React, { useState } from "react";
import "./AddOffreEmploi.css";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { addOffredemploi } from "../../JS/Actions/offredemploi";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
const AddOffreEmploi = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const load = useSelector((state) => state.offredemploiReducer.load);

  const [offre, setOffre] = useState({});

  const handleChange = (e) => {
    setOffre({ ...offre, [e.target.name]: e.target.value });
  };

  const handleOffre = (e) => {
    e.preventDefault();
    dispatch(addOffredemploi(offre,navigate));

  };

  return (
    <div className='Offredemploi-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Ajouter Nouveau Offre d'Emploi</title>
        <link rel="canonical" />
        <meta name="description" content="Ajouter Nouveau Offre d'Emploi" />
      </Helmet>
      <div className="offreemploibackground">
      <div className="background-text-offre">
        <h1 className="Offredemploi-text">Ajouter Nouveau Offre d'Emploi</h1>
      </div>
    </div>
      <div className="container-add-offer">
        <TextField
        fullWidth
        sx={{ mb: "3%", mt :"3%", color: "black", width : "100%" }}
        id="standard-basic"
        label="Nom offre*"
        variant="standard"
        onChange={handleChange}
        name="name"
        type ="text"
      />

        <FormControl variant="standard" fullWidth sx={{mb : "6%", textOverflow: "ellipsis" }} >
        <InputLabel id="demo-simple-select-standard-label" >Adresse*</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        name="local"
        onChange={handleChange}
        label="Adresse*"
        style={{textOverflow: "ellipsis" }}
      >
        <MenuItem value="Parking indigo Saint germain Niv-1; 169 Boulevard Saint Germain,75006 Paris" >Parking indigo Saint germain Niv-1; 169 Boulevard Saint Germain,75006 Paris</MenuItem>
        <MenuItem value="Parking indigo place vendome Niv -1; 28 Place Vendome, 75001 Paris">Parking indigo place vendome Niv -1; 28 Place Vendome, 75001 Paris</MenuItem>
        <MenuItem value="Parking indigo Muse Niv -2; 2 rue des messageries, 57000 Metz">Parking indigo Muse Niv -2; 2 rue des messageries, 57000 Metz</MenuItem>
        <MenuItem value="Parking indigo Paris Louvre Samaritaine Niv -1; Pl; Du Louvre,75001 Paris" >Parking indigo Paris Louvre Samaritaine Niv -1; Pl; Du Louvre,75001 Paris</MenuItem>
        <MenuItem value="Parking indigo Saint sulpice Niv -2; 8 place saint sulpice, 75006 Paris" >Parking indigo Saint sulpice Niv -2; 8 place saint sulpice, 75006 Paris</MenuItem>
        <MenuItem value="Parking indigo Réaumur Saint Denis Niv -1; 40 rue Dussoubs, 75002 Paris">Parking indigo Réaumur Saint Denis Niv -1; 40 rue Dussoubs, 75002 Paris</MenuItem>
        <MenuItem value="Parking indigo Marché St Honoré Niv -2; 39 Place du marché Saint Honoré, 75001 Paris">Parking indigo Marché St Honoré Niv -2; 39 Place du marché Saint Honoré, 75001 Paris</MenuItem>
        <MenuItem value="Parking indigo Paris Soufflot Pnthéon Niv -2; 22 Rue Soufflot,75005 Paris" >Parking indigo Paris Soufflot Pnthéon Niv -2; 22 Rue Soufflot,75005 Paris</MenuItem>
        <MenuItem value="Parking indigo Croix des petits champs Niv-2; 14 Rue croix des petits champs, 75001 Paris">Parking indigo Croix des petits champs Niv-2; 14 Rue croix des petits champs, 75001 Paris</MenuItem>
        <MenuItem value="Parking indigo Paris Saint Martin Niv ; 254 Rue saint martin face au, 75003 PARIS" >Parking indigo Paris Saint Martin Niv ; 254 Rue saint martin face au, 75003 PARIS</MenuItem>
      </Select>
      </FormControl>
      <TextField
      fullWidth
      sx={{ mb: "3%", mt :"3%", color: "black", width : "100%" }}
      id="standard-basic"
      label="Description*"
      variant="standard"
      onChange={handleChange}
      name="description"
      type ="text"
      multiline
      rows={7}
    />

    <TextField
    fullWidth
    sx={{ mb: "3%", mt :"3%", color: "black", width : "100%" }}
    id="standard-basic"
    label="Rôle*"
    variant="standard"
    onChange={handleChange}
    name="role"
    type ="text"
    multiline
    rows={7}
  />

        {load ? (
          <Button
          sx={{
            fontSize: "0.8rem",
            padding: "2%",
            width: "25%",
            borderRadius: 0,
            color: "black",
            backgroundColor: "white",
            border: "2px solid rgb(0, 0, 0)",
          }}
        >
          <CircularProgress size="1.25rem" sx={{ color: "black" }} />
          Ajouter
        </Button>
        ) : (
          <Button
          onClick={handleOffre}
          sx={{
            border: "2px solid rgb(0, 0, 0)",
            background: "black",
            color: "white",
            fontSize: "0.8rem",
            padding: "2%",
            width: "25%",
            borderRadius: 0,
            "&:hover": { color: "black", background: "white" },
          }}
        >
          Ajouter
        </Button>
        )}
      </div>
    </div>
  );
};

export default AddOffreEmploi;
