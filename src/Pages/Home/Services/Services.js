import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Service from '../Service/Service';


const services = [

    {
        name: 'VERSACE',
        description: 'Prescription Glasses starting at just 99€. Sold more than 120.000 glasses in 180 Countries. Protect your eyes from the harmful blue light. Say goodbye to headaches & dry eyes.',
        img: 'https://image.freepik.com/free-photo/eyeglasses-wear_1203-2604.jpg'
    },
    {
        name: 'RAY-BAN',
        description: 'Ray-Ban is a leader in sun and prescription eyewear for generations providing timeless style, authenticity and premium lenses and frame',
        img: 'https://image.freepik.com/free-photo/cool-sunglasses-isolated-white-background-top-view_1088-882.jpg'
    },
    {
        name: 'PRADA',
        description: 'Discover online the Fall Winter 2021 collection designed by Miuccia Prada and Raf Simons. Simplicity and complexity, elegance and practicality, limitation and release.',
        img: 'https://image.freepik.com/free-photo/closeup-shot-elegant-sunglasses-isolated-white_181624-28216.jpg'
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ m: 2 }}>
                    Our Brands
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, color: 'info.main', m: 2 }}>
                    OUR PREMIUM BRANDS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;