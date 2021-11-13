import { Typography,Container, Grid,Box,Button } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useForm } from "react-hook-form";

const AllOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [orders, setOrders] = useState([]);
    // const [status, setStatus] = useState("");
    const { register, handleSubmit } = useForm();

    // status****
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [orderId])
    

    const handledelete = order => {
        const url = `http://localhost:5000/orders/${order}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Are You Sure deleted This????')
            const remaining=orders.filter(order=>order._id !==order)
            setOrders(remaining)
            window.location.reload();
        }
    })

    }
    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '800', color: '#9907ed', paddingBottom: '50px' }} component="div">
                Manage All Order
</Typography>
            {
                orders.map(order =>
                    <Box sx={{ flexGrow: 1 }} key={order._id}
                >
                        <Grid container style={{marginBottom:'30px'}}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid  xs={2} sm={4} md={3} >
                            <img src={order.order.img} style={{width:'70%',borderRadius:'5%',margin:'20px'}}  alt="" />
                            </Grid>
                            <Grid xs={2} sm={4} md={3} >
                                <Typography variant="h5" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '20px', marginTop: '10px' }} component="div">
                                {order.order.name}
                                </Typography>
                                <Typography variant="h6">Price: $ {order.order.price} </Typography>
                                <Typography variant="body2" style={{color:'#e64088'}}>Ordered By :{order.name} </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={3} >
                            <Button variant="contained" style={{marginRight:'10px',marginTop:'20px'}}>Update</Button>
                                
                                <Button variant="contained" style={{backgroundColor:'#e64088',marginTop:'20px'}} onClick={()=>handledelete(order._id)}>Delete</Button>
                            </Grid>
                            <Grid xs={2} sm={4} md={3} style={{ marginTop:'20px'}} >
                                <form   onSubmit={handleSubmit(onSubmit)}>
                                    <select style={{ height: '35px',padding:'6px'}}
                                onClick={() => handleOrderId(order._id)}
                                {...register("status")}
                                >
                                        <option value={order.status}>{order.status}</option>
                                    <option value="approved">Approved</option>
                                    <option value="ongoing">On Going</option>
                                    <option value="done">Done</option>
                                    </select>
                                    <Button type="submit" variant="contained" style={{marginRight:'10px',backgroundColor:'salmon',marginLeft:'5px'}}>Confirm</Button>
                                </form>
                            </Grid>
                   </Grid>
                </Box>)
            }
            </Container>
    );
};

export default AllOrder;