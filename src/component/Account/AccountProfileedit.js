/**
 *  Account Profile Edit
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import Common from '../../api/common';
import Sitebar from './Sitebar';

class AccountProfileedit extends Component {

  state = {
      fieldvalue:Common['0']['profile'],
      errors: {}
  };
  componentDidMount() {
      window.scrollTo(0, 0)
  }

  handleValidation()
  {
        let fieldvalue=this.state.fieldvalue;
        let errors = {};
        let formIsValid = true;

        //First Name
        if (!fieldvalue["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "Please Enter First Name";
        }

        if (typeof fieldvalue["firstname"] !== "undefined") {
            if (!fieldvalue["firstname"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["firstname"] = "Please Enter Only Letter";
            }
        }

        //Last Name
        if (!fieldvalue["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "Please Enter Last Name";
        }

        if (typeof fieldvalue["lastname"] !== "undefined") {
            if (!fieldvalue["lastname"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["lastname"] = "Please Enter Only Letter";
            }
        }

      //Male & Female Radio Button
      if (!fieldvalue["customradio"]) {
          formIsValid = false;
          errors["customradio"] = "Please Select Radio";
      }



      //Last Name
      if (!fieldvalue["phoneno"]) {
          formIsValid = false;
          errors["phoneno"] = "Nömrə xanasını doldurun";
      }

      if (typeof fieldvalue["phoneno"] !== "undefined") {
          if (!fieldvalue["phoneno"].match(/^\d{10}$/)) {
            formIsValid = false;
            errors["phoneno"] = "Nömrəni düzgün formada qeyd edin";
          }
      }

      //Email ID
      if (!fieldvalue["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "Email xanasını doldurun";
      }

      if (typeof fieldvalue["emailid"] !== "undefined") {
          if (!fieldvalue["emailid"].match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/)) {
            formIsValid = false;
            errors["emailid"] = "Emaili düzgün formada qeyd edin";
          }
      }

      //Address
      if (!fieldvalue["address"]) {
        formIsValid = false;
        errors["address"] = "Ünvan xanasını doldurun";
      }

      if (typeof fieldvalue["address"] !== "undefined") {
          if (!fieldvalue["address"].match(/^[a-zA-Z0-9 ]+$/)) {
            formIsValid = false;
            errors["address"] = "Ancaq hərflərdən ibarət olmalıdır";
          }
      }

      this.setState({ errors: errors });
      return formIsValid;

  }

  onProfileFormSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
       return true;
    }
    else
    {
       // alert('Please Enter Valid Data.');
    }
  }


  handleChange(field, e){
    let fieldvalue=this.state.fieldvalue;
    fieldvalue[field] = e.target.value;
    this.setState({fieldvalue});
  }

   render() {
    const Profile=Common['0']['profile'];
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
             <Row>
              <Sitebar />
              <Col lg={9} className="mt-4 mt-lg-0">
                <Row>
                <Col lg={12}>
                  <div className="woocommerce-Address woocommerce-Address-edit">
                    <div className="woocommerce-Address-title">
                      <h5 class="mb-0">Profil məlumatlarını dəyiş </h5>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                    <form onSubmit={this.onProfileFormSubmit.bind(this)}>
                    <div class="form-group">
                          <label>Ad</label>
                          <input type="text" class="form-control" value={this.state.fieldvalue.firstname}  onChange={this.handleChange.bind(this, "firstname")} placeholder="Ad" />
                          <span className="error">{this.state.errors["firstname"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Soyad</label>
                          <input type="text" class="form-control"  value={this.state.fieldvalue.lastname}  onChange={this.handleChange.bind(this, "lastname")}  placeholder="Soyad"></input>
                          <span className="error">{this.state.errors["lastname"]}</span>
                        </div>
                        <div class="form-group">
                        <label className="d-block">Cins</label>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="male" name="gender" class="custom-control-input" value="Male" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Kişi"}></input>
                            <label class="custom-control-label" for="male" >Kişi</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="female" name="gender" class="custom-control-input" value="Female" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Qadın"}></input>
                            <label class="custom-control-label" for="female">Qadın</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Doğum tarixi</label>
                          <input type="date" class="form-control" placeholder="Date of birth"  value={this.state.fieldvalue.dob} onChange={this.handleChange.bind(this, "dob")} ></input>
                        </div>
                        <div class="form-group">
                          <label>Tel:</label>
                          <input type="text" class="form-control" placeholder="Phone" value={this.state.fieldvalue.phoneno} onChange={this.handleChange.bind(this, "phoneno")}></input>
                          <span className="error">{this.state.errors["phoneno"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Email</label>
                          <input type="Email" class="form-control" placeholder="Email" value={this.state.fieldvalue.email} onChange={this.handleChange.bind(this, "email")}></input>
                          <span className="error">{this.state.errors["email"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Ünvan</label>
                          <textarea class="form-control" rows="3" placeholder="Address" value={this.state.fieldvalue.address}   onChange={this.handleChange.bind(this, "address")}></textarea>
                          <span className="error">{this.state.errors["address"]}</span>
                        </div>
                        <Button type="submit" className="btn btn-primary">Yadda saxla</Button>
                    </form>
                    </div>
                  </div>
                </Col>
                </Row>
              </Col>
            </Row>
            </Container>
            </div>
            </div>
        )
    }
}
export default AccountProfileedit;
