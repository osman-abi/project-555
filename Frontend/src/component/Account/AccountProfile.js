/**
 *  Account Profile
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Common from '../../api/common';
import Sitebar from './Sitebar';


class AccountProfile extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

  render() {
      const username = localStorage.getItem("username")
    const lastname = localStorage.getItem("lastname")
    const email = localStorage.getItem("email")
    const phone_number = localStorage.getItem("phone_number")
    const address = localStorage.getItem("address")
      // const Profile=Common['0']['profile'];
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
                      <div className="woocommerce-Address">
                        <div className="woocommerce-Address-title">
                          <h5 class="mb-0">Profil</h5>
                        </div>
                       <div className="woocommerce-Address-info mt-4">
                          <ul class="list-unstyled mb-0">
                            <li><span>Ad:</span><strong>{username}</strong></li>
                            <li><span>Soyad:</span><strong>{lastname}</strong></li>
                            <li><span>Tel:</span><strong>{phone_number}</strong></li>
                            <li><span>Email:</span><strong>{email}</strong></li>
                            <li><span>Ünvan:</span><strong>{address}</strong></li>
                          </ul>
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
export default AccountProfile;
