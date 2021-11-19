import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (

        <div>
            <h2>About Us</h2>
            <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
            <div>

                <img src={'https://image.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-summer-concept_231208-7978.jpg'} alt="" />

            </div>

            <div>
                <p>
                    COOL Sunglass is an international retailer of sunglasses and sunglass accessories founded in Miami, Florida, United States, in 1971. Sunglass Hut is part of the Italian-based Luxottica Group, the world’s largest eyewear company.

                    As of December 31, 2008, the Luxottica Group operated 2,286 stores around the world, most of those as part of the Sunglass Hut brand.
                </p>
            </div>

        </div>
    );
};

export default AboutUs;