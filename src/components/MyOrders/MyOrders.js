import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyOrderList from '../MyOrderList/MyOrderList';
import useAuth from '../hooks/useAuth';
import { Card, Col, Button } from 'react-bootstrap';

// import axios from 'axios';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [specificDetail, setSpecificDetail] = useState([]);

    useEffect(() => {
        fetch("https://pacific-stream-31901.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const matchedData = orders.filter(order => order.email == user.email);
            setSpecificDetail(matchedData);
        }
    }, [orders]);

    return (
        <div>
            <Row style={{ padding: 0, margin: 0 }}>
                {
                    specificDetail.map(data => <MyOrderList key={data._id} data={data} />)
                }
            </Row>
        </div>
    );
};

export default MyOrders;