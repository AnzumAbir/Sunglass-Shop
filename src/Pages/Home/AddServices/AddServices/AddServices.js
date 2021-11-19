import { Button } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const AddServices = () => {

    const { user } = useAuth();
    const {
        register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'blue' }} to="/home"  ><Button color="inherit">Home</Button></Link>
            <h2>Admin Add Products</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("Name")}
                        placeholder="Name"

                    />
                    <input {...register("Description")}
                        placeholder="Description"

                    />
                    <input {...register("Image")}
                        placeholder="Image URL"

                    />
                    <input {...register("Price")}
                        placeholder="Price"
                        type="number"

                    />



                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddServices;