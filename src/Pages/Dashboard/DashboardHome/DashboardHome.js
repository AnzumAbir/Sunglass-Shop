import * as React from 'react';
import Footer from '../../Shared/Navigation/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


import Bookings from '../Dashboard/Bookings/Bookings';



const DashboardHome = () => {
    return (
        <div>
            <Navigation> </Navigation>
            <Bookings></Bookings>
            <Footer></Footer>
        </div>
    );
};

export default DashboardHome;