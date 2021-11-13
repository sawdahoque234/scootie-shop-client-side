import { Typography,Container, Grid,Box,Button } from '@mui/material';
import React,{useEffect,useState} from 'react';
const ManageProduct = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data));
    }, [])

    const handledelete = vehicle => {
        const url = `http://localhost:5000/vehicles/${vehicle}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Product Deleted successfully!!!')
            const remaining = vehicles.filter(vehicle => vehicle._id !== vehicle)
            
            setVehicles(remaining)
            window.location.reload();
        }
    })

}

    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '800', color: '#9907ed', paddingBottom: '50px' }} component="div">
                Manage Product
</Typography>
            {
                vehicles.map(vehicle =>
                    <Box sx={{ flexGrow: 1 }} key={vehicle._id}
                >
                        <Grid container style={{marginBottom:'30px',border:'1px solid gray',borderRadius:'5%'}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid  xs={2} sm={4} md={3} >
                            <img src={vehicle.img} style={{height:'100px',borderRadius:'5%',margin:'20px'}}  alt="" />
                            </Grid>
                            <Grid xs={2} sm={4} md={5} >
                                <Typography variant="h5" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '10px', marginTop: '10px' }} component="div">
                                {vehicle.name}
                                </Typography>
                                
                                <Typography variant="h6">Price: $ {vehicle.price} </Typography>
                                <Typography variant="body2" sx={{textAlign:'left'}} color="text.secondary">
                                {vehicle.description?.slice(0,200)}
                                 </Typography>
                            </Grid>
                            <Grid xs={2} sm={3} md={4} >
                                <Button variant="contained" style={{ marginRight: '10px', marginTop: '20px' ,backgroundColor:'#9907ed'}}>Update</Button>
                                <Button variant="contained" style={{backgroundColor:'#e64088',marginTop: '20px'}} onClick={()=>handledelete(vehicle._id)}>Delete</Button>
                            </Grid>
                   </Grid>
                </Box>)
            }
            </Container>
    );
};

export default ManageProduct;