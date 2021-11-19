import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(https://image.freepik.com/free-photo/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-near-blue-wall-sunglasses-positive-models_158538-7651.jpg)`,
    backgroundColor: 'rgba(45,58,74,0.85)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 120,

}

const Appointment = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box style={{ m: 5 }}>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'blue' }}>
                            Fasion Query
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Ask Our Stylist
                        </Typography>
                        <Typography variant="h6" style={{ color: 'red', fontSize: 14 }}>

                        </Typography>
                        <Button sx={{ mt: 5 }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Appointment;