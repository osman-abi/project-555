/**
 *  Shop Checkout Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Input, Row } from 'reactstrap';
import CommonList from '../../api/common';
import { connect } from "react-redux";
import { postInvoice,postMyOrders } from "../../actions/index";
import PropTypes from "prop-types";

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            shipping_address: "",
            phone: "",
            email: "",
            items:[],
            
        }
        
    }

    static propTypes = {
        postInvoice: PropTypes.func.isRequired,
        postMyOrders:PropTypes.func.isRequired
    }

    componentDidMount() {
        
        var evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
        window.scrollTo(0, 0)
        var cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        for (const i of cart) {
            items:this.state.items.push(i.ProductID)
            this.setState({
                items:this.state.items
            })
        }
    }

    ReadCartItems() {
        var cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (cart == null) {
            this.props.history.push(`/`)
        } 
        return cart
    }

    

    handleFirstName = e => {
        this.setState({
              firstname:e.target.value
          })
      }

    handleLastName = e => {
        this.setState({
            lastname:e.target.value
        })
    }

    handleEmail = e => {
        this.setState({
            email:e.target.value
        })
    }
    
    handlePhoneNumber = e => {
        this.setState({
            phone:e.target.value
        })
    }  

    handleAddress = e => {
        this.setState({
            shipping_address:e.target.value
        })
    }

    onCheckOutSubmit(e) {
        var amount = parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr +
            (CartItem.Qty * CartItem.Rate), 0)) +
            parseFloat((this.state.TotalShippingCarge != undefined) ?
            this.state.TotalShippingCarge.toFixed(2) : 0))
            .toLocaleString(navigator.language, { minimumFractionDigits: 2 })
        e.preventDefault();
        const { firstname, lastname, phone, shipping_address, email, items } = this.state
        localStorage.setItem("CheckOutFirstName", firstname)
        localStorage.setItem("CheckOutLastName", lastname)
        localStorage.setItem("CheckOutAddress", shipping_address)
        
        const invoice = { firstname, lastname, shipping_address, phone, email, items, amount }
        this.props.postInvoice(invoice);
        const myOrders = {
            user: localStorage.getItem("userID"),
            amount:amount
        }
            this.props.postMyOrders(myOrders)

        
            localStorage.setItem("FinalCheckoutCartItems",localStorage.getItem("LocalCartItems"));
            localStorage.removeItem("LocalCartItems");
            this.props.history.push(`/SuccessScreen`)
            
      }
    


    render() {
        const {firstname,lastname,shipping_address,phone,email} = this.state
        return (

            <div class="site-content">



            <div className="inner-intro">
                <Container>
                    <Row className="intro-title align-items-center">
                        <Col md={6} className="text-left">
                            <div className="intro-title-inner">
                                <h1>Sifariş</h1>
                            </div>
                        </Col>
                        <Col md={6} className="text-right">
                            <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                <li className="home">
                                    <span>
                                        <Link className="bread-link bread-home" to="/">Ana səhifə</Link>
                                    </span>
                                </li>
                                <li><span>Sifariş</span></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="content-wrapper mb-7">
                <Container>
                   <form onSubmit={this.onCheckOutSubmit.bind(this)}>
                        <Row class="mt-5">
                        <Col class="col-lg-6">
                            <Row>
                                <Col sm={12} >
                                    <div class="billing-fields mt-5">
                                        <h3>Sifariş məlumatları</h3>
                                        <div class="billing-fields__field-wrapper">
                                            <div class="form-group">
                                                <label for="billing_first_name" class="">Ad &nbsp;<abbr class="required" title="required">*</abbr>
                                                </label>
                                               <Input type="text" class="form-control" name="billing_first_name" id="billing_first_name" placeholder="" value={firstname} onChange={this.handleFirstName}/>
                                               {/* <span className="error">{this.state.errors["firstname"]}</span> */}

                                            </div>
                                            <div class="form-group">
                                                <label for="billing_last_name" class="">Soyad&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control " name="billing_last_name" id="billing_last_name" placeholder="" value={lastname} onChange={this.handleLastName}/>
                                                {/* <span className="error">{this.state.errors["lastname"]}</span> */}
                                            </div>
                                           
                                            <div class="form-group">
                                                <label for="billing_city" class="">Ünvan&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control" name="billing_city" id="billing_city" placeholder="" value={shipping_address}  onChange={this.handleAddress} />
                                                {/* <span className="error">{this.state.errors["state"]}</span> */}
                                            </div>
                                            
                                            {/* <div class="form-group">
                                                <label for="billing_address_1" class="">Küçə&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control" name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value={this.state.fieldvalue.streetno}  onChange={this.handleChange.bind(this, "streetno")}/>
                                                <span className="error">{this.state.errors["streetno"]}</span>
                                            </div> */}
                                            
                                            <div class="form-group">
                                                <label for="billing_phone" class="">Tel:&nbsp;<abbr class="required" title="required">*</abbr></label>
                                               <Input type="text" class="form-control" name="billing_phone" id="billing_phone" placeholder="" value={phone} autocomplete="tel" onChange={this.handlePhoneNumber}/>
                                               {/* <span className="error">{this.state.errors["phone"]}</span> */}
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_email" class="">Email ünvanı&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="email" class="form-control" name="billing_email" id="billing_email" placeholder="" value={email} autocomplete="email username" onChange={this.handleEmail}/>
                                                {/* <span className="error">{this.state.errors["email"]}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} className="mt-5">
                            <h3 id="order_review_heading">Sizin sifarişiniz</h3>


                            <div id="order_review" class="checkout-review-order">
                            {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                <table class="shop_table checkout-review-order-table">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Məhsul</th>
                                            <th class="product-total">Ümumi</th>
                                        </tr>
                                    </thead>
                                        <tbody>

                                        {this.ReadCartItems().map((CartItem, index) => (
                                                <tr class="cart_item">
                                                <td class="product-name">
                                                    {CartItem.ProductName}&nbsp; <strong class="product-quantity">× {CartItem.Qty}</strong> </td>
                                                <td class="product-total">
                                                    <span class="woocs_special_price_code"><span class="Price-amount amount"><span class="Price-currencySymbol">AZN</span>  {(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span></span>
                                                </td>
                                                </tr>
                                        ))}


                                    </tbody>
                                    <tfoot>
                                        
                                        
                                        <tr class="order-total">
                                            <th>Ümumi məbləğ</th>
                                            <td><strong><span class="woocs_special_price_code"><span class="Price-amount amount"><span class="Price-currencySymbol"></span>{parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} AZN   </span></span></strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            :
                                <div>No Items found</div>
                            }
                                <div id="payment" class="checkout-payment">
                                    
                                    <div class="form-row place-order">


                                        

                                        <button type="submit" class="button" name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">
                                         Sifarişi təsdiqlə
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </form>
                </Container>
            </div>

        </div>

            )
    }
}
export default connect(null, { postInvoice,postMyOrders })(CheckOut);
