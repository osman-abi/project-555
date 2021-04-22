import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShopAddress } from "../actions/index";
import { Col,Row,Container } from "reactstrap";

export class ContactDetail extends Component {

  static propTypes = {
    getShopAddress: PropTypes.func.isRequired,
    shop_address:PropTypes.array.isRequired
  }
  
  componentDidMount() {
    this.props.getShopAddress()
  }

  render() {
    const {shop_address} = this.props
    return (
      
      <Container>
        
      <Row>
        <Col sm={12} className="col-sm-12">
          <div className="section-title text-center mb-2">
            <h2 className="title">Bizimlə əlaqə</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4} >
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-map-marker" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                    <h6 className="ciyashop_info_box_2-title inline_hover">Ünvan : </h6>
                      <div className="ciyashop_info_box_2-content">
                        {shop_address.map((shop, index) => {
                          return (<p key={index}> {shop.address} </p>
                          )
                        })}
                      {/* <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} >
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-phone" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                    <h6 className="ciyashop_info_box_2-title inline_hover">
                      Əlaqə nömrəsi : </h6>
                        {shop_address.map((shop, index) => {
                          return (
                            <div key={index} className="ciyashop_info_box_2-content">
                            
                              <p>{shop.phone_number_1}</p> <br />
                              <p>{shop.phone_number_2}</p> <br />
                              <p>{shop.phone_number_3}</p> <br />
                              <p>{shop.phone_number_4}</p> <br />
                              <p>{shop.phone_number_5}</p> <br />
                              <p>{shop.phone_number_6}</p> <br/>
                              
                      {/* <p>126-632-2345<br />
                        857-778-1265</p> */}
                    </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left pb-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-envelope-o" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                      <h6 className="ciyashop_info_box_2-title inline_hover">Mail : </h6>
                      {shop_address.map((shop, index) => {
                        return (<div key={index} className="ciyashop_info_box_2-content">
                            <p>{shop.email_1}</p> <br />
                              <p>{shop.email_2}</p> <br />
                              <p>{shop.email_3}</p> <br />
                              <p>{shop.email_4}</p> <br />
                              <p>{shop.email_5}</p> <br />
                              <p>{shop.email_6}</p> <br/>
                    
                    </div>
                          
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    )
  }
}

const mapStateToProps = state => ({
    shop_address:state.user.shop_address
})

export default connect(mapStateToProps,{getShopAddress})(ContactDetail)
