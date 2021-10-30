import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddanItem = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch('https://pacific-stream-31901.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                    history.push('/home');
                }
            })
    };

    return (
        <div className="mt-5 mb-5">
            <Container className="d-flex align-items-center justify-content-center">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Food Name" defaultValue="" {...register("strMeal", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Category" defaultValue="" {...register("strCategory", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Food Found Area" defaultValue="" {...register("strArea", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Price" defaultValue="" {...register("strPrice", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Instructions" defaultValue="Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them." {...register("strInstructions")} style={{ width: "130%" }} />
                    <input placeholder="Image Link" defaultValue="" {...register("strMealThumb", { required: true })} style={{ width: "130%" }} />

                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddanItem;