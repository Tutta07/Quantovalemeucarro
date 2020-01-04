import React,{Component} from 'react';
import genesis from './imagenes/genesis.jpg';
import chevrolet from './imagenes/chevrolet.jpg';
import chrysler from './imagenes/chrysler.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './css/Slider.css';

class Slider extends Component {
  render(){
    return(
      <Carousel>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-2 mt-2 w-50 h-25 d-flex justify-content-center rounded fluid "
      src={genesis}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Genesis</h5>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-2 mt-2 w-50 h-25 d-flex justify-content-center rounded fluid"
      src={chevrolet}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h5>Chevrolet</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-2 mt-2 w-50 h-25 d-flex justify-content-center rounded fluid "
      src={chrysler}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h5>Chrysler</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    );
  }

}





export default Slider;
