/**
 *  Header Main
 */
import classnames from 'classnames';
import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Col, Collapse, Container, DropdownItem, DropdownMenu, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarToggler, NavItem, NavLink, Row, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import AllProduct from '../../api/product';
import logo2 from '../../assets/images/logo2.jpg';
import navLinks from '../../NavLinks.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getProductImages,getLogo,getShopAddress,getFacebook,getInstagram,getWhatsapp } from '../../actions/index'


class Header extends React.Component {
    constructor(props) {

        super(props);
        this.ReadCartItems = this.ReadCartItems.bind(this);
        this.ReadWishListItems = this.ReadWishListItems.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            timeout: true,
            modal: false,
            activeTab: '1',
            isOpen: false,
            collapsed: true,
            CartHide: true,
            classset: '',
            getproduct: AllProduct,
            /////////////////////////////
            
        }
        var removeFromCart, removeFromWishList;
        this.toggle = this.toggle.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.ShowCart = this.ShowCart.bind(this);
    }

    static propTypes = {
        facebook: PropTypes.array.isRequired,
        instagram: PropTypes.array.isRequired,
        whatsapp: PropTypes.array.isRequired,
        getWhatsapp: PropTypes.func.isRequired,
        getFacebook: PropTypes.func.isRequired,
        getInstagram:PropTypes.func.isRequired,
        getShopAddress: PropTypes.func.isRequired,
        shop_address:PropTypes.array.isRequired,
        images: PropTypes.array.isRequired,
        user: PropTypes.array.isRequired,
        logos: PropTypes.array.isRequired,
        getLogo:PropTypes.func.isRequired,
        getProductImages: PropTypes.func.isRequired,
        registerUser: PropTypes.func.isRequired
    }





    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    logintoggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    ReadCartItems() {
        return JSON.parse(localStorage.getItem("LocalCartItems"));
    }
    removeFromCart = (Index) => {
        var UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
    }

    ReadWishListItems() {
        return JSON.parse(localStorage.getItem("LocalWishListItems"));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


      componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
          this.props.getProductImages();
          this.props.getLogo()
          this.props.getShopAddress();
          this.props.getFacebook();
          this.props.getInstagram();
          this.props.getWhatsapp();
          console.log(this.props.images)
          
        //   console.log(this.props.user)
      }
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
          
        //   console.log(this.props.user)
      }

      handleScroll(event) {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

        if(scrollTop > 100)
        {
            document.getElementById("site-header").setAttribute("class","site-header header-style-menu-center is-sticky");
        } else {
            document.getElementById("site-header").setAttribute("class","site-header header-style-menu-center");
        }
      }

      ShowCart() {
          if(this.state.CartHide == true)
          {
            var elm = document.getElementById("DivCartContent");
            if(elm != null)
            {
            document.getElementById("DivCartContent").setAttribute("style","display:block");
            this.state.CartHide = false;
            }
          }
      }

      HideCart()
      {
           var elm = document.getElementById("DivCartContent");
           if(elm != null)
           {
           document.getElementById("DivCartContent").setAttribute("style","display:none");
           this.state.CartHide = true;
           }
      }

      closeNavbar() {
            if (this.state.collapsed !== true) {
            this.toggleNavbar();
            }
        }
    onClickClassAdd(pages){
        if(this.state.classset != pages)
        {
                this.setState({
                    ...this.state,
                    classset:pages
                })
        }
        else
        {
            if(Object.keys(this.state.classset).length == 0){
                this.setState({
                    ...this.state,
                    classset:pages
                })
            }
            else
            {
                this.setState({
                    ...this.state,
                    classset:''
                })
            }
        }
        
    }
  

    OpenSubmenuOpen(id) {
        var elm = document.getElementById(id);
        if(elm != null)
        {
            document.getElementById(id).setAttribute("class","dropdown-menu dropdown-menu-right show")
        }
    }

    OpenSubmenuClose(id) {
        var elm = document.getElementById(id);
        if(elm != null)
        {
            document.getElementById(id).setAttribute("class","dropdown-menu dropdown-menu-right")
        }
    }

    handleFirstname = e => {
        this.setState({
            firstname:e.target.value,
        })
    }

    handleLastname = e => {
        this.setState({
            lastname:e.target.value
        })
    }

    handleEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    handleAddress = e => {
        this.setState({
            address: e.target.value
        })
    };

    handlePhone = e => {
        this.setState({
            phone: e.target.value
        })
    };

    
    
    render() {
        let pathnames = document.location.href;
        let pathArray = pathnames.split('/');
        let pageName = '/'+pathArray[pathArray.length -1];
        var searchName;
        
        const { images, logos, shop_address,instagram,whatsapp,facebook } = this.props
        
        if(pageName== '/topbar-with-load-more')
        {
            searchName="/topbar-with-load-more"
        }
        else if(pageName== '/magaza')
        {
            searchName="/magaza"
        }
        else if(pageName== '/topbar-without-lazyload')
        {
            searchName="/topbar-without-lazyload"
        }
        else if(pageName== '/sidebar-with-lazyload')
        {
            searchName="/sidebar-with-lazyload"
        }
        else
        {
            searchName="/sidebar-with-load-more"
        }
        if (this.state.timeout == true) {
            setTimeout(function () {
                this.setState({ timeout: false });
            }.bind(this), 2000);  // wait 5 seconds, then reset to false
        }
        return (

            <header className="site-header header-style-menu-center" id="site-header">
                
                    <div>
                        <div className="topbar topbar-bg-color-default topbar-desktop-on topbar-mobile-off">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg={6} sm={12}>
                                        <div className="topbar-left text-left">
                                        <div className="topbar-link">
                                            {shop_address.map((shop, index) => {
                                                return (
                                                    
                                                    <ul key={ index}>

                                                    <li className="topbar_item topbar_item_type-email">
                                                    <Link to="/elaqe"><i className="fa fa-envelope-o">&nbsp;</i> {shop.email_1}  </Link>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-phone_number">
                                                        <Link to="/elaqe"><i className="fa fa-phone">&nbsp;</i>{shop.phone_number_1} </Link>
                                                    </li>
                                                </ul>
                                                )
                                            })}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} sm={12}>
                                        <div className="topbar-right text-right">
                                            <div className="topbar-link">
                                                <ul>
                                                    <li className="topbar_item topbar_item_type-topbar_menu">
                                                        <div className="menu-top-bar-menu-container">
                                                            
                                                        </div>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-social_profiles">
                                                        <div className="topbar-social_profiles-wrapper">
                                                        <ul className="topbar-social_profiles">
                                                            {facebook.map((hesab, index) => {
                                                                return (
                                                                <li key={index} className="topbar-social_profile">
                                                                    <a href={hesab.link} target="_blank" >
                                                                        <i className="fa fa-facebook" />
                                                                    </a>
                                                                </li>
                                                                    
                                                                )
                                                            })}
                                                            {instagram.map((hesab, index) => {
                                                                return (
                                                                <li key={index} className="topbar-social_profile" >
                                                                    <a href={hesab.link} target="_blank">
                                                                        <i className="fa fa-instagram" />
                                                                    </a>
                                                                </li>

                                                                )
                                                            })}
                                                            {whatsapp.map((hesab, index) => {
                                                                return (
                                                                <li key={index} className="topbar-social_profile" >
                                                                    <a href={hesab.link} target="_blank">
                                                                        <i className="fa fa-whatsapp" />
                                                                    </a>
                                                                </li>
                                                                    
                                                                )
                                                            })}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="header-main header-main-bg-color-default">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg={12}>
                                        <div className="row align-items-center justify-content-md-center">
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="logo-wrapper">
                                                <Link to="/">
                                                    {logos.map((logo, index) => {
                                                        return(
                                                        <img key={index} className="img-fluid" src={logo.logo_image} alt="logo" />
                                                        )
                                                    })}
                                                
                                                </Link>
                                                </div>
                                                <div className="clearfix" />
                                            </Col>
                                            <div className="col" id="mainMenu">
                                                <div className="header-nav header-nav-bg-color-default">
                                                    <div className="header-nav-wrapper">
                                                        <Container>
                                                            <Row>
                                                                <div className="col-12">
                                                                    <div className="primary-nav">
                                                                        <div className="primary-nav-wrapper">
                                                                            <nav className="mega-menu">
                                                                                <div class="menu-list-items">
                                                                                     <Navbar light expand="md" class="front_menu" >
                                                                                        <NavbarToggler onClick={this.toggle} />
                                                                                    <Collapse isOpen={this.state.isOpen} navbar>
                                                                                        
                                                                                            {navLinks.map((navLink, index) => (
                                                                                                <Nav className="ml-auto" navbar>
                                                                                                    {(navLink.type && navLink.type === 'subMenu') ?
                                                                                                        <Fragment>
                                                                                                            <UncontrolledDropdown nav inNavbar onMouseEnter={()=>this.OpenSubmenuOpen(`submenu_${index}`)} onMouseLeave={()=>this.OpenSubmenuClose(`submenu_${index}`)}>
                                                                                                                <Link aria-haspopup="true" to={navLink.path} className="dropdown-toggle nav-link" aria-expanded="true"> {navLink.menu_title}</Link>
                                                                                                                <DropdownMenu right id={`submenu_${index}`}>

                                                                                                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                                                        <DropdownItem tag={Link}  className={`nav-item  ${(pageName == subNavLink.path || (subNavLink.path == "/shop/clothing/29" && pageName == "/29")) ? 'active' : '' }`} to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                                                                    ))}
                                                                                                                </DropdownMenu>
                                                                                                            </UncontrolledDropdown>
                                                                                                    </Fragment>
                                                                                                    :
                                                                                                    <Fragment>
                                                                                                        <NavItem>
                                                                                                            <NavLink href={navLink.path}>{navLink.menu_title}</NavLink>
                                                                                                        </NavItem>

                                                                                                    </Fragment>
                                                                                                    }
                                                                                                </Nav>
                                                                                             ))}
                                                                                        </Collapse>
                                                                                    </Navbar>
                                                                                </div>
                                                                            </nav>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </div>
                                            </div>
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="header-nav-right-wrapper">
                                                    <div className="ciya-tools">
                                                        <div className="ciya-tools-wrapper">
                                                            <ul className="ciya-tools-actions">
                                                                <li className="ciya-tools-action ciya-tools-cart">
                                                                    {
                                                                        (this.ReadCartItems() == null || this.ReadCartItems().length == 0) ?
                                                                        <Link className="cart-link" to="#" onClick={() => this.ShowCart()} >
                                                                            <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                            <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                        </Link>

                                                                        :

                                                                        <Link className="cart-link" to="/sebet" onClick={() => this.ShowCart()} >
                                                                            <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                            <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                        </Link>

                                                                    }


                                                                    {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                                                        <div className="cart-contents" id="DivCartContent">
                                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                                <div className="widget-shopping-cart-content">
                                                                                    <div className="pgs-product-list-widget-container has-scrollbar">
                                                                                        <ul className="ciyashop-mini-cart cart-list">



                                                                                            {this.ReadCartItems().map((CartItem, index) => (

                                                                                                <li className="ciya-mini-cart-item"   >
                                                                                                    <Link onClick={() => this.removeFromCart(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_from_cart_button">??</Link>
                                                                                                    <div className="media">
                                                                                                            {
                                                                    images.map((image, index) => {
                                                                        return image.id == CartItem.ProductImage ?
                                                                        <img key={index} src={image.image} alt="product" />
                                                                            :
                                                                            null
                                                                    })
                                                                }
                                                                                                        
                                                                                                        {/* <Link to="#"><img width={60} height={76} src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid" alt /></Link> */}
                                                                                                        <div className="media-body">
                                                                                                            <Link to="#" className="product-title">{CartItem.ProductName}</Link>
                                                                                                            <span className="quantity">{CartItem.Qty} ?? <span className="woocs-special_price_code"><span className="ciya-Price-amount amount"><span className="ciya-Price-currencySymbol"></span>{CartItem.Rate.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span> AZN </span></span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            ))}

                                                                                        </ul>
                                                                                    </div>
                                                                                    <p className="ciyashop-mini-cart__total total"><strong>C??mi:</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span> AZN</span></p>
                                                                                    <p className="ciyashop-mini-cart__buttons buttons">
                                                                                        <Link onClick={() => this.HideCart()} to="/sebet" className="button wc-forward">S??b??t?? ke??</Link>
                                                                                        <Link onClick={() => this.HideCart()}  to="/CheckOut" className="button checkout wc-forward">Sifari?? et</Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        :
                                                                        <div className="cart-contents" id="DivCartContent">
                                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                                <div className="widget-shopping-cart-content">
                                                                                    <p className="ciyashop-mini-cart__total total">
                                                                                    <img src={require(`../../assets/images/empty-cart.png`)} className="img-fluid mr-3" />
                                                                                    <strong>S??b??td?? m??hsul yoxdur</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> </span></span></p>


                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </li>
                                                                 <li className="ciya-tools-action ciya-tools-wishlist"> <Link to="/wishlist"><i className="glyph-icon pgsicon-ecommerce-like" /> <span className="wishlist ciyashop-wishlist-count"> {this.ReadWishListItems() == null ? 0 : this.ReadWishListItems().length} </span> </Link></li>
                                                                 
                                                                 <li className="ciya-tools-action ciya-tools-search"><Link to='/magaza' ><i className="glyph-icon pgsicon-ecommerce-magnifying-glass"  /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Navbar color="faded" light >

                                                                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                                                <Collapse isOpen={!this.state.collapsed} navbar>
                                                                <Nav className="ml-auto" navbar>
                                                                {navLinks.map((navLink, index) => (
                                                                                         <li className={`nav-item ${(this.state.classset == navLink.menu_title) ? 'show' : '' }`}>
                                                                                            {(navLink.type && navLink.type === 'subMenu') ?
                                                                                                <Fragment>
                                                                                                            <Link href="#" className="nav-link" onClick={()=>this.onClickClassAdd(navLink.menu_title)}>{navLink.menu_title}</Link>
                                                                                                            <ul className={(this.state.classset == navLink.menu_title) ? 'showcollapsed' : 'submenu' }>
                                                                                                                {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                                                    <li  className={`nav-item  ${(pageName == subNavLink.path) ? 'active' : '' }`} toggle={false}   >
                                                                                                                        <Link className="nav-link"  onClick={() => this.closeNavbar()} to={subNavLink.path}>{subNavLink.menu_title}</Link>
                                                                                                                    </li>
                                                                                                               ))}
                                                                                                            </ul>
                                                                                                </Fragment>
                                                                                                :
                                                                                                <Fragment>
                                                                                                     <NavItem>
                                                                                                        <Link to={navLink.path} className="nav-admin-link" >{navLink.menu_title}</Link>
                                                                                                     </NavItem>

                                                                                                </Fragment>
                                                                                                }
                                                                                            </li> 
                                                                                            ))}
                                                                                    </Nav>
                                                                   </Collapse>
                                                            </Navbar>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <div className="mobile-menu" id="mobileMenu" />
                                     </div>
                                </Row>
                            </div>
                        </div>
                    </div>

                
                
            </header>

        )
    }
};

const mapStateToProps = state => ({
    images: state.user.images,
    user: state.user.user,
    logos: state.user.logo,
    shop_address: state.user.shop_address,
    facebook: state.user.facebook,
    instagram: state.user.instagram,
    whatsapp:state.user.whatsapp
})
export default connect(
    mapStateToProps, { getProductImages,getLogo,getShopAddress,getInstagram,getWhatsapp,getFacebook }
)(Header)