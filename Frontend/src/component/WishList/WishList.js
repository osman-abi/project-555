/**
 *  WishList Page Set
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Col, Container, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getProductImages } from '../../actions/index'

class WishList extends Component {

    constructor(props) {
        super(props);
        this.ReadWishListItems = this.ReadWishListItems.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
    }

    static propTypes = {
        images:PropTypes.array.isRequired,
        getProductImages: PropTypes.func.isRequired,
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getProductImages();
    }

    ReadWishListItems() {
        return JSON.parse(localStorage.getItem("LocalWishListItems"));

    }

    AddToCart(ProductName, ProductImage, Qty, Rate, StockStatus, Index) {
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart == null)
            Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if (selectedProduct == null) {

            Cart.push({ ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("LocalCartItems");
            localStorage.setItem("LocalCartItems", JSON.stringify(Cart));

            toast.success("Səbətə əlavə edildi");
            var UpdatedCart1 = JSON.parse(localStorage.getItem("LocalWishListItems"));
            UpdatedCart1 = UpdatedCart1.slice(0, Index).concat(UpdatedCart1.slice(Index + 1, UpdatedCart1.length));
            localStorage.removeItem("LocalWishListItems");
            localStorage.setItem("LocalWishListItems", JSON.stringify(UpdatedCart1));

        }
        else {
             var UpdatedCart1 = JSON.parse(localStorage.getItem("LocalWishListItems"));
             UpdatedCart1 = UpdatedCart1.slice(0, Index).concat(UpdatedCart1.slice(Index + 1, UpdatedCart1.length));
             localStorage.removeItem("LocalWishListItems");
             localStorage.setItem("LocalWishListItems", JSON.stringify(UpdatedCart1));
             toast.success("Məhsul seçilmişlər siyahısından silinir");

        }
     }

    removeFromWishList = (Index) => {
        var UpdatedCart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        
        localStorage.removeItem("LocalWishListItems");
        localStorage.setItem("LocalWishListItems", JSON.stringify(UpdatedCart));
    }

    render() {
        const {images} = this.props
        return (

            <div className="site-content">
              <ToastContainer autoClose={2500} />

                <div class="inner-intro"><div class="container"><div class="intro-title align-items-center row"><div class="col-md-6">
                    <div class="intro-title-inner"><h1>Seçilmişlər</h1></div></div><div class="text-right col-md-6">
                        <ul class="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                <li class="home">
                                    <span>
                                        <Link class="bread-link bread-home" to="/">Ana səhifə</Link>
                                    </span>               
                                </li>
                                <li>
                                    <span>Seçilmişlər</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <div className="content-wrapper section-ptb">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                {(this.ReadWishListItems() != null && this.ReadWishListItems().length > 0) ?
                                    <div className="table-responsive">
                                        <Table className="table wishlist-table cart-table">
                                            <thead>
                                                <tr>
                                                    <th clas="product-remove"></th>
                                                    <th className="product-thumbnail" />
                                                    <th className="product-name">
                                                        <span className="nobr">Məhsulun adı</span>
                                                    </th>
                                                    <th className="product-price">
                                                        <span className="nobr">
                                                            Qiymət </span>
                                                    </th>
                                                    <th className="product-stock-status">
                                                        <span className="nobr">
                                                            Anbarda var ? </span>
                                                    </th>
                                                    <th className="product-add-to-cart" />
                                                </tr>


                                                {this.ReadWishListItems().map((CartItem, index) => (
                                                    <tr>
                                                        <td className="product-remove">
                                                            <Link onClick={() => this.removeFromWishList(index)} className="remove"></Link>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <Link to="#">
                                                                {
                                                                    images.map((image, index) => {
                                                                        return image.id == CartItem.ProductImage ?
                                                                        <img key={index} src={`http://127.0.0.1:8000${image.image}`} alt="product" />
                                                                            :
                                                                            null
                                                                    })
                                                                }
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            {CartItem.ProductName}
                                                        </td>
                                                        <td className="product-price">
                                                            {CartItem.Rate} AZN
                                                        </td>
                                                        <td className="product-stock-status">
                                                            <span className="wishlist-in-stock">{CartItem.StockStatus}</span>
                                                        </td>
                                                        <td className="product-add-to-cart">
                                                            <Link onClick={() => this.AddToCart(CartItem.ProductName, CartItem.ProductImage, 1, CartItem.Rate, CartItem.StockStatus, index)} className="add_to_cart_button">Səbətə əlavə et</Link>
                                                        </td>
                                                    </tr>

                                                ))}

                                            </thead>
                                        </Table></div>
                                    :
                                    <div className="wishlist-not-found">
                                    <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4" />
                                    <h4 className="d-block">Seçilmişlər boşdur</h4>
                                    <Link to="/sidebar-without-lazyload" className="btn btn-solid">Alış-verişə davam et</Link>
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Container>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images:state.user.images,
})


export default connect(
    mapStateToProps, { getProductImages }
)(WishList)