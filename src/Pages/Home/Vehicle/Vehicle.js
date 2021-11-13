import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Vehicle = ({ vehicle }) => {
    const {_id,name,description,img ,price} = vehicle;

    return (
            
     <Grid item  sm={3} md={4}>
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
            <CardContent>
              
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{color:'#e64088'}}>
          Price: $ {price}
          </Typography>
          <Typography variant="body2" sx={{textAlign:'left'}} color="text.secondary">
            {description?.slice(0,200)}
          </Typography>
        </CardContent>
          </CardActionArea>
          <Link to={`/orderpage/${_id}`} style={{textDecoration:'none'}}>
        <Button variant="contained" style={{marginBottom:'10px',backgroundColor:'#9907ed'}} color="primary">
        Buy Now
        </Button>
        </Link>
    </Card>
    </Grid>
            
    );
};

export default Vehicle;