import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import book1 from '../../public/assets/book1.jpg';
import book2 from '../../public/assets/book2.jpg';
import book3 from '../../public/assets/book3.jpg'
export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={book1}  height="400"
      alt="First slide"
    />
    <Carousel.Caption>
      <div style={{color:"black"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={book2}  height="400"
      alt="Third slide"
    />

    <Carousel.Caption>
<div style={{color:"black"}}>
<h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={book3}  height="400"
      alt="Third slide"
    />

    <Carousel.Caption>
     <div style={{color:"black"}}>
     <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
