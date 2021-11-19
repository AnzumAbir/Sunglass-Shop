import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Product = ({ product }) => {
    const { Name, Description, Image, Price } = product;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={Image}
                        alt="green iguana"
                    />
                    <CardContent>

                        <Typography variant="h5" component="div">
                            {Name}
                        </Typography>

                        <Typography variant="body2">
                            {Description}
                        </Typography>
                        <Typography variant="h6">
                            Price:${Price}
                        </Typography>
                    </CardContent>
                    <Button onClick={handleOpen} variant="contained">Order Now</Button>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to="/addReviewes" >
                        <Button color="inherit">Add Reviews</Button>
                    </NavLink>
                </Card>

            </Grid>
            <BookingModal
                product={product}
                open={open}
                handleClose={handleClose}
            >

            </BookingModal>

        </>
    );
};

export default Product;