import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceList = (props) => {
    const {idMeal,strMeal,strInstructions,strMealThumb,strPrice}=props.value;

    return (
            <Col md={4} className="mb-5 mt-5">
                <Card data-aos="fade-up" className="border-0 rounded-3 cardStyle">
                        <Card.Img className="mt-3" variant="top" src={strMealThumb} style={{width:"50%",height:"50%",margin:"auto"}}/>
                        <Card.Body>
                          <Card.Title>{strMeal}</Card.Title>
                          <Card.Text className="text-muted">
                            {strInstructions}
                          </Card.Text>
                          <Card.Title className="text-center">
                              {strPrice}
                          </Card.Title>
                        </Card.Body>
                        <div className="mx-auto mb-3">
                          <Link to={`/serviceDetails/${idMeal}`}>
                            <Button variant="outline-primary">Order</Button>
                          </Link>
                        </div>
                </Card>
            </Col>
    );
};

export default ServiceList;