import { Button } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth();
    const {
        register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReviewes", {
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
            <h2>Add Review</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("Name")}
                        placeholder="Your Name"

                    />
                    <input {...register("Description")}
                        placeholder="Review"

                    />


                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddReview;