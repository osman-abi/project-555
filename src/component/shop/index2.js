
/**
 *  Shop Main Page
 */
import { Pagination } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ProductList from '../../widgets/ProductList';
import SocialFilter from '../../widgets/shopfilter/SocialInfo';
import SideFilter from '../../widgets/shopfilter/SideFilter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilterProductsdata } from '../../services'
import { getProducts, getProductImages } from '../../actions/index'
import  TopFilter from '../../widgets/shopfilter/TopFilter'
// import products from '../../reducers/products';

const numEachPage = 12;
class ShopPage2 extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            minValue: 0,
            maxValue: 12,
            
        }
    }

    static propTypes = {
        products: PropTypes.array.isRequired,
        images:PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getProducts();
        this.props.getProductImages();

        // if (this.props.products.length >0) {
        //     console.log('true')
        // } else {
        //     console.log('false')
        // }
    }

    componentDidUpdate() {
        console.log('=====>',this.props.products)
    }

    handleChange = value => {
      
        this.setState({ 
          minValue: (value - 1) * numEachPage,
          maxValue: value * numEachPage
        });
    };
    refreshPage = () => {
        window.location.reload(false);
    }
    render() {
        let { products, images } = this.props;
        let layoutstyle = localStorage.getItem('setLayoutStyle')

        if (layoutstyle == null) {
            layoutstyle = localStorage.setItem('setLayoutStyle', 'col-sm-6 col-md-4')
        }


        return (
            <div className="site-content">
                <div className="inner-intro">
                    <Container>
                        <Row className="intro-title align-items-center">
                            <Col md={6} className="text-left">
                                <div className="intro-title-inner">
                                    <h1></h1>
                                </div>
                            </Col>
                            <Col md={6} className="text-right">
                                <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                    <li className="home">
                                        <span>
                                            <Link className="bread-link bread-home" to="/">Ana səhifə</Link>
                                        </span>
                                    </li>
                                    <li><span>Məhsullar</span></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="content-wrapper pt-5 mb-3 mb-md-5">
                    <Container>
                        <Row>
                            <div className="sidebar col-xl-3 col-lg-4 desktop">
                                <div className="shop-sidebar-widgets pt-3">
                                    <SideFilter />
                                    <SocialFilter />
                                    
                                </div>
                            </div>
                            <div className="content col-xl-9 col-lg-8">
                                <div className="products-header">
                                    <div className="loop-header">
                                        <div className="loop-header-tools">
                                            <div className="loop-header-tools-wrapper">
                                                <TopFilter productlength={ products.length }/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {products.length > 0 ?
                                    <Row className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                                        {products.map((product,index) => (
                                                <ProductList product={product} key={index} layoutstyle={layoutstyle} />
                                        ))}
                                        
                                        <div className="text-center col-12">
                                            <Pagination
                                                defaultCurrent={1}
                                                defaultPageSize={numEachPage} //default size of page
                                                onChange={this.handleChange}
                                                total={this.props.products.length} //total number of card data available
                                            />
                                        </div>
                                    </Row>
                                    :
                                    <Row className="products products-loop grid ciyashop-products-shortcode">
                                        <div className="col-sm-12 text-center  mt-5" >
                                            <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4" />
                                            <h3>Təəssüf! Axtardığınız kateqoriyaya uyğun  nəticə tapılmadı </h3>
                                            
                                            <button onClick={this.refreshPage} className="btn btn-solid">Alış verişə davam et</button>
                                        </div>
                                    </Row>
                                }
                            </div>
                    

                        </Row>
                     
                    </Container>

                </div>
            </div>
        )
    }
}
// const mapDispatchToProps = (state) => ({
//     products: getFilterProductsdata(state.data, state.filters)
// })

const mapStateToProps = state => ({
    product: state.user.products,
    images:state.user.images,
    products: getFilterProductsdata(state.user, state.filters)
})

export default connect(
    mapStateToProps, { getFilterProductsdata, getProducts, getProductImages }
)(ShopPage2)
