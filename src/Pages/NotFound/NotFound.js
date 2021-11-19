import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page not Found</h1>
            <h2>ERROR 404</h2>
            <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
        </div>
    );
};

export default NotFound;