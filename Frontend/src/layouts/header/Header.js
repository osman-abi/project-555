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
import {  getProductImages } from '../../actions/index'


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
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            /////////////////////////////
            admin_email: "admin@admin.com",
            admin_password: "admin"
        }
        var removeFromCart, removeFromWishList;
        this.toggle = this.toggle.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.ShowCart = this.ShowCart.bind(this);
    }

    static propTypes = {
        images: PropTypes.array.isRequired,
        user:PropTypes.array.isRequired,
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
          console.log(this.props.images)
        //   localStorage.setItem("isSuperuser", 0)
          
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

    submitForm = e => {
        e.preventDefault()
        alert('Qeydiyyatınız uğurla həyata keçirildi')
        const { firstname, lastname, email, password, phone, address } = this.state;
        const data = {
            email: email,
            username: firstname,
            password: password,
            phone_number: phone,
            lastname: lastname,
            address:address
        }
       let REGISTRATION_URL = 'http://127.0.0.1:8000/registration/register/'
    fetch(REGISTRATION_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NDQ3ODczLCJqdGkiOiJhZTM1ZTY2OGEzYmI0YTVkODRlZGUyZTQ3YjA1NjI4OCIsInVzZXJfaWQiOjF9.0BlsVhPIizrLWqh1J4i9mrenyJnWZvjKRWG3lJ3tHOI'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        // console.log(data.data)

        localStorage.setItem('username', data.data.username)
        localStorage.setItem('email', data.data.email)
        localStorage.setItem('password', data.data.password)
        localStorage.setItem('phone_number', data.data.phone_number)
        localStorage.setItem("lastname", data.data.lastname)
        localStorage.setItem("address", data.data.address)
        localStorage.setItem("isLOggedIn", 1)
        if (email == this.state.admin_email && password == this.state.admin_password) {
            localStorage.setItem("isSuperuser", 1)
        } else {
            localStorage.setItem("isSuperuser", 0)
        }
    })

        
    }

    logOut = e => {
        // e.preventDefault();
        var access_token = localStorage.getItem("access_token")
        var refresh_token = localStorage.getItem("refresh_token")
        var data = {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
            refresh: refresh_token
        }
        fetch('http://127.0.0.1:8000/registration/logout/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        localStorage.setItem("username", "")
        localStorage.setItem("email", "")
        localStorage.setItem("password", "")
        localStorage.setItem('phone_number', "")
        localStorage.setItem("lastname", "")
        localStorage.setItem("address", "")
        localStorage.setItem("isLOggedIn", 0)
        localStorage.setItem("isSuperuser",0)
    }

    onLogIn = e => {
        localStorage.setItem("isLOggedIn",1)
        const { email, password } = this.state
        console.log('email',email,'password',password)
        if (email == this.state.admin_email && password == this.state.admin_password) {
            localStorage.setItem('isSuperuser',1)
        } else {
            localStorage.setItem('isSuperuser',0)
        }
        }
        
    
    
    render() {
        let pathnames = document.location.href;
        let pathArray = pathnames.split('/');
        let pageName = '/'+pathArray[pathArray.length -1];
        var searchName;
        let { firstname, lastname, email, phone, address, password } = this.state
        let isSuperuser = localStorage.getItem('isSuperuser');
        const isLoggedIn = localStorage.getItem('isLOggedIn')
        console.log(typeof isLoggedIn)
        const { images } = this.props
        if (isSuperuser == '0') {
            navLinks.length = 4
        }
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
                                                <ul>

                                                    <li className="topbar_item topbar_item_type-email">
                                                    <Link to="/elaqe"><i className="fa fa-envelope-o">&nbsp;</i>  </Link>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-phone_number">
                                                        <Link to="/elaqe"><i className="fa fa-phone">&nbsp;</i> </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} sm={12}>
                                        <div className="topbar-right text-right">
                                            <div className="topbar-link">
                                                <ul>
                                                    <li className="topbar_item topbar_item_type-topbar_menu">
                                                        <div className="menu-top-bar-menu-container">
                                                            <ul className="top-menu list-inline">
                                                            <li className="menu-item">
                                                                
                                                                {/* After login open this */}
                                                                {
                                                                    isLoggedIn == '1' ? <Link to="/Account/AccountProfile">Mənim hesabım</Link> : null
                                                                }
                                                                    
                                                                </li>
                                                            <li>
                                                                {
                                                                    isLoggedIn == '1' ? <Link to="#" onClick={this.logOut} data-toggle="modal" data-target="#"><i className="fa fa-sign-in">&nbsp;</i> Çıxış </Link> 
                                                                        : <Link to="#" onClick={this.toggle} data-toggle="modal" data-target="#"><i className="fa fa-sign-in">&nbsp;</i> Giriş </Link>
                                                                    
                                                                }
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-social_profiles">
                                                        <div className="topbar-social_profiles-wrapper">
                                                            <ul className="topbar-social_profiles">
                                                                <li className="topbar-social_profile">
                                                                    <a href={'https://www.facebook.com'} target="_blank" >
                                                                        <i className="fa fa-facebook" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://instagram.com/'} target="_blank">
                                                                        <i className="fa fa-instagram" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://vimeo.com/'} target="_blank">
                                                                        <i className="fa fa-whatsapp" />
                                                                    </a>
                                                                </li>
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
                                                        <img className="img-fluid" src={logo2} alt="logo" />
                                                
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

                                                                        <Link className="cart-link" to="/ShopingCart" onClick={() => this.ShowCart()} >
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
                                                                                                    <Link onClick={() => this.removeFromCart(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_from_cart_button">×</Link>
                                                                                                    <div className="media">
                                                                                                            {
                                                                    images.map((image, index) => {
                                                                        return image.id == CartItem.ProductImage ?
                                                                        <img key={index} src={`http://127.0.0.1:8000${image.image}`} alt="product" />
                                                                            :
                                                                            null
                                                                    })
                                                                }
                                                                                                        
                                                                                                        {/* <Link to="#"><img width={60} height={76} src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid" alt /></Link> */}
                                                                                                        <div className="media-body">
                                                                                                            <Link to="#" className="product-title">{CartItem.ProductName}</Link>
                                                                                                            <span className="quantity">{CartItem.Qty} × <span className="woocs-special_price_code"><span className="ciya-Price-amount amount"><span className="ciya-Price-currencySymbol"></span>{CartItem.Rate.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span> AZN </span></span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            ))}

                                                                                        </ul>
                                                                                    </div>
                                                                                    <p className="ciyashop-mini-cart__total total"><strong>Cəmi:</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span> AZN</span></p>
                                                                                    <p className="ciyashop-mini-cart__buttons buttons">
                                                                                        <Link onClick={() => this.HideCart()} to="/ShopingCart" className="button wc-forward">Səbətə keç</Link>
                                                                                        <Link onClick={() => this.HideCart()}  to="/CheckOut" className="button checkout wc-forward">Sifariş et</Link>
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
                                                                                    <strong>Səbətdə məhsul yoxdur</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> </span></span></p>


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
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-login modal-dialog-centered">
                                        <ModalHeader toggle={this.toggle}>
                                            <h4 className="mb-0">Daxil ol</h4>
                                        </ModalHeader>Modal
                                        <ModalBody>
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '1' })}
                                                        onClick={() => { this.logintoggle('1'); }}
                                                    >
                                                        Daxil ol
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                        onClick={() => { this.logintoggle('2'); }}
                                                    >
                                                        Qeydiyyat
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1">
                                                <form onSubmit={ this.onLogIn}>
                                                        <div class="form-group">
                                                            <label>Email ünvanı</label>
                                                            <input type="text" class="form-control" onChange={this.handleEmail} value={email} placeholder="Email ünvanını daxil edin"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label> Şifrə </label>
                                                            <input type="text" class="form-control" onChange={this.handlePassword} value={password} placeholder="Şifrənizi daxil edin"></input>
                                                        </div>

                                                        <div class="form-group">
                                                            <button type='submit'className='btn btn-primary mt-1'> Giriş </button>
                                                            <Link className="btn btn-secondary ml-2 mt-1" onClick={this.toggle} >İmtina et</Link>
                                                        </div>
                                                        <p className="mb-0">Hesabınız yoxdur? <Link to="#" className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.logintoggle('2'); }} > Qeydiyyat </Link></p>
                                                    </form>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <form onSubmit={this.submitForm}>
                                                        <div class="form-group">
                                                            <label>Ad</label>
                                                            <input type="text" class="form-control" onChange={this.handleFirstname} value={firstname} placeholder="Ad daxil edin"></input>
                                                    </div>
                                                    <div class="form-group">
                                                            <label>SoyAd</label>
                                                            <input type="text" class="form-control" onChange={this.handleLastname} value={lastname} placeholder="Soyad daxil edin"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Email ünvanı</label>
                                                            <input type="text" class="form-control" onChange={this.handleEmail} value={email} placeholder="Emailinizi daxil edin"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Şifrə </label>
                                                            <input type="password" class="form-control" onChange={this.handlePassword} value={password} placeholder="Şifrənizi daxil edin"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Şifrə (Təkrar) </label>
                                                            <input type="password" class="form-control"  placeholder="Şifrənizi yeniden daxil edin"></input>
                                                    </div>
                                                    <div class="form-group">
                                                            <label>Tel:</label>
                                                            <input type="texttext" class="form-control" onChange={this.handlePhone} value={phone} placeholder="Nömrınizi daxil edin"></input>
                                                    </div>
                                                    <div class="form-group">
                                                            <label>Ünvan:</label>
                                                            <input type="texttext" class="form-control" onChange={this.handleAddress} value={address} placeholder="Ünvanı daxil edin"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <button className='btn btn-primary' type='submit'> Qeydiyyatdan keç </button>
                                                            <Link className="btn btn-secondary ml-2" onClick={this.toggle} >İmtina</Link>

                                                        </div>
                                                        <p className="mb-0">Hesabınız var?<Link to="#" className={classnames({ active: this.state.activeTab === '1' })}
                                                            onClick={() => { this.logintoggle('1'); }} > Daxil ol </Link></p>
                                                    </form>
                                                </TabPane>
                                            </TabContent>
                                        </ModalBody>
                                    </Modal>
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
    user: state.user.user
})
export default connect(
    mapStateToProps, { getProductImages }
)(Header)