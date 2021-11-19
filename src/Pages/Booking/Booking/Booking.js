import React from 'react';
import Footer from '../../Shared/Navigation/Footer';

import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
const Booking = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Products></Products>

            <Footer></Footer>
        </div>
    );
};

export default Booking;