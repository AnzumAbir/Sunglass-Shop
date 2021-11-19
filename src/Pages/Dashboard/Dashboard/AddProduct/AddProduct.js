
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <div>
            <div>
                <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
                <h3>Add Product</h3>
            </div>

        </div>
    );
};

export default AddProduct;