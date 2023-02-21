import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Prices.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Prices = () => {

    const navigate = useNavigate()

  return (
    <div>
      <div className="prices-bg">
      <h1 className="offres" data-aos="fade-up" style={{textAlign : "center"}} >
      Vous cherchez un lavage-auto ? 
      </h1><br/>
      <h2 style={{textAlign : "center" , color : "#274C77"}} >
      Découvrez nos meilleurs forfaits
      </h2>

      <div className="price-container" >

      <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",

      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                Citadine
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            29<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container-info" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 29€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 29€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 49€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 65€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 99€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",

      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                Berline
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            35<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container-info" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 35€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 45€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 59€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 75€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 119€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    <Card
      sx={{
        maxWidth:600,
        width : 320 ,
        height: "max-content",
        boxShadow: "-2px 5px 10px rgb(0 0 0 / 15%)",
        borderRadius: 0,
        mb : "4%" ,
        mt : "4%",
        
      }}
    >
    <CardContent>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" ,color : "#274C77" }}
            >
                4x4 / SUV Monospace
            </Typography>
            <br/>
            <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex",color : "gray" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            À partir de
            </Typography>
            <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ display: "flex",color : "#274C77" ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel" , fontWeight : "bold" }}
            >
            39<sub>€</sub>
            </Typography>

                <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ display: "flex",color : "white",p :"1.2%" ,backgroundColor : "#056CF2" , width : "50%"  ,justifyContent : "center",textAlign: "center", m : "auto",fontFamily : "Abel"  }}
                >
                <AccessTimeIcon fontSize="small"/>&nbsp;20 minutes
                </Typography>
             <div className="price-container-info" >
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",justifyContent : "center",textAlign: "center",mb : "3.5%" , mt : "4%"}}
             >
             ✓ Lavage extérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 39€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage intérieur <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 49€
             </Typography>
             <hr className="hr1" />
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "gray" }} /> :&nbsp;À partir de 69€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel",textAlign: "center",justifyContent : "center",mb : "3.5%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#eae724" }} /> :&nbsp;À partir de 85€
             </Typography>
             <Typography
             gutterBottom
             variant="p"
             component="div"
             sx={{ display: "flex",color : "black" ,fontFamily : "Abel" ,textAlign: "center" ,justifyContent : "center",mb : "3%"}}
             >
             ✓ Lavage complet <MilitaryTechIcon sx={{color : "#09971f" }} /> :&nbsp;À partir de 129€
             </Typography>
             </div>   

        <CardActions>
        <Button onClick={()=>navigate("/reservation")} fullWidth sx={{border : "2px solid rgb(0, 0, 0)",fontFamily : "Abel" ,background : "black" , color : "white",mt : "10%" ,padding: "1.5%" , borderRadius : 0, m : "auto" ,"&:hover":{color : "black" ,background : "white"} }}>Réserver maintenant ➔</Button>
        </CardActions>
    </CardContent>
    </Card>

    </div>

      </div>
    </div>
  );
};

export default Prices;
