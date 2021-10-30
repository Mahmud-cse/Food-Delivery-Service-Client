import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllOrdersList from '../AllOrdersList/AllOrdersList';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <Row style={{ padding: 0, margin: 0 }}>
                {
                    orders.map(order => <AllOrdersList key={order._id} order={order} />)
                }
            </Row>
        </div>
    );
};

export default AllOrders;