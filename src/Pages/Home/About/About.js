import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import aboutimg1 from '../../../imgs/app.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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

const About = () => {
    return (
        <Container>

<Box sx={{ flexGrow: 1 }}>
        
<Grid container spacing={2} style={{marginBottom:'100px'}}>
<Grid item xs md={12} style={{margin:'40px'}}>
<Typography variant="h3" sx={{fontWeight:'800',color:'#06d286',paddingBottom:'20px'}} component="div">
 More About Us
</Typography>
<Typography variant="h6" sx={{ textAlign: 'left'}} color="black">
Our efforts and drive doesn’t just come from one person but from all of our partners and employees. We believe that together we can make your experience one that you never forget. That’s why our website is your one stop shop for two wheelers.We love what we do and our passion for motorcycles and people is what drives us to constantly better ourselves to help you. Innovation, Reliability and Client-friendliness are the key values that we hold dear. Scootie shop provides you with all the information you need to make a well informed buying decision.
</Typography>
</Grid>
                </Grid>
                {/* ****progress*** */}
            </Box>
<Box sx={{ flexGrow: 1 }}>
        
<Grid container spacing={2} style={{backgroundColor:'#182430',marginTop:'20px'}}>
<Grid item xs sm={4} md={6}>
<Typography variant="h3" sx={{fontWeight:'800',my:4,color:'white'}} component="div">

20 Years of Experience in Scootie and  Rentals
</Typography>
<Typography variant="body1" sx={{ textAlign: 'left',color:'white',marginBottom:'20px'}} color="black">
Innovation, Reliability and Client-friendliness are the key values that we hold dear. we provides you with all the information you need to make a well informed buying decision.
                        </Typography>
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
 <BorderLinearProgress variant="determinate" value={75} /><br /><br /><br />
</Grid>
                    <Grid item xs sm={6} md={6}>
    <img src={aboutimg1} style={{marginTop:'-70px',height:'500px',borderRadius:'20px'}} alt="" />
                        
</Grid>
</Grid>
            </Box>
             
        </Container>
            );
            
};
export default About;