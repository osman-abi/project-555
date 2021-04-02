/**
 * Home Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
   slidesToScroll: 1
  };

class HomSlider extends Component {

   render() {
    return (
        <Slider className="slider-01 slider-simple-arrow" {...settings}>
               <div key={1} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        {/* <img src={require(`../assets/images/home-01-slider/img-01.jpg`)} alt="slide-1" /> */}
                    </div>
                    
                    </div>
               </div>

                <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        {/* <img src={require(`../assets/images/home-01-slider/img-02.jpg`)} alt="slide-1" /> */}
                    </div>
                    </div>
                </div>
        </Slider>
      )
   }
}

export default HomSlider;
