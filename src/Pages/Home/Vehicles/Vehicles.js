import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Vehicle from '../Vehicle/Vehicle';
import { Container } from '@mui/material';


const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        fetch('https://warm-sea-06523.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data));
    }, [])
  return (
      <Container>
      
        <Box sx={{ flexGrow: 1}}>
          <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',m:2}} component="div">
          Our Collection
        </Typography>
          <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed'}} component="div">
          Choose The Best Scootie
        </Typography>
            <Grid container spacing={{ xs: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        vehicles.map(vehicle => <Vehicle
                            key={vehicle.name}
                            vehicle={vehicle}
                        ></Vehicle>)
        }
      </Grid>
      </Box>
      </Container>
      
    );
};

export default Vehicles;