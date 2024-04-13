import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class HomepageBanner extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="images/banner1.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/banner2.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/banner3.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default HomepageBanner;
