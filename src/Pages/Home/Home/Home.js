import { Container } from '@mui/material';
import Banner from '../Banner/Banner';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Vehicle from '../Vehicle/Vehicle';
import Feauter from '../Feauter/Feauter';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer'
import Team from '../Team/Team';
import LastPart from '../LastPart/LastPart';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data));
    }, [])
    return (
        <>
            <Banner></Banner>
            {/* //product// */}
                <Container>
                <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',my:4}} component="div">
                Our Collection
                </Typography>
                <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed'}} component="div">
                Choose The Best Scootie
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    vehicles.slice(0,6).map(vehicle => <Vehicle
                        key={vehicle.name}
                        vehicle={vehicle}
                    ></Vehicle>)
                }
                </Grid>
                </Container>

            {/* //product// */}
            <Feauter></Feauter>
            <Gallery></Gallery>
            <Team></Team>
            <Reviews></Reviews>
            <LastPart></LastPart>
            <Footer></Footer>

    </>
    );
};

export default Home;
