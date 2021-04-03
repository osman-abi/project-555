/**
 *  Footer Main
 */
import React from 'react';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getLogo,getShopAddress } from '../../actions/index'

class Footer extends React.Component {

    constructor(props)
    {
        super(props);
    }

    static propTypes = {
        shop_address: PropTypes.array.isRequired,
        getShopAddress:PropTypes.func.isRequired,
        logos: PropTypes.array.isRequired,
        getLogo: PropTypes.func.isRequired
    }


    componentDidMount()
    {
        window.addEventListener('scroll', this.Checkscroll);
        this.props.getLogo();
        this.props.getShopAddress()
    }
    componentWillUnmount()
    {
        window.removeEventListener('scroll',this.Checkscroll);
    }

    Checkscroll()
    {

        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

        if(scrollTop > 350)
        {
            if(document.getElementById("back-to-top") != null)
            {
                document.getElementById("back-to-top").setAttribute("style","display:block");
            }
        }
        else
        {

            if(document.getElementById("back-to-top") != null)
            {
                document.getElementById("back-to-top").setAttribute("style","display:none");
            }
        }

    }
    ClicktoTop()
    {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
    render() {
        const {logos,shop_address} = this.props
        let backtotop = {display : 'none'}
        return (
        <div>
                <footer className="site-footer">
                <div className="footer-wrapper">
                    <div className="footer-widgets-wrapper" style={{marginBottom:"-20px"}}>
                    <div className="footer">
                        <Container>
                        <Row>
                            <div className="col-lg-3 col-md-6 footer-align-left">
                            <div className="logo-wrapper widget">
                                <p><Link to="#">
                                    {logos.map((logo, index) => {
                                                        return(
                                                        <img key={index} className="img-fluid" src={`http://127.0.0.1:8000${logo.logo_image}`} alt="logo" />
                                                        )
                                                    })}
                                </Link></p>
                            </div>
                            <div className="text-content">
                                <p className="mb-3 mt-4">Khanbuta is an enchanting and easy to use e-Commerce WP theme that allows you to sell your products in a dynamic way.</p>
                                <p className="mb-4">The theme is packed with everything you need to create a new website.</p>
                            </div>
                            <div className="pgs-social-profiles mt-4">
                                <div className="social-profiles-wrapper">
                                <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                                    <div className="social-profiles">
                                    <ul>
                                        <li><a href="https://www.facebook.com" title="Facebook" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="https://twitter.com" title="Twitter" target="_blank"><i className="fa fa-whatsapp" /></a></li>
                                        <li><a href="https://google.com/" title="Google" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4  col-md-6 footer-align-left">
                            <div className="footer-nav-menu widget">
                                <h4 className="footer-title title">Faydalı linklər</h4>
                                <div className="menu-useful-links-container">
                                <ul className="menu">
                                    <li className="menu-item active"><Link to="/">Ana səhifə</Link></li>
                                    <li className="menu-item"><Link to="/haqqimizda">Haqqımızda</Link></li>
                                    <li className="menu-item"><Link to="/magaza">Mağaza</Link></li>
                                    <li className="menu-item"><Link to="/elaqe">Əlaqə</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 footer-align-left">
                            <div className="footer-nav-menu widget mt-4 mt-lg-0">
                                <h4 className="footer-title title">Information</h4>
                                <div className="menu-useful-links-container">
                                <ul className="menu">
                                    <li className="menu-item active"><Link to="#">Look Book</Link></li>
                                    <li className="menu-item"><Link to="#">Information</Link></li>
                                    <li className="menu-item"><Link to="#">Instagram Wall</Link></li>
                                    <li className="menu-item"><Link to="#">Typography</Link></li>
                                    <li className="menu-item"><Link to="#">Parallax Presentation</Link></li>
                                    <li className="menu-item"><Link to="#">Modern Process</Link></li>
                                    <li className="menu-item"><Link to="#">Warranty and Services</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div> */}
                            <div className="col-lg-4 col-md-6 footer-align-left">
                            <div className="pgs-contact-widget widget mt-4 mt-lg-0">
                                <h4 className="footer-title title">Ünvan</h4>
                                <div className="footer-address">
                                                    {shop_address.map((shop, index) => {
                                                        return(
                                                        <ul key={ index}>
                                    
                                                            <li><i className="fa fa-map-marker" /><span>{ shop.address}</span></li>
                                                            <li className="pgs-contact-email"><i className="fa fa-envelope-o" /><span>{ shop.email_1}</span></li>
                                                            <li><i className="fa fa-phone" /><span>{ shop.phone_number_1}</span></li>
                                </ul>
                                                        )
                                    })}
                                </div>
                            </div>
                            <div className="widget pgs-newsletter-widget">
                                <h4 className="footer-title title">Abunə ol</h4>
                                <div className="newsletter">
                                <div className="section-field">
                                    <form className="newsletter_form">
                                    <div className="input-area">
                                        <input type="text" className="placeholder newsletter-email" name="newsletter_email" placeholder="Emailinizi daxil edin" />
                                    </div>
                                    <div className="button-area">
                                        <span className="input-group-btn">
                                        <button className="btn btn-icon newsletter-mailchimp submit" type="button">Subscribe</button>
                                        </span>
                                        <span className="newsletter-spinner spinimg-pgs_newsletter_widget_2" />
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Row>
                        </Container>
                    </div>
                    </div>
                    <div className="site-info">
                    <div className="footer-widget">
                        <Container>
                        <div className="row align-items-center justify-content-center">
                            <Col md={6} className="text-center">
                                 <p> © Copyright 2019 <Link to="#">Made by</Link> Khanbuta group</p>
                            </Col>
                            {/* <Col md={6}  className="float-right">
                                <div className="payments text-right">
                                    <img src={require(`../../assets/images/payments.png`)} className="img-fluid" alt />
                                </div>
                            </Col> */}
                        </div>
                        <div className="clearfix" />
                    </Container>
                    </div>
                    </div>
                  </div>
                </footer>
                 {/* Back to Top */}
                <div id="back-to-top" style={backtotop} onClick={this.ClicktoTop}>
                    <Link class="top arrow">
                            <i class="fa fa-angle-up"></i>
                    </Link>
                </div>
        </div>
        )
    }
};

const mapStateToProps = state => ({
    logos: state.user.logo,
    shop_address:state.user.shop_address
})

export default connect(mapStateToProps,{getLogo,getShopAddress})(Footer);
