/**
 * Home Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { getSlideImage } from "../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
   slidesToScroll: 1
  };

class HomSlider extends Component {

    
    static propTypes = {
        slider: PropTypes.array.isRequired,
        getSlideImage:PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getSlideImage()
    }

    render() {
       const {slider} =this.props
    return (
         <Slider className="slider-01 slider-simple-arrow" {...settings}>
            {slider.map((photo, index) => {
                return (
               <div key={index} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                                <img style={{width:'100%',height:"200px"}} src={photo.image}/>
                    </div>
                    
                    </div>
               </div>
                    
                )
            })}

                {/* <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/img-02.jpg`)} alt="slide-1" />
                    </div>
                    </div>
                </div> */}
        </Slider>
      )
   }
}

const mapStateToProps = state => ({
    slider:state.user.slider
})
export default connect(mapStateToProps,{getSlideImage})(HomSlider);
