import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../JS/Actions/admin";
import { Button, Card, CardContent, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import "./LoginAdmin.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Helmet } from "react-helmet";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const LoginAdmin = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [admin, setAdmin] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const load = useSelector((state) => state.adminReducer.loadAdmin);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(admin, navigate));
  };



  return (

    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Groupe FCS | Admin Login </title>
        <link rel="canonical" />
        <meta name="description" content="Admin login" />
      </Helmet>
      <form onSubmit={handleAdmin}>
      <div className="login-top">
        <h1 className="text-login">Login Admin</h1>
        <Grid container xs={10} sm={10} md={10} lg={10} sx={{justifyContent : "center", alignItems : "center" , display : "flex" , m : "auto" , mt : "4%"}} >

        <Card
      sx={{
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        padding : "3%" ,
      }}
    >
    <AdminPanelSettingsIcon sx={{ fontSize: 65 , justifyContent : "center", alignItems : "center" , display : "flex" , m : "auto"}} />
    <CardContent>
          <TextField
          id="standard-basic"
          label="Nom utilisateur*"
          variant="standard"
          type="text"
          onChange={handleChange}
          name="name"
          fullWidth
          sx={{paddingTop : "3%" , mb : "2.5%" ,  alignItems : "center" , m : "auto" , justifyContent : "center" , display : "flex"}}
        />
          <FormControl width="90%" variant="standard" fullWidth  sx={{paddingTop : "2%" , mb : "2%" , alignItems : "center" , m : "auto" , justifyContent : "center" , display : "flex"}} >
            <InputLabel htmlFor="standard-adornment-password">Mot de passe*</InputLabel>
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
            <div style={{marginTop : "10%"}} >
          {load ? (
            <Button  sx={{m : "auto" ,display : "flex" , alignItems : "center" ,fontSize : "0.8rem",padding: "3%" ,  borderRadius : 0,color : "black" ,backgroundColor : "white" ,border : "2px solid rgb(0, 0, 0)" }} fullWidth><CircularProgress  size="1.25rem"  sx={{ color: "black" , alignItems : "center" , justifyContent : "center" , m : "auto"}} /></Button>
          ) : (
            <Button type="submit" onClick={handleAdmin} sx={{border : "2px solid rgb(0, 0, 0)",background : "black" , color : "white" ,fontSize : "0.8rem",padding: "3%" , borderRadius : 0, m : "auto" ,display : "flex" , alignItems : "center" , "&:hover":{color : "black" ,background : "white"} }} fullWidth>Login</Button>
          )}
          </div>
          </CardContent>
          </Card>
          </Grid>
      </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
