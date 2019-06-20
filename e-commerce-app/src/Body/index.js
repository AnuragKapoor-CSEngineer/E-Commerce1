import React, { Component } from 'react'
import Carousels from '../Carousels/index';
import Cards from '../Cards/index'
import { Row, Col, Container } from 'react-bootstrap';
export default class Body extends Component {
    render() {
        return (
            <div style={{backgroundColor:"grey",marginTop:"5rem"}} >
                <Container >
                    <Row >
                        <Col>
                            <Carousels></Carousels>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Cards ></Cards>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
