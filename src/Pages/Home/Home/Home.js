import React from 'react';
import AboutUs from '../../AboutUS/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';

import HomeFooter from '../../Shared/Navigation/HomeFooter';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointment from '../Appoinment/Appointment';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Services></Services>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <HomeFooter></HomeFooter>


        </div>
    );
};

export default Home;