import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAboutContext,getOurShopContext,getMissionContext } from "../actions/index";

export class AboutBanner2 extends Component {
    
    static propTypes = {
        getAboutContext: PropTypes.func.isRequired,
        getMissionContext: PropTypes.func.isRequired,
        getOurShopContext: PropTypes.func.isRequired,
        ourshop: PropTypes.array.isRequired,
        mission_context: PropTypes.array.isRequired,
        about_context:PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getAboutContext();
        this.props.getMissionContext();
        this.props.getOurShopContext();
    }

    render() {
        const {about_context,mission_context,ourshop} = this.props
        return (
            <div className="section-wrapper section-ptb">
                <div className="container">
                    <Row>
                        <Col lg={5}>
                            <img src={require(`../assets/images/about-us.jpg`)} className="img-fluid" />
                        </Col>
                        <Col lg={7} className="mt-4 mt-lg-0">
                            <div className="section-title mb-3">
                                <h2 className="font-bold">Daha ətraflı</h2>
                            </div>
                            <p></p>
                            <Row className="mt-4 pt-4 mt-sm-5 pt-sm-5 border-top no-gutters">
                                <Col sm={6} className="pr-2">
                                    <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-sm ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title">
                                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                                            <div className="ciyashop_info_box-icon">
                                                <div className="ciyashop_info_box-icon-wrap">
                                                    <div className="ciyashop_info_box-icon-outer">
                                                        <div className="ciyashop_info_box-icon-inner" style={{ borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid' }}>
                                                            <i className="fa fa-archive" style={{ color: '#dbdbdb' }} /> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ciyashop_info_box-content">
                                                <div className="ciyashop_info_box-content-wrap">
                                                    <div className="ciyashop_info_box-content-inner">
                                                        <h5 className="ciyashop_info_box-title" style={{ color: '#323232' }}>
                                                            Mağazamız </h5>
                                                        <div className="ciyashop_info_box-description">
                                                            {ourshop.map((shop, index) => {
                                                                return (
                                                                    <p key={index}> {shop.ourshop_context} </p>

                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} >
                                    <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-border ciyashop_info_box-icon-size-sm ciyashop_info_box-icon-shape-round ciyashop_info_box-icon_position-left info_box-step_position-above_title mt-4 mt-sm-0">
                                        <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
                                            <div className="ciyashop_info_box-icon">
                                                <div className="ciyashop_info_box-icon-wrap">
                                                    <div className="ciyashop_info_box-icon-outer">
                                                        <div className="ciyashop_info_box-icon-inner" style={{ borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid' }}>
                                                            <i className="fa fa-align-center" style={{ color: '#dbdbdb' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ciyashop_info_box-content">
                                                <div className="ciyashop_info_box-content-wrap">
                                                    <div className="ciyashop_info_box-content-inner">
                                                        <h5 className="ciyashop_info_box-title" style={{ color: '#323232' }}>
                                                            Missiyamız </h5>
                                                        <div className="ciyashop_info_box-description">
                                                            {mission_context.map((context, index) => {
                                                                return (
                                                                    <p key={ index}> {context.mission_context} </p>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    about_context:state.user.about_context,
    mission_context: state.user.mission_context,
    ourshop:state.user.ourshop
})


export default connect(mapStateToProps,{getAboutContext,getMissionContext,getOurShopContext})(AboutBanner2)
// export default AboutBanner2
