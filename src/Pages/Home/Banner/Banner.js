import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(https://image.freepik.com/free-photo/sunglasses-sand_1169-59.jpg?1)`,

}

const verticalCenter = {
    display: 'flex',
    allignItems: 'center',

    height: '500'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ mt: 5, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ textAllign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Welcome To <br />
                            <span style={{ color: 'blue', }} >COOL SUNGLASS</span>
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 14, color: 'black' }}>
                            COOL Sunglass - Buy Stylish goggles and sunglasses frames for online shopping in World. Choose from wide range of shades and goggles in various designs.
                            <br />
                            An Exceptional Finishing Touch To Your Outfit. Explore The Latest Sunglasses. Shop Online And Get Free Delivery On Orders Over 100 €. Express Delivery Available. Secure payment.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/booking" ><Button color="inherit">Explore Products</Button></Link>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '500px' }} src={`https://image.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg`} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;