import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() =>
        fetch("https://pacific-stream-31901.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setDetails(data)), []);

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail._id == id);
            setSpecificDetail(matchedData);
        }
    }, [details]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        fetch('https://pacific-stream-31901.herokuapp.com/addOrder', {
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
                    // reset();
                }
            })
    };

    return (
        <div className="m-5" >
            <Container >
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg="6">
                        <img src={specificDetail?.strMealThumb} alt="" style={{ height: "200px" }} />
                        <h2>{specificDetail?.strMeal}</h2>
                        <h4>${specificDetail?.strPrice}</h4>
                        <p>{specificDetail?.strInstructions}</p>
                    </Col>
                    <Col lg="6">
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input defaultValue="pending" {...register("status")} />
                            <input placeholder="Enter exact food name please" defaultValue="" {...register("strMeal", { validate: value => value === specificDetail?.strMeal })} />
                            <input placeholder="Input original food price without dollar sign" defaultValue="" {...register("strPrice", { validate: value => value === specificDetail?.strPrice })} />
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;