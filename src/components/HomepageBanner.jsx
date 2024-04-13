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
          <p className="legend">Great Deals</p>
        </div>
        <div>
          <img src="images/banner2.png" />
          <p className="legend">Best food</p>
        </div>
        <div>
          <img src="images/banner3.png" />
          <p className="legend">Shop now</p>
        </div>
      </Carousel>
    );
  }
}

export default HomepageBanner;
