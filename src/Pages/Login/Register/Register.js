import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;

        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Please type same pasword')
            return
        }

        registerUser(loginData.email, loginData.password);

        e.preventDefault();
    }


    return (
        <Container>
            <Grid items xs={12} md={6}>

                <Typography variant="h2" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleLoginSubmit}>


                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic" label="Your Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic" label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic" label="Type Password again"
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                        variant="standard" />

                    <NavLink to="/login">
                        <Button variant="text" sx={{ width: '50%', m: 1 }} >Already register?
                            <br /> Please Login</Button>
                    </NavLink>

                    <Button variant="contained" sx={{ width: '50%', m: 1 }} type="submit">Register</Button>

                </form>
                {user?.email && <Alert severity="success"> Successfully Registered. Please Login Now!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}

            </Grid>

        </Container>
    );
};

export default Register;