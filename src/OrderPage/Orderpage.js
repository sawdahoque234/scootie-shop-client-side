import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button ,Container, TextField} from '@mui/material';
import useAuth from '../hooks/useAuth';
import './Orderpage.css'
const Orderpage = () => {
    const { vehicleId} = useParams();
    const [vehicle,setVehicle] = useState([]);
    const { register,reset, handleSubmit,control } = useForm();
  const { user } = useAuth();
  
  
    useEffect(() => {
        fetch(`https://warm-sea-06523.herokuapp.com/vehicles/${vehicleId}`)
            .then(res => res.json())
            .then(data => setVehicle(data))
    },[vehicleId])


  const onSubmit = data => {
        const ordered = { ...vehicle }
        data.order = ordered;
        data.status = "pending";
    fetch('https://warm-sea-06523.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => {
            if (result.insertedId) {
                alert('Ordered proceed successfully!!!')
                reset();
            }
        console.log(result)
    })
};

    return (
        <Container>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} >
        <Grid item md={7} style={{marginTop:'20px'}}>
        <Card sx={{ maxWidth: 460}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={vehicle.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {vehicle.name}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{color:'#e64088'}}>
          Price: $ {vehicle.price}
          </Typography>
          <Typography variant="body2" sx={{textAlign:'left'}} color="text.secondary">
            {vehicle.description}
          </Typography>
        </CardContent>
      </CardActionArea>
        
    </Card>
          </Grid>
                <Grid item sm={3} md={5}>
              <Typography variant="h4" sx={{fontWeight:'800',color:'#06d286',paddingBottom:'20px'}} component="div">
 Order Scootie
</Typography>
              <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
               
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Price" defaultValue={user.displayName} {...register("name" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Price" defaultValue={user.email} {...register("email" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: {value } }) => (
                <TextField sx={{width:'400px',marginBottom:'10px'}} size="small" value={vehicle.name}/> )}/> 
                <Controller 
                control={control}
                render={({ field: {value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} size="small" value={vehicle.price} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Address" defaultValue="" {...register("address")} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField placeholder="phone number" sx={{ width: '400px', marginBottom: '10px' }} defaultValue="" {...register("phone")} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }}
                type="date"
                {...register("test")}
                />)} />
                
        <Button variant="contained" style={{backgroundColor:'#06d286'}} type="submit">Order Now</Button>
        </form>

          </Grid>
        </Grid>
            </Box>
        </Container>
            
    );
};

export default Orderpage;