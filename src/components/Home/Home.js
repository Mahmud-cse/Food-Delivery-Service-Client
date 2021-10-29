import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import './Home.css';
import img from '../img/pic-1.png';
import img2 from '../img/Beef.png';

const Home = () => {
    return (
        <>
        {/* banner */}
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

        {/* section1 */}
        <div className="m-5">
        <section className="section">
              {/* container */}
                <div className="container">
                    <Row className="align-items-center d-flex justify-content-between">
                        <Col lg="6" style={{}}>
                            <div className="f-14">
                                <img src={img} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                        <Col lg="5">
                            <div>
                                <h4 className="font-weight-normal text-dark mb-3 mt-4">Order Food</h4>
                                <p className="text-muted">With one of our online services, you can improve your skills in the kitchen and learn about some of the principles behind why cooking is important.</p>
                                <p className="text-muted">A series of courses designed to help you specialise your skills. Start a free seven-day trial, subscribe to keep learning at your own pace, and cancel your subscription whenever you like.</p>
                                <p className="mb-0 text-uppercase"><Link  to="/" className="text-primary f-13">learn more <span className="right-arrow ml-1">&#x21FE;</span></Link></p>
                            </div>
                        </Col>
                    </Row>
                </div>
        </section>
        </div>

        {/* card */}
        <div className="m-5">
            <Container>
                <h2 style={{textAlign:"center"}}>Our Services</h2>
                <Services></Services>
            </Container>
        </div>

        {/* section2 */}
        <div className="m-5">
            <section className="section">
                  {/* container */}
                    <div className="container">
                        <Row className="align-items-center d-flex justify-content-between">
                            <Col lg="5">
                                <div>
                                    <h4 className="font-weight-normal text-dark mb-3 mt-4">About Us</h4>
                                    <p className="text-muted">With one of our online services, you can improve your skills in the kitchen and learn about some of the principles behind why cooking is important.</p>
                                    <p className="text-muted">A series of courses designed to help you specialise your skills. Start a free seven-day trial, subscribe to keep learning at your own pace, and cancel your subscription whenever you like.</p>
                                    <p className="mb-0 text-uppercase"><Link  to="/" className="text-primary f-13">learn more <span className="right-arrow ml-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>
                            <Col lg="6" style={{}}>
                                <div className="f-14">
                                    <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
            </section>
        </div>
        </>
    );
};

export default Home;