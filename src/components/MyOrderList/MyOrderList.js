import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyOrderList = (props) => {
    const { _id, strMeal, strPrice } = props.data;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure ?");

        if (confirm === true) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("deleted successfully")
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }

    }

    return (
        <Col md={4} className="mb-5 mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card data-aos="fade-up" className="border-0 rounded-3 cardStyle p-4" style={{ color: "white", backgroundColor: "gray" }}>
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Title className="text-center" style={{ float: "left" }}>
                        ${strPrice}
                    </Card.Title>
                </Card.Body>
                <div className="mb-3" style={{ marginLeft: "20px" }}>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </div>
            </Card>
        </Col>
    );
};

export default MyOrderList;