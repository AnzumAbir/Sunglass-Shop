import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ m: 2 }}>
                    OUR PRODUCTS
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, color: 'info.main', m: 2 }}>
                    POPULAR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.slice(3).map(service => <HomeService key={service.name}
                        service={service}></HomeService>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeServices;