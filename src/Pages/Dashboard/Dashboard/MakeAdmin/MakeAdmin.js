import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdmin}>
                <TextField id="standard-basic" label="Email" type="email" variant="standard"
                    onBlur={handleOnBlur}
                />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;