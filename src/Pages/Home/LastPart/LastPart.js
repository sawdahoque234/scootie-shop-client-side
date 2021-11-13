import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import aboutimg1 from '../../../imgs/app.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const LastPart = () => {
    return (
        <Container style={{marginTop:'150px'}}>
<Box sx={{ flexGrow: 1 }}>
        
<Grid container spacing={2} style={{backgroundColor:'#182430'}}>
                    <Grid item xs={12} sx={{marginBottom:'40px'}} md={6}>
<Typography variant="h3" sx={{fontWeight:'800',my:4,color:'white'}} component="div">

20 Years of Experience in Scootie and  Rentals
</Typography>
<Typography variant="body1" sx={{ textAlign: 'left',color:'white',marginBottom:'px'}} color="black">
Innovation, Reliability and Client-friendliness are the key values that we hold dear. we provides you with all the information you need to make a well informed buying decision.
                        </Typography><br />
                        {/* progressbar */}
<Typography variant="h6" sx={{color:'white',textAlign: 'left'}} component="div">
Quality Scooter-90%
</Typography>
 <BorderLinearProgress variant="determinate" value={90} />
<Typography variant="h6" sx={{color:'white',textAlign: 'left'}} component="div">
Fully Insured-70%
</Typography>
 <BorderLinearProgress variant="determinate" value={70} />
<Typography variant="h6" sx={{color:'white',textAlign: 'left'}} component="div">
Easy Booking-91%
</Typography>
 <BorderLinearProgress variant="determinate" value={91} />
<Typography variant="h6" sx={{color:'white',textAlign: 'left'}} component="div">
Afrodable Pricing-75%
</Typography>
                        <BorderLinearProgress variant="determinate" value={75} /><br />
                        <Button style={{backgroundColor:'white',fontWeight:'700px'}} sx={{color:'black'}} component="div">
                            Download Our App  on<span><PlayArrowIcon sx={{margin:'10px',fontSize:'30px',backgroundColor:'#06d286'}}/></span> Google Play
</Button><br /><br />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
    <img src={aboutimg1} style={{marginTop:'-70px',height:'500px',borderRadius:'20px'}} alt="" />
</Grid>
</Grid>
            </Box>
             
        </Container>
            );
            
};

export default LastPart;