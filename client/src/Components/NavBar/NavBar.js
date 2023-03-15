import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import { CardActions, Divider, Drawer, List, Menu } from "@mui/material";
import "./Navs.css";
import FCS from "./FCS-logo.png";
import MapIcon from '@mui/icons-material/Map';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { logoutAdmin } from "../../JS/Actions/admin";
import Modal from '@mui/material/Modal';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { cssTransition, toast, ToastContainer } from "react-toastify";

function NavBar({ scroldown1 }) {

  const bounce = cssTransition({
    enter: "animate__animated animate__fadeIn",
    exit: "animate__animated animate__fadeOutUp",
    duration: [700, 1200]
  });
  

  const showToastMessage = () => {
    toast.success('A bientôt ',{transition: bounce , toastId: 'success1'
  });
};

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

  const dispatch = useDispatch();
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const admin = useSelector((state) => state.adminReducer.admin);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const Logout = () => {
    dispatch(logoutAdmin(navigate))
    handleClose()
    showToastMessage()
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const scollSponsor = () => {
    scroldown1();
  };

  return (
    <header>
    <AppBar
      position="fixed"
      sx={{
        m: 0,
        p: "0.2%",
        backgroundColor: "white",
        color: "black"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Toolbar
            sx={{ cursor: "pointer", ml : "-3%" ,display: { xs: "none", md: "flex" } }}
          >
            <a href="/" underline="none">
              <img alt="FCS logo" src={FCS} width="80%" className="FCS-logo" />
            </a>
          </Toolbar>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>

            <Drawer
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              transitionDuration={{ enter: 650, exit: 1100 }}
              ModalProps={{
                keepMounted: true
              }}
              PaperProps={{
                sx: {
                  width: "fit-content",
                  display: { xs: "block", md: "none" },
                },
              }}
            >
 
            <a underline="none"  href="/" >
              <img alt="FCS logo" src={FCS} width="15%" className="FCS-logo" onClick={()=>handleCloseNavMenu()} />
            </a>

          <Divider />
              <List>
                <MenuItem             
                  onClick={()=>{navigate('/particulier') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"}}
                    
                  >
                    Particulier &nbsp;&nbsp;<MapIcon sx={{color : "#379ADC"}} />
                  </Typography>
                </MenuItem>
                {isAuthAdmin ?
                  <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/candidatures') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold" }}
                  >
                  Candidatures &nbsp;&nbsp;<PeopleAltOutlinedIcon sx={{color : "#379ADC"}} />
                  </Typography>
                </MenuItem>
                  :
                <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/professionnel') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold" }}
                  >
                    Professionnel &nbsp;&nbsp;<MyLocationIcon sx={{color : "#379ADC"}} />
                  </Typography>
                </MenuItem>}

                {isAuthAdmin ? 
                  <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/listreservation') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                  Réservations&nbsp;&nbsp; <BallotOutlinedIcon sx={{color : "#379ADC"}}/>
                  </Typography>
                </MenuItem>
                  :
                <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/gestionnaire-de-flotte') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                    Gestionnaire de flotte&nbsp;&nbsp; <LocalCarWashIcon  sx={{color : "#379ADC"}}/>
                  </Typography>
                </MenuItem>}

                <MenuItem
                  disableRipple 
                  onClick={scollSponsor}
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                     Partenaire&nbsp;&nbsp; <HandshakeIcon  sx={{color : "#379ADC"}}/>
                  </Typography>
                </MenuItem>
                
                <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/offre-d-emploi') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                    Offre d'emploi &nbsp;&nbsp;<BusinessCenterIcon sx={{color : "#379ADC"}}/>
                  </Typography>
                </MenuItem>

                <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/blogs') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                    Actualités&nbsp;&nbsp; <NewspaperIcon sx={{color : "#379ADC"}}/>
                  </Typography>
                </MenuItem>
            { isAuthAdmin ?  
              <MenuItem
              disableRipple
              onClick={()=>{navigate('/listnewsletter') ; handleCloseNavMenu();} }
              sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
            >
              <Typography
                textAlign="center"
                sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold" }}
              >
              NewsLetters &nbsp;&nbsp;<ContactMailOutlinedIcon sx={{color : "#379ADC"}}/>
              </Typography>
            </MenuItem>
                   :
                <MenuItem
                  disableRipple
                  onClick={()=>{navigate('/a-propos') ; handleCloseNavMenu();} }
                  sx={{ mt: "3%", "&:hover": { backgroundColor: "white" } }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: "flex",fontFamily : "Abel" , fontWeight : "bold"  }}
                  >
                    À Propos &nbsp;&nbsp;<AutoStoriesIcon sx={{ color : "#379ADC"}}/>
                  </Typography>
                </MenuItem> }

              </List>
            </Drawer>
          </Box>

          <Typography
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <a href="/" underline="none"  >
              <img alt="FCS logo" src={FCS} width="70%" className="FCS-logo" />
            </a>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <Button
              onClick={()=>navigate('/')}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                mr: "1%",textTransform : "none", fontSize : 18,
                "&:hover": { backgroundColor: "white" },fontFamily : "Abel", 
              }}
              disableRipple
              className="nav-item" 
            >
              Accueil
            </Button>

            <Button
              onClick={()=>navigate('/particulier')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%",fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Particulier
            </Button>

            {isAuthAdmin ? 
              <Button
              onClick={()=>navigate('/candidatures')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Candidatures
            </Button> :
            <Button
              onClick={()=>navigate('/professionnel')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Professionnel
            </Button> }
            {isAuthAdmin ? 
              <Button
              onClick={()=>navigate('/listreservation')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Réservations
            </Button>
              :
            <Button
              onClick={()=>navigate('/gestionnaire-de-flotte')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Gestionnaire de flotte
            </Button>}

            <Button
            onClick={()=>scollSponsor()}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
              Partenaire
            </Button>
            
            <Button
              onClick={()=>navigate("/offre-d-emploi")}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Offre d'emploi
            </Button>

            <Button
              onClick={()=>navigate('/blogs')}
              sx={{
                my: 2,
                color: "black",
                display: "block",textTransform : "none",
                mr: "1%" ,fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            Actualités
            </Button>

            {isAuthAdmin ? 
              <Button
              onClick={()=>navigate("/listnewsletter")}
              sx={{
                my: 2,
                color: "black",textTransform : "none",
                display: "block",fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            NewsLetters
            </Button>
              :
            <Button
              onClick={()=>navigate("/a-propos")}
              sx={{
                my: 2,
                color: "black",textTransform : "none",
                display: "block",fontFamily : "Abel", fontSize : 18,
                "&:hover": { backgroundColor: "white" },
              }}
              disableRipple
              className="nav-item"
            >
            À Propos
            </Button>}
          </Box>

          <Box>

            
              {isAuthAdmin ? 
                <Tooltip title="Paramétre">
                <IconButton
                sx={{ p: 0, color: "black", "&:hover": { color: "#056CF2" } }}
              >
                <AccountCircleIcon fontSize="large" onClick={handleOpenUserMenu} />
              </IconButton>

              </Tooltip>
            :
            <Tooltip title="Contactez nous">
            <IconButton
                onClick={()=>(navigate('/contactez-nous'))}
                sx={{ p: 0, color: "black", "&:hover": { color: "#056CF2" } }}
              >
                <ForwardToInboxSharpIcon fontSize="large" />
              </IconButton>
            </Tooltip>}

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >          
                <MenuItem  onClick={()=>{navigate(`/parametre/${admin._id}`);handleCloseUserMenu();}}>
                  <Typography sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',fontFamily : "Abel"}}><SettingsIcon/>&nbsp;Paramétre</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpen}>
                <Typography sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',fontFamily : "Abel"}}><PowerSettingsNewIcon/>&nbsp;Se déconnecter</Typography>
              </MenuItem>
            </Menu>
            <Modal
            open={open}
            onClose={handleClose}
            data-aos="fade-up"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              Voulez-vous vraiment se déconnecter ?
              </Typography>
              <CardActions>
              <Button onClick={()=>{Logout();handleCloseUserMenu();}} sx={{borderRadius : 0}} variant="outlined" color="error"> <LogoutIcon/> Déconnection</Button>
              <Button  onClick={handleClose} variant="contained" sx={{borderRadius : 0}}>← Annuler</Button>
              </CardActions>
              </Box>
          </Modal>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <ToastContainer  
    position="top-right"
    autoClose={500}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    pauseOnHover
    draggable
    className="toast-text"
    theme="dark"
    limit={1} />
    </header>
  );
}
export default NavBar;
