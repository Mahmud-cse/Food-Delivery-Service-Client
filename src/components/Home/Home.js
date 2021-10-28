import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col lg="6">
                        <div style={{color:"white",marginLeft:"50px",marginTop:"250px",fontWeight:"bold"}}>
                            <h1>Delivery or Takeaway Food</h1>
                            <p style={{fontSize:"16px"}}>The best restaurants at the best price</p>    
                        </div>

                        <div className="mt-3 custom0">
                            <Form className="d-flex">
                                <div className=" ">
                                <Form.Control className="rounded-pill custom1" type="text" placeholder="Address" />
                                </div>
                                <Button variant="danger" className="rounded-pill custom2">Search</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg="6">
                        {/* blank */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;