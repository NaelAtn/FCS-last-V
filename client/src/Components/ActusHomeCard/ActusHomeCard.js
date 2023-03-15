import  React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActions, Link } from '@mui/material';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from 'react-redux';
import { addFavActus, removeFavActus } from '../../JS/Actions/actus';
import Badge from '@mui/material/Badge';
import EllipsisText from "react-ellipsis-text";

export default function ActusHome({actus}) {

  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const dispatch = useDispatch();

  const [bcolor, setBcolor] = useState(false)

  const handleFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(addFavActus(actus._id));
  };
  const handleDeleteFav = (e) => {
    e.preventDefault();
     setBcolor(!bcolor) 
    dispatch(removeFavActus(actus._id));
  };

  return (
    <Card sx={{ maxWidth: 300 , mb :"5%", boxShadow :"-2px 5px 10px rgb(0 0 0 / 15%)", borderRadius : 0 }} >
      <CardContent>
      <Typography variant="body2"  sx={{ color: "#056CF2",display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily : "Abel"}} >
        <CalendarMonthIcon/>
      {converTime(actus.createdAt)}
      </Typography>
      </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={actus.image}
          alt="fcs-blog-image"
        />
        <CardContent>
        <Link href={`/blog/${actus._id}`} sx={{textDecoration :"none" , color:"black" , "&:hover" : {color : "#056CF2"}}} >
          <Typography sx={{fontFamily : "Abel"}}>
            <EllipsisText text={actus.name} length={40} />
          </Typography>
          </Link>
        </CardContent>
        <hr className="hr1" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={bcolor ? handleDeleteFav : handleFav } sx={{color :bcolor ? "red" : "gray" }}>
        <Badge  color="error" badgeContent={actus.likes} max={999}>
          <FavoriteIcon /> 
        </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}