import React from 'react';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container, TextField } from '@mui/material';
import img2 from '../../../imgs/g4.png'

const AddProduct = () => {
    const { register, handleSubmit,control, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/vehicles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully!!')
                    reset();
                }
            })
    }
        return (
            <Container>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} >
        <Grid item md={6} style={{marginTop:'20px'}}>
                            <img src={img2} alt="" style={ {width:'90%'}}/>
          </Grid>
                <Grid item sm={4} md={5}>
<Typography variant="h4" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '20px',marginTop:'10px' }} component="div">
Add New Product
</Typography>
              <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Name" defaultValue="" {...register("name", { required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Price" defaultValue="" {...register("price" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                                        <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Description" defaultValue="" {...register("description", { required: true })} />)} />
                                
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Image" defaultValue="" {...register("img", { required: true })} />)} />
        <Button variant="contained" style={{backgroundColor:'#06d286'}} type="submit">Add Product</Button>
        </form>

          </Grid>
        </Grid>
            </Box>
        </Container>
            
        );
    };

export default AddProduct;