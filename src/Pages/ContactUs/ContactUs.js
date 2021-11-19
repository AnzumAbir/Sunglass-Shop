import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <div>
                <h2>Contact us</h2>
                <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
            </div>
            <div>

                <img src={'https://image.freepik.com/free-photo/handsome-businessman-wearing-fashion-eyeglasses-stylish-suit-sitting-sofa-modern-studio_496169-1399.jpg'} alt="" />
            </div>
            <div>

            </div>
            <TextField id="standard-basic" label="Name" variant="standard" />
            <br />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br />

            <TextField id="standard-basic" label="comment" variant="standard" />


            <div>
                <br />
                <div>
                    <Button type="submit" variant="contained">Send</Button>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;