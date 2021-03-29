/**
 * Default Home Page
 */
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import AboutBanner from '../../widgets/AboutBanner.js';
import DealOfTheWeek from '../../widgets/DealOfTheWeek.js';
import EndOfSeason from '../../widgets/EndOfSeason.js';
// import HomeBanner from '../../widgets/HomeBanner.js';
import HomeSlider from '../../widgets/HomSlider.js';
import Instagram from '../../widgets/Instafeed.js';
import OurLatestPost from '../../widgets/OurLatestPost.js';
import Subscribe from '../../widgets/Subscribe.js';
import TopSellingProduct from '../../widgets/TopSellingProduct.js';


const latestblogslider = {
   dots: false,
   infinite: true,
   arrows: true,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
};

class HomePage extends Component {
   componentDidMount() {
      window.scrollTo(0, 0)
    }
   render() {
    return (
         <div>
            <HomeSlider />
            <div id="content" className="site-content" tabIndex={-1}>
            <div className="content-wrapper content-wrapper-vc-enabled">
               <div id="primary" className="content-area">
                  <main id="main" className="site-main">
                     <article id="post-13069" className="post-13069 page type-page status-publish hentry">
                        <div className="entry-content">
                           <Container>
                                    <Row className="mb-0 mb-sm-3 mt-5 mb-lg-5">
                                       <Col sm={12}>
                                          <Row mb={3} className="justify-content-center">
                                          <Col sm={10} lg={6} className="text-center">
                                             <div className="section-title">
                                                <h2 className="title"> Ən son məhsullar</h2>
                                                {/* <p>Forget about struggling to do everything at once: taking care of the family, Running your business etc.</p> */}
                                             </div>
                                           </Col>
                                          </Row>
                                          <TopSellingProduct />
                                       </Col>
                                    </Row>
                              </Container>
                              <div className="container section-3">
                                 <AboutBanner />
                              </div>
                              <Container>
                                    <div className="row section-ptb" style={{marginTop:"-80px"}}>
                                       <Col sm={12}>
                                          <div className="row text-center">
                                             <div className="col-sm-12 offset-lg-2 col-lg-8 offset-md-1 col-md-9">
                                                <div className="section-title">
                                                   <h2 className="title"> Ən çox satılan məhsullar</h2>
                                                </div>
                                             </div>
                                          </div>
                                          <Row>
                                             <Col>
                                                <TopSellingProduct />
                                             </Col>
                                           </Row>
                                       </Col>
                                    </div>
                                 </Container>
                                 <div class="content-wrapper overflow-hidden">
                                    <div class="container-fluid p-0">
                                          <div class="row">
                                             <div class="col-sm-12">
                                                <div class="instafeed insta-feeds">
                                                         <Instagram />
                                                </div>
                                             </div>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                       </article>
                     </main>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default HomePage;
