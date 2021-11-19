import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        COOL SUNGLASS
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"  ><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/booking" ><Button color="inherit">Explore</Button></Link>

                    {
                        user?.email ?
                            <Box >
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard" >
                                    <Button color="inherit">DashBoard</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/addServices" >
                                    <Button color="inherit">Add Products</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/addReviewes" >
                                    <Button color="inherit">Add Reviews</Button>
                                </NavLink>
                                {user.email}
                                <Button onClick={logOut} color="inherit">LogOut</Button>
                            </Box>


                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login" >
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/aboutUs" ><Button color="inherit">About Us</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/contactUs" ><Button color="inherit">Contact Us</Button></Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;