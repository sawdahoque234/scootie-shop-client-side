import React from "react";
import useAuth from "../../../hooks/useAuth";
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container, TextField } from '@mui/material';
import img3 from '../../../imgs/r1.png'
const AddReviews = () => {
    const { register, handleSubmit,control, reset } = useForm();

    const { user } = useAuth();

    
    const onSubmit = data => {
        console.log(data)
        axios.post('https://warm-sea-06523.herokuapp.com/addreviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Review Added successfully!!')
                    reset();
                }
            })
    }
        return (
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} >
                        <Grid item md={6} style={{ marginTop: '20px' }}>
                            <img src={img3} alt="" style={{ width: '90%' }} />
                        </Grid>
                        <Grid item sm={4} md={5}>
                            <Typography variant="h4" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '20px', marginTop: '10px' }} component="div">
                                Review
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
                                    render={({ field: { value } }) => (
                                        <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="say something" defaultValue="" {...register("description", { required: true })} />)} />
                                <Controller
                                    control={control}
                                    render={({ field: { value } }) => (
                                        <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Image" defaultValue="" {...register("img")} />)} />
                                <Button variant="contained" style={{ backgroundColor: '#06d286' }} type="submit">Add Review</Button>
                            </form>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        );
    };

export default AddReviews;