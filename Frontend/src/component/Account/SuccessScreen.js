/**
 *  Success Screen
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CommonList from '../../api/common';

class SuccessScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ShippingFlatRate: 0,
          ShippingLocalPickUp: 0,
          TotalShippingCarge: 0,
          Adress1: "",
          Adress2: "",
          Adress3: "",
          CartITems:[],
          firstname:"",
          lastname:""
      }
      this.SetAddress = this.SetAddress.bind(this);
    }

    componentDidMount() {
      this.SetAddress(document, 'script');
      var evt = document.createEvent('Event');
      evt.initEvent('load', false, false);
      window.dispatchEvent(evt);
      window.scrollTo(0, 0)
    }

    SetAddress() {
        if(localStorage.getItem("ShippingAddress1") != null)
        {
          this.state.Adress1 = localStorage.getItem("ShippingAddress1")
        }
        if(localStorage.getItem("ShippingAddress2") != null)
        {
          this.state.Adress2 = localStorage.getItem("ShippingAddress2")
        }
        if(localStorage.getItem("ShippingAddress3") != null)
        {
          this.state.Adress3 = localStorage.getItem("ShippingAddress3")
        }
        if(localStorage.getItem("TotalShippingCharge") != null)
        {
          this.state.TotalShippingCarge =  parseFloat(localStorage.getItem("TotalShippingCharge"));
        }
        if(localStorage.getItem("firstname") != null)
        {
          this.state.firstname =  parseFloat(localStorage.getItem("firstname"));
        }
        if(localStorage.getItem("lastname") != null)
        {
          this.state.lastname =  parseFloat(localStorage.getItem("lastname"));
        }
        this.ReadCartItems();
        this.forceUpdate();
      }


    ReadCartItems() {
      this.state.CartItems = JSON.parse(localStorage.getItem("FinalCheckoutCartItems"));
      localStorage.removeItem("FinalCheckoutCartItems");
      localStorage.removeItem("ShippingAddress1");
      localStorage.removeItem("ShippingAddress2");
      localStorage.removeItem("ShippingAddress3");
      localStorage.removeItem("TotalShippingCharge");
      localStorage.removeItem("ShippingType");
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      if (this.state.CartItems == null) {
        this.props.history.push(`/`)
      }

    }


  render() {

    const {firstname} = localStorage.getItem("CheckOutFirstName")
    const {lastname} = localStorage.getItem("CheckOutLastName")
    const {address} = localStorage.getItem("CheckOutAddress")
const date = new Date();

   return (
    <div>
    <div className="inner-intro">
      <Container>
          <Row className="intro-title align-items-center">
              <Col md={6} className="text-left">
                  <div className="intro-title-inner">
                  <h1>Mənim hesabım</h1>
                  </div>
              </Col>
              <Col md={6}  className="text-right">
                  <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                  <li className="home">
                      <span>
                      <Link className="bread-link bread-home" to="/">Ana səhifə</Link>
                      </span>
                  </li>
                  <li><span>Mənim hesabım</span></li>
                  </ul>
              </Col>
          </Row>
      </Container>
      </div>
            <div className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={7}>
                  <div className="success-screen">
                    <div className="thank-you text-center">
                      <i className="fa fa-check-circle-o"></i>
                      <h1 className="text-white">Təşəkkürlər</h1>
                      <span>Sifarişiniz tezliklə təsdiqlənəcək </span>
                    </div>
                    
                    {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                    <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                    <Row>
                      <Col lg={6}>
                       <h6>Çatdırılacaq Ünvan</h6>
                        <ul className="list-unstyled mb-0">
                           <li>{firstname}  { lastname }</li>
                          <li>{address}</li>

                        </ul>
                      </Col>
                      <Col lg={6} className="text-lg-right mt-4 mt-lg-0">
                        <h6>Məzmun</h6>
                        <ul className="list-unstyled mb-0">
                          <li><span>Tarix:</span> <strong> { date.toLocaleString('en-us', { month: 'long' }) } {new Date(). getDay()}, {new Date().getFullYear()}</strong></li>
                          <li><span>Sifarişin məbləği:</span> <strong>{parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} AZN </strong></li>
                        </ul>
                      </Col>
                    </Row>
                    </div>
                      :
                      <div>Heç bir məhsul tapilmadı
                      </div>
                    }
                    {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                    <div className="ordered-detail">
                      <h5 className="mb-4">Sifarişiniz haqqında məlumat</h5>
                      <div className="table-responsive">
                      {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                      <table class="table mb-0">
                        <tbody>

                        {this.state.CartItems.map((CartItem, index) => (
                          <tr className="ordered-item">
                            <td className="ordered-image">
                              {/* <img alt="img 01"  src={require(`../../assets/images/${CartItem.ProductImage}`)}    className="img-fluid" /> */}
                            </td>
                            <td  className="ordered-name">
                              <h6 className="mb-0">Sifarişin adı</h6>
                              <span>{CartItem.ProductName}</span>
                            </td>
                            <td className="ordered-quantity">
                              <h6 className="mb-0">Sifarişin miqdarı</h6>
                              <span>{CartItem.Qty}</span>
                            </td>
                            <td className="ordered-price">
                             <h6 className="mb-0">Sifarişin məbləği</h6>
                             <span>{(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} AZN</span>
                            </td>
                          </tr>
                         ))}
                        </tbody>
                      </table>
                      :
                      <div>Heç bir məhsul tapılmadı</div>
                      }
                      </div>
                      <div className="table-responsive">
                      <table class="table total-table table-borderless mt-4 mb-0">
                        <tbody>
                          <tr>
                            <td>Məbləğ</td>
                            <td className="text-right">{parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0))).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} AZN </td>
                          </tr>
                          
                          <tr className="border-top">
                          <td><strong className="h5">Cəmi</strong></td>
                            <td className="text-right h5"><strong>{parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} AZN </strong></td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                    :
                    <div>
                      Heç bir məhsul tapılmadı
                    </div>
                    }
                    <div className="d-sm-flex px-4 pb-4 px-md-5 pb-md-5">
                      <Link className="button ml-auto" to="/">Ana səhifəyə qayıt</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
            </div>
        )

    }
}
export default SuccessScreen;
