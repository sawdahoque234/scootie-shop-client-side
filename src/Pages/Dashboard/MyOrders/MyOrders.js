import useAuth from "../../../hooks/useAuth";
import { Typography,Container, Grid,Box,Button } from '@mui/material';
import React,{useEffect,useState} from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user} = useAuth();
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [user.email])
  
    const handledelete = order => {
        const url = `http://localhost:5000/orders/${order}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Are You Sure Deleted This Product???')
            const remaining=orders.filter(order=>order._id !==order)
            setOrders(remaining)
            window.location.reload();
        }
    })

}
    return (
        <Container>
        <Typography variant="h4" sx={{ fontWeight: '800', color: '#9907ed', paddingBottom: '50px' }} component="div">
            My Order
</Typography>
        {
            orders.map(order =>
                <Box sx={{ flexGrow: 1 }} key={order._id}
            >
                    <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid  xs={2} sm={4} md={4} >
                        <img src={order.order.img} style={{height:'100px',borderRadius:'10%',margin:'20px'}}  alt="" />
                        </Grid>
                        <Grid xs={2} sm={4} md={4} >
                            <Typography variant="h5" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '20px', marginTop: '10px' }} component="div">
                            {order.order.name}
                            </Typography>
                            <Typography variant="h6">Price: $ {order.order.price} </Typography>
                            <Typography variant="body2" style={{color:'#e64088'}}>Ordered By :{order.name} </Typography>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} >
                        <Button variant="contained" style={{marginRight:'10px'}}>Pending</Button>
                        <Button variant="contained" style={{backgroundColor:'#e64088'}} onClick={()=>handledelete(order._id)}>Delete</Button>
                        </Grid>
               </Grid>
            </Box>)
        }
        </Container>
    );
};

export default MyOrders;