import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllOrdersList = (props) => {
    const { _id, strMeal, strPrice, status } = props.order;
    const [orders, setOrders] = useState([]);
    const value = "approved ";


    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure ?");

        if (confirm === true) {
            const url = `https://pacific-stream-31901.herokuapp.com/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("deleted successfully")
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        window.location.reload();
                    }

                })
        }

    }

    const handleUpdate = (id) => {
        const url = `https://pacific-stream-31901.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    window.location.reload();
                }
            })
    }

    return (
        <Col md={4} className="mb-5 mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card data-aos="fade-up" className="border-0 rounded-3 cardStyle p-4" style={{ color: "white", backgroundColor: "gray", width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Title className="text-center" style={{ float: "left" }}>
                        ${strPrice}
                    </Card.Title>
                </Card.Body>
                <Card.Text style={{ marginLeft: "17px" }}><b>Status</b>: {status}</Card.Text>
                <div className="mb-3">
                    <Button style={{ marginLeft: "18px" }} onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                    <Button style={{ marginLeft: "18px" }} onClick={() => handleUpdate(_id)} variant="success">Update</Button>
                </div>
            </Card>
        </Col>
    );
};

export default AllOrdersList;