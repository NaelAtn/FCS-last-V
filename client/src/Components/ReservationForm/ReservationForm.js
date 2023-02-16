import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReservation } from '../../JS/Actions/reservation';
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import CloseIcon from '@mui/icons-material/Close';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';



export default function ReservationForm() {
  
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split('T')[0]

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [reservation, setReservation] = React.useState({});
  const load = useSelector((state) => state.reservationReducer.load);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleReservation = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservation, navigate));
  };
  

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <form className="reservation-form" onSubmit={handleReservation}>
    <div className="res-title">
    <Typography sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap' , mb :"7.5%" , mt : "7.5%"  }}>
      <BookmarkAddOutlinedIcon sx={{ fontSize: "2rem" }} />
      <h3>Prenez un rendez-vous</h3>
      </Typography>
    </div>

    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">

          <Step>
          <StepLabel icon={<PersonPinIcon/>}  >
          Nom et Prénom
          </StepLabel>
          <StepContent>
            <Typography>        
            <TextField
            fullWidth
            sx={{ mb: "3%", mt :"3%", color: "black", width : "100%" }}
            id="standard-basic"
            label="Nom et Prénom*"
            variant="standard"
            type ="text"
            onChange={handleChange}
            name="name"
            value={reservation.name}
          /></Typography>

            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                disabled={!reservation.name}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 , backgroundColor : "black",fontFamily : "Abel" , borderRadius : 0,"&:hover":{color : "white" ,background : "#4d4d4d"} }}
                >
                  suivant
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1,fontFamily : "Abel" }}
                  disabled
                >
                précédent
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step >
          <StepLabel icon={<LocalPhoneIcon/>} >
          Numéro de téléphone
          </StepLabel>
          <StepContent>
            <Typography>
            <TextField
            fullWidth
            sx={{ mb: "5%" }}
            id="standard-basic"
            label="(+33) Numéro de téléphone*"
            variant="standard"
            type="number"
            onChange={handleChange}
            name="phone"
            value={reservation.phone}          
          />
          </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                disabled={!reservation.phone}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1,fontFamily : "Abel" , backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#4d4d4d"}}}
                >
                  suivant
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 ,fontFamily : "Abel"}}
                >
                précédent
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step >
          <StepLabel icon={<CalendarMonthIcon/>}>
            Date
          </StepLabel>
          <StepContent>
            <Typography>
            <TextField
            fullWidth
            sx={{ mb: "3%" }}
            id="standard-basic"
            variant="standard"
            type="date"
            onChange={handleChange}
            name="time"
            value={reservation.time}   
            defaultValue={defaultValue}
          />
          </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                disabled={!reservation.time}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 ,fontFamily : "Abel", backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#4d4d4d"}}}
                >
                  suivant
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1,fontFamily : "Abel" }}
                >
                précédent
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step >
        <StepLabel icon={<QueryBuilderIcon/>}>
        Heure
        </StepLabel>
        <StepContent>
          <Typography>
          <TextField
          fullWidth
          sx={{ mb: "3%" }}
          id="standard-basic"
          variant="standard"
          type="time"
          onChange={handleChange}
          name="hour"
          defaultValue='09:00'
          value={reservation.hour}       
        inputProps={{
          min: '9:00',
          max: '18:00',
          step :900
        }} 
        InputLabelProps={{
          shrink: true,
        }}
        />
        </Typography>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
              disabled={!reservation.hour}
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 ,fontFamily : "Abel", backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#4d4d4d"}}}
              >
                suivant
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1,fontFamily : "Abel" }}
              >
              précédent
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>

        <Step >
        <StepLabel icon={<LocationOnIcon/>}>
          Adresse
        </StepLabel>
        <StepContent>
          <Typography>
          <FormControl variant="standard" fullWidth sx={{mb : "6%", textOverflow: "ellipsis" }} >
          <InputLabel id="demo-simple-select-standard-label" >Adresse*</InputLabel>
          <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="place"
          label="Adresse*"
          style={{textOverflow: "ellipsis" }}
          onChange={handleChange}
          value={reservation.place}
          
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
          </Typography>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                disabled={!reservation.place}
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1,fontFamily : "Abel", backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#4d4d4d"} }}
              >
                suivant
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1,fontFamily : "Abel" }}
              >
              précédent
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>

      <Step>
      <StepLabel icon={<CheckIcon/>} >
      Confirmation
      </StepLabel>
      <StepContent>

        <Box sx={{ mb: 2 }}>
          <div>
          <Typography  >   
          <p className='font-reservation'>
           Veuillez confirmer votre réservation   
          </p>  
          </Typography>
          {load ? 
            <Button
            variant="contained"
            onClick={handleReservation}
            sx={{ mt: 3, mr: 1 ,fontFamily : "Abel", backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#52D196"} }}
          >
          <CircularProgress  size="1.25rem"  sx={[{color : "white" }]} />&nbsp;
            confirmer
          </Button> :
          <Button
          variant="contained"
          onClick={handleReservation}
          sx={{ mt: 3, mr: 1,fontFamily : "Abel" , backgroundColor : "black" , borderRadius : 0,"&:hover":{color : "white" ,background : "#52D196"} }}
        >
          confirmer
        </Button>
          }

            <Button
              onClick={handleReset}
              sx={{ mt: 3, mr: 1 , borderRadius : 0,fontFamily : "Abel"}}
              variant="outlined" color="error"
            >
            <CloseIcon/> Annuler
            </Button>
          </div>
        </Box>
      </StepContent>
    </Step>

        
      </Stepper>
    </Box>
    </form>
  );
}

