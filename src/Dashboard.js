import React, { Component } from "react";
import {Carousel} from  'react-bootstrap'
export default class Dashboard extends Component {
  render() {
    return (<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6301184/pexels-photo-6301184.jpeg"
          alt="mirror"
          width={600} height={600}/>
        <Carousel.Caption>
        <h3>Crital mirror</h3>
          <p>Want to stare at yourself more than you need to? buy a mirror</p>
          <p>Brand: uglydrip</p>
          <p>price: $10.99</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7439757/pexels-photo-7439757.jpeg"
          alt="Yep... A MF lamp"
          width={600} height={600}
        />
    
        <Carousel.Caption>
          <h3>Lamp boy 3000</h3>
          <p>A lamp capable of shining in the darkest of places</p>
          <p>Brand: kokoin</p>
          <p>price: $10.99</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/53422/ironing-iron-press-clothing-53422.jpeg"
          alt="Iron press"
          width={600} height={600}
        />
    
        <Carousel.Caption>
          <h3>ironing man: stay at home edition</h3>
          <p>Late for a wedding? wanna wear that shirt you haven't use in 3 years? just Iron it</p>
          <p>Brand: pepetu</p>
          <p>price: $15.99</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/9720924/pexels-photo-9720924.jpeg"
          alt="washer"
          width={600} height={600}
        />
    
        <Carousel.Caption>
        <h3>My boy dawasha</h3>
          <p>A commercial washing machine is intended for more frequent use than a consumer washing machine. Durability and functionality is more important than style</p>
          <p>Brand: Maytag</p>
          <p>price: $398.00</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1921673/pexels-photo-1921673.jpeg"
          alt="tea pot or something"
          width={600} height={600}
        />
    
        <Carousel.Caption>
        <h3> teapot</h3>
          <p>The best shape for effective convection during infusion is a spherical one, or any derivatives of it, such as pear, bell or bowl shape</p>
          <p>Brand:likely british </p>
          <p>price: $12.00</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1450907/pexels-photo-1450907.jpeg"
          alt="spinner thing"
          width={600} height={600}
        />
    
        <Carousel.Caption>
          <h3>Mixing</h3>
          <p  >Mixer operates and tends machines that mix materials or ingredients used for production processes or manually mix ingredients.</p>
          <p>Brand: Some'ing kul</p>
          <p>Price: $50.00</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg"
          alt="vacuum cleaner"
          width={600} height={600}
        />
    
        <Carousel.Caption>
        <h3>suki boi</h3>
          <p  > a device that causes suction in order to remove dirt from floors, upholstery, draperies, and other surfaces.</p>
          <p>Brand: black hole</p>
          <p>Price: $350.00</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>)}
}
