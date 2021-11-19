import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div>
            <h1>Payment is coming</h1>
            <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
        </div>
    );
};

export default Pay;