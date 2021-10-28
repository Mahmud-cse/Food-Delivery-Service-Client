import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        // container
        <Container className="pt-5 mb-5">
        <Row>
                    <Col lg="3">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">company</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Monitoring Grader</Link></li>
                                <li><Link to="/" className="text-muted newValue">Job Opening</Link></li>
                                <li><Link to="/" className="text-muted newValue">Customers</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="3">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">support</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Get Started</Link></li>
                                <li><Link to="/" className="text-muted newValue">Blog</Link></li>
                                <li><Link to="/" className="text-muted newValue">Knowledge Base</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="3">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">Legal</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">Terms & Conditions</Link></li>
                                <li><Link to="/" className="text-muted newValue">Privacy Policy</Link></li>
                                <li><Link to="/" className="text-muted newValue">Customers</Link></li>
                                <li><Link to="/" className="text-muted newValue">Pricing</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="3">
                    <div className="mb-5">
                            <p className="text-uppercase text-dark mb-4">CONTACTS</p>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-muted newValue">97845 Baker st. 567
                                Los Angeles - US</Link></li>
                                <li><Link to="/" className="text-muted newValue">+94 423-23-221</Link></li>
                                <li><Link to="/" className="text-muted newValue">info@domain.com</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default Footer;