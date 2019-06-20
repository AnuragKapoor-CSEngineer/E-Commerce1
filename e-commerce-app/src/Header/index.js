import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Modal, Form, Button, FormControl, Nav, ButtonToolbar } from 'react-bootstrap';
import logo from '../../public/assets/logo.jpg';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default class extends Component {
    constructor(...args) {
        super(...args);

        this.state = { modalShow: false };
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div style={{  }}>
                <Navbar bg="primary" variant="primary" fixed="top" expand="lg"  >
                
                            
                                <Navbar.Brand className="mr-auto">
                                    <img src={logo} width="60" height="40" className="d-inline-block align-top" alt="BiblosKart logo" />
                                </Navbar.Brand>
                            
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                            
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                       


                            <Nav className="ml-auto">
                            <Nav><Link to="/"><Button variant="primary" >Home</Button></Link></Nav>
                            <Nav><Link to="/cart"> <Button variant="primary" >Cart<Icon name='shop' /></Button></Link></Nav>
                            <Nav> <ButtonToolbar>
                            <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>Login</Button>
                                   <MyVerticallyCenteredModal
                                    show={this.state.modalShow}
                                    onHide={modalClose}
                                /></ButtonToolbar>
                                </Nav>
                           </Nav>
                            </Navbar.Collapse>
                    
            
                </Navbar>
            </div>



        )
    }
}
