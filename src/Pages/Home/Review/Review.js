import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';


const Review = ({ review }) => {
  const {img,name,email,description}=review

  
    return (
        <Grid item xs={2} sm={4} md={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            style={{ borderRadius: '50%', width: '60%', display: 'block', margin: 'auto' }} 
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {name}
            </Typography>
            <Typography gutterBottom variant="" sx={{ color: '#e64088' }}>
             {email}
            </Typography>
            <Typography variant="body2" sx={{textAlign:'left',my:2}} color="text.secondary">
              {description.slice(0,150)}
            </Typography>
          </CardContent>
        </CardActionArea>
         
      </Card>
      </Grid>
              
    );
};

export default Review;