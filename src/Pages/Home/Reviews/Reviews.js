import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Home/Review/Review';

const Reviews = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allReviewes")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ m: 2 }}>
                    Reviews
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, color: 'info.main', m: 2 }}>
                    Product and Service reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Review key={service.name}
                        service={service}></Review>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;