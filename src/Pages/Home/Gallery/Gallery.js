import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography ,Container} from '@mui/material';

const Gallery = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',m:2,pt:2}} component="div">
          Our Gallery
        </Typography>
          <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed',py:1}} component="div">
          Captured Moments From Customers
        </Typography>
        <Box sx={{ width: '75%',display:'block',margin:'auto' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
            </Box>
        </Container>
            
    );
  }
  
  const itemData = [
    {
      img: 'https://media.istockphoto.com/photos/woman-and-her-scooter-picture-id1336706103?k=20&m=1336706103&s=612x612&w=0&h=ZCLPjnblcMQ3902FEsdIksJnpfnyiUpPU1a3niSvrOY=',
      title: 'Bed',
    },
    {
      img: 'https://media.istockphoto.com/photos/senior-couple-on-scooter-picture-id108316571?b=1&k=20&m=108316571&s=170667a&w=0&h=N-QmklKAK7ep8ORGB5xI6LcwmQOXBIgqXi0cnhQz5ms=',
      title: 'Books',
    },
    {
      img: 'https://media.istockphoto.com/photos/portrait-of-couple-sitting-on-moped-with-backpack-picture-id647438956?k=20&m=647438956&s=612x612&w=0&h=RSVqAZ0Yirkyce89D7oEzmozgr5OQ0whdthYIt-ZWZs=',
      title: 'Sink',
    },
    {
      img: 'https://media.istockphoto.com/photos/brunette-girl-with-scooter-picture-id187253497?k=20&m=187253497&s=612x612&w=0&h=wkaSWDzUqpKGtqMuyq-OrR44HQqQzdGjt6k0589U6RQ=',
      title: 'Kitchen',
    },
    {
      img: 'https://templatekit.jegtheme.com/scootie/wp-content/uploads/sites/173/2021/09/couple-sitting-on-yellow-scooter.jpg',
      title: 'Blinds',
    },
    {
      img: 'https://media.istockphoto.com/photos/senior-woman-on-motor-scooter-picture-id174957637?k=20&m=174957637&s=612x612&w=0&h=-VKOJk6S5Ymsn2DoldPx8xZCKhvh15Y8_PY5YDJPd-c=',
      title: 'Chairs',
    },
    {
      img: 'https://media.istockphoto.com/photos/just-hold-on-were-going-home-picture-id503203309?k=20&m=503203309&s=612x612&w=0&h=obMtFKvD2xzqs1MUhDtvSSt_OKiD955C6AZ00YENgAM=',
      title: 'Laptop',
    },
    {
      img: 'https://media.istockphoto.com/photos/beautiful-couple-in-love-enjoying-and-having-fun-on-scooter-picture-id624002766?k=20&m=624002766&s=612x612&w=0&h=H5XVq_tNbvwF2KeltOSgzsfafOQiaaQF_d-hiRNIino=',
      title: 'Doors',
    },
    {
      img: 'https://media.istockphoto.com/photos/happy-european-couple-flirting-on-scooter-picture-id483005184?k=20&m=483005184&s=612x612&w=0&h=BQJw2kx4EVxuO_UeA1PA309EykXE8FByPw9dSyX6juU=',
      title: 'Coffee',
    },
    {
      img: 'https://media.istockphoto.com/photos/smiling-woman-on-motor-scooter-stopping-on-the-side-of-the-road-picture-id1003127546?k=20&m=1003127546&s=612x612&w=0&h=01oA5eWH49L0tLpxHIC-fD49VOGaJs7rthD7qr_c9z8=',
      title: 'Storage',
    },
    {
      img: 'https://media.istockphoto.com/photos/beautiful-elderly-senior-woman-on-retro-motorbike-or-moped-speaking-picture-id1163894903?k=20&m=1163894903&s=612x612&w=0&h=s8GUx4hUcA6zwYmfBANsxh6drfV05FahJUbQYylktV4=',
      title: 'Candle',
    },
    {
      img: 'https://media.istockphoto.com/photos/outdoor-image-of-smart-young-man-driving-on-his-scooter-dressed-in-picture-id1207488514?k=20&m=1207488514&s=612x612&w=0&h=1hy8G-_LcbPADvpgjHYeVl10WI_yYh3C3UQT06JTeZ0=',
      title: 'Coffee table',
    },
    {
      img: 'https://media.istockphoto.com/photos/safety-first-picture-id1307962536?k=20&m=1307962536&s=612x612&w=0&h=0bxeK417xAwpLMwTCvg532yIMPCdw3c_neYhBu6LK3s=',
      title: 'Coffee table',
    }
  ];

export default Gallery;