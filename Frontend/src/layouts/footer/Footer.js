/**
 *  Footer Main
 */
import React from 'react';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getLogo,getShopAddress, getAboutContext, getCopyRight ,getFacebook,getInstagram,getWhatsapp} from '../../actions/index'

class Footer extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:""
        }
    }
    

    static propTypes = {
        facebook: PropTypes.array.isRequired,
        instagram: PropTypes.array.isRequired,
        whatsapp: PropTypes.array.isRequired,
        getWhatsapp: PropTypes.func.isRequired,
        getFacebook: PropTypes.func.isRequired,
        getInstagram:PropTypes.func.isRequired,
        getCopyRight: PropTypes.func.isRequired,
        copyright:PropTypes.array.isRequired,
        about_context: PropTypes.array.isRequired,
        getAboutContext:PropTypes.func.isRequired,
        shop_address: PropTypes.array.isRequired,
        getShopAddress:PropTypes.func.isRequired,
        logos: PropTypes.array.isRequired,
        getLogo: PropTypes.func.isRequired
    }


    componentDidMount()
    {
        window.addEventListener('scroll', this.Checkscroll);
        this.props.getLogo();
        this.props.getShopAddress();
        this.props.getAboutContext()
        this.props.getCopyRight()
        this.props.getFacebook();
          this.props.getInstagram();
          this.props.getWhatsapp();
    }
    componentWillUnmount()
    {
        window.removeEventListener('scroll',this.Checkscroll);
    }

    changeEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    subscribe = e => {
        e.preventDefault();
        alert('Təbriklər! Mağazamıza abunə oldunuz')
        const { email } = this.state
        const data = {email}
        fetch('https://1klikle.az/api/​registration​/subscribe​/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
        
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
        const {logos,shop_address,abouts,copyright,facebook,whatsapp,instagram} = this.props
        let backtotop = { display: 'none' }
        const {email} = this.state
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
                                                        <img key={index} className="img-fluid" src={logo.logo_image} alt="logo" />
                                                        )
                                                    })}
                                </Link></p>
                            </div>
                                            <div className="text-content">
                                                {abouts.map((context, index) => {
                                                    return (
                                                       
                                                        <p key={index} className="mb-3 mt-4"> {context.about_context} </p>
                                                   ) 
                                                })}
                            </div>
                            <div className="pgs-social-profiles mt-4">
                                <div className="social-profiles-wrapper">
                                <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                                    <div className="social-profiles">
                                                            <ul>
                                                                {facebook.map((hesab, index) => {
                                                                    return (
                                                      
                                                                        <li key={index}><a href={hesab.link} title="Facebook" target="_blank"><i className="fa fa-facebook" /></a></li>
                                                  )
                                                                })}
                                                                {whatsapp.map((hesab, index) => {
                                                                    return (
                                                      
                                                                        <li key={index}><a href={hesab.link} title="Whatsapp" target="_blank"><i className="fa fa-whatsapp" /></a></li>
                                                  )
                                                                })}
                                                                {instagram.map((hesab, index) => {
                                                                    return (
                                                      
                                                                        <li key={index}><a href={hesab.link} title="Instagram" target="_blank"><i className="fa fa-instagram" /></a></li>
                                                  )
                                              })}                  
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
                                    <form onSubmit={this.subscribe} className="newsletter_form">
                                    <div className="input-area">
                                        <input type="email" onChange={this.changeEmail} value={email} className="placeholder newsletter-email" name="newsletter_email" placeholder="Emailinizi daxil edin" />
                                    </div>
                                    <div className="button-area">
                                        <span className="input-group-btn">
                                        <button className="btn btn-icon newsletter-mailchimp submit" type="submit">Subscribe</button>
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
                                            {copyright.map((copy, index) => {
                                                return (
                                                    <p key={index}> © Copyright {copy.year} <Link to="https://khanbutagroup.az/">Made by</Link> {copy.context} </p>

                                                )
                                            })}
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
    abouts:state.user.about_context,
    logos: state.user.logo,
    shop_address: state.user.shop_address,
    copyright:state.user.copyright,
    facebook: state.user.facebook,
    instagram: state.user.instagram,
    whatsapp:state.user.whatsapp
})

export default connect(mapStateToProps,{getLogo,getShopAddress,getAboutContext,getCopyRight,getInstagram,getWhatsapp,getFacebook})(Footer);
