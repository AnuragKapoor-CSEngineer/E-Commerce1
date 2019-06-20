import React, { Component } from 'react'
import {Row,Container,Col} from 'react-bootstrap';
export default class Medical extends Component {
    render() {
        return (
            <div style={{marginTop:"10rem"}}> 
               <Container>
                   <Row sm md lg>
                       <Col>
                       <h1>Medical</h1>
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}
