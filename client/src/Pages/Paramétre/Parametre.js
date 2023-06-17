import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editadminpassword } from "../../JS/Actions/admin";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button, Card, CardContent, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";

const Parametre = () => {
  
  const match = useMatch("/parametre/:id");

  const [newAdmin, setNewAdmin] = useState({});
  
  const load = useSelector((state) => state.adminReducer.loadAdmin);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editadminpassword(match.params.id, newAdmin,navigate));
  };
  return (
    <div className="Offredemploi-top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Changer votre mot de passe</title>
        <link rel="canonical" />
        <meta name="paramétre du compte" content="paramétre du compte" />
      </Helmet>
      <div className='offreemploibackground'>
      <div className="background-text-offre">
      <h1 className="Offredemploi-text">Paramètre du compte</h1>
      <p className="text-center">Changer votre mot de passe</p>
      </div>
    </div>

    <form onSubmit={handleEdit}>

      <Grid container xs={10} sm={10} md={10} lg={12} sx={{justifyContent : "center", alignItems : "center" , display : "flex" , m : "auto" , mt : "4%"}} >

      <Card
    sx={{
      boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
      borderRadius: 0,
      padding : "3%" ,
    }}
  >
  <ManageAccountsIcon sx={{ fontSize: 65 , justifyContent : "center", alignItems : "center" , display : "flex" , m : "auto"}} />
  <CardContent>
  <FormControl width="90%" variant="standard" fullWidth  sx={{paddingTop : "2%" , mb : "2%" , alignItems : "center" , m : "auto" , justifyContent : "center" , display : "flex"}} >
  <InputLabel htmlFor="standard-adornment-password">Ancien mot de passe*</InputLabel>
  <Input
  onChange={handleChange}
  name="oldPassword"
    id="standard-adornment-password"
    type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
  />
</FormControl>
        <FormControl width="90%" variant="standard" fullWidth  sx={{paddingTop : "2%" , mb : "2%" , alignItems : "center" , m : "auto" , justifyContent : "center" , display : "flex"}} >
          <InputLabel htmlFor="standard-adornment-password">Nouveau mot de passe*</InputLabel>
          <Input
          onChange={handleChange}
          name="password"
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl width="90%" variant="standard" fullWidth  sx={{paddingTop : "2%" , mb : "2%" , alignItems : "center" , m : "auto" , justifyContent : "center" , display : "flex"}} >
        <InputLabel htmlFor="standard-adornment-password">Confirmer votre nouveau mot de passe*</InputLabel>
        <Input
        onChange={handleChange}
        name="confirmedpassword"
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

          <div style={{marginTop : "10%"}} >
        {load ? (
          <Button  sx={{m : "auto" ,display : "flex" , alignItems : "center" ,fontSize : "0.8rem",padding: "3%" ,  borderRadius : 0,color : "black" ,backgroundColor : "white" ,border : "2px solid rgb(0, 0, 0)" }} fullWidth><CircularProgress  size="1.25rem"  sx={{ color: "black" , alignItems : "center" , justifyContent : "center" , m : "auto"}} /></Button>
        ) : (
          <Button type="submit" onClick={handleEdit} sx={{border : "2px solid rgb(0, 0, 0)",background : "black" , color : "white" ,fontSize : "0.8rem",padding: "3%" , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center" , "&:hover":{color : "black" ,background : "white"} }} fullWidth>Sauvegarder</Button>
        )}
        </div>
        </CardContent>
        </Card>
        </Grid>
    </form>
    </div>
  );
};

export default Parametre;
