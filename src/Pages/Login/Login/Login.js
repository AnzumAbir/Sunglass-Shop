import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid items xs={12} md={6}>

                <Typography variant="h2" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>


                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic" label="Your Email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic" label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <NavLink to="/register">
                        <Button variant="text" sx={{ width: '50%', m: 1 }} >register New User</Button>
                    </NavLink>

                    <Button variant="contained" sx={{ width: '50%', m: 1 }} type="submit">LogIn</Button>
                    {user?.email && <Alert severity="success"> Successfully Logged!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </form>

            </Grid>

        </Container>
    );
};

export default Login;