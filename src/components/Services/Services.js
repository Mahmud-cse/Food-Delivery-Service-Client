import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceList from '../ServiceList/ServiceList';

const Services = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://pacific-stream-31901.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    return (
        <div>
            <Row>
                {
                    item.map(value => <ServiceList key={value.id} value={value} />)
                }
            </Row>
        </div>
    );
};

export default Services;