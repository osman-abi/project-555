/**
 *  Admin Header
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, Row, UncontrolledDropdown } from 'reactstrap';
import Common from '../../api/common';
import logo2 from '../../assets/images/logo2.jpg';
import profile from '../../assets/images/testimonials/img-02.jpg';

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          modal1: false,
          dropdownOpen: false,
          isOpen: false
        };
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
    }
    toggle2() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggle3() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    Changeclass(val){
        var removeelems = document.getElementsByClassName("nav-item");
        [].forEach.call(removeelems, function(el) {
            el.classList.remove('active');
        });

        if(val == "report")
        {
            document.querySelector(".report").classList.add("active");
        }
        if(val == "invoice")
        {
            document.querySelector(".invoice").classList.add("active");
        }
        // if(val == "information")
        // {
        //     document.querySelector(".invoice").classList.add("active");
        // }
        // if(val == "add_information")
        // {
        //     document.querySelector(".invoice").classList.add("active");
        // }
        if(val == "profile")
        {
            document.querySelector(".profile").classList.add("active");
        }
        if(val == "backhome")
        {
            document.querySelector(".backhome").classList.add("active");
        }
    }
    render() {
        const Profile=Common["0"]["profile"];
        return (
                <div className="admin-menu">
                <Container>
                    <Row className="align-items-center">
                    <Col md={12}>
                    <div className="d-flex align-items-center positive-reletive">

                    <Link to="/"><img className="img-fluid logo" src={logo2} alt="logo"/></Link>

                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2} className="profile-dropdown ml-auto">
                        <DropdownToggle caret className="btn-white">
                        <img className="img-fluid rounded-circle profile-img" src={profile} alt="profile"/>
                        <div className="d-none d-sm-block">
                        <h6 className="mb-0">{Profile.firstname+' '+Profile.lastname}</h6>
                        <span className="text-dark">{Profile.email}</span>
                        </div>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.Changeclass('profile')}  className="nav-link"  tag={Link} to="/admin-panel/Profile"><i className="fa fa-user-circle-o"></i>Profil</DropdownItem>
                            <DropdownItem onClick={() => this.Changeclass('profile')}className="nav-link"  tag={Link} to="/admin-panel/Settings"><i className="fa fa-cog"></i>Hesab parametrləri</DropdownItem>
                            <DropdownItem onClick={() => this.Changeclass('profile')}  className="nav-link" tag={Link} to="/"><i className="fa fa-sign-out"></i>Çıxış</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                    <Navbar light expand="md"  className="bg-white">
                        <NavbarToggler onClick={this.toggle3} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                            {/* <NavItem className="active report">
                                <Link  to="/admin-panel/Reports" className="nav-link" onClick={() => this.Changeclass('report')}><i className="fa fa-line-chart"></i>Reports</Link>
                            </NavItem> */}
                            <NavItem className="invoice">
                                <Link to="/admin-panel/qaimeler" className="nav-link" onClick={() => this.Changeclass('invoice')}><i className="fa fa-inbox"></i>Qaimələr</Link>
                                        </NavItem>
                                        {/* <NavItem className="information">
                                <Link to="/admin-panel/AddInformation" className="nav-link" onClick={() => this.Changeclass('information')}><i className="fa fa-inbox"></i>Məlumatlar</Link>
                                        </NavItem> */}
                                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-shopping-cart"></i>Məlumatlar
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem onClick={() => this.Changeclass('information')} className="nav-link"   tag={Link} to="/admin-panel/Information"><i className="fa fa-cart-plus"></i>Bütün Məlumatlar</DropdownItem>
                                    <DropdownItem onClick={() => this.Changeclass('add_information')} className="nav-link"   tag={Link} to="/admin-panel/AddInformation"><i className="fa fa-cart-arrow-down"></i>Məlumat əlavə et</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-shopping-cart"></i>Kateqoriyalar
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem onClick={() => this.Changeclass('category')} className="nav-link"   tag={Link} to="/admin-panel/Category"><i className="fa fa-cart-plus"></i>Kateqoriyalar</DropdownItem>
                                    <DropdownItem onClick={() => this.Changeclass('filter')} className="nav-link"   tag={Link} to="/admin-panel/FilterCategory"><i className="fa fa-cart-arrow-down"></i>Filter Kateqoriyalar</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-shopping-cart"></i>Məhsullar
                                </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem onClick={() => this.Changeclass('product')} className="nav-link"   tag={Link} to="/admin-panel/Product"><i className="fa fa-cart-plus"></i>Məhsullar</DropdownItem>
                                    <DropdownItem onClick={() => this.Changeclass('product')} className="nav-link"   tag={Link} to="/admin-panel/product-add"><i className="fa fa-cart-arrow-down"></i>Məhsul əlavə et</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {/* <NavItem className="profile">
                                <Link to="/admin-panel/Profile" className="nav-link" onClick={() => this.Changeclass('profile')}><i className="fa fa-user-circle-o"></i>Profil</Link>
                            </NavItem> */}
                            <NavItem className="backhome">
                                <Link to="/" className="nav-link" onClick={() => this.Changeclass('backhome')}><i className="fa fa-home"></i>Ana səhifəyə keç</Link>
                                        </NavItem>
                                        
                            </Nav>
                        </Collapse>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
                </div>
                )
    }
}
export default AdminHeader;
