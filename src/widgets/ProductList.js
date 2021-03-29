
/**
 * ProductList Widget
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getProductImages } from '../actions/index'


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.AddToWishList = this.AddToWishList.bind(this);

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    static propTypes = {
        images:PropTypes.array.isRequired,
        // getProductImages: PropTypes.func.isRequired,
    }

    // componentDidMount() {
    //     this.props.getProductImages()
    // }


    AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart == null)
            Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductID === ProductID);
        if (selectedProduct == null) {
            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("LocalCartItems");
            localStorage.setItem("LocalCartItems", JSON.stringify(Cart));
            var flag=0;
            if(flag == 0)
            {
                toast.success("Səbətə əlavə edildi");
                flag=1;
            }
        }
        else {
            toast.warning("Səbətdə var");
        }
    }


    AddToWishList(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        if (Cart == null)
            Cart = new Array();

        let selectedProduct = Cart.find(product => product.ProductID === ProductID);
        if (selectedProduct == null) {

            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("LocalWishListItems");
            localStorage.setItem("LocalWishListItems", JSON.stringify(Cart));

            toast.success("Məhsul seçilmişlərə əlavə edildi");
        }
        else {
            toast.warning("Məhsul artıq seçilib");
        }


    }
    CheckCardItem(ID) {
        let checkcart = false;
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }
    CheckWishList(ID) {
        let wishlist = false;
        var Wish = JSON.parse(localStorage.getItem("LocalWishListItems"));

        if (Wish && Wish.length > 0) {
            for (const wishItem of Wish) {
                if (wishItem.ProductID === ID) {
                    wishlist = true
                }
            }
        }
        return wishlist;
    }
    render() {
        const { product,images } = this.props;

        let rat = [];
        let rating = product.rating;
        let i = 1;
        while (i <= 5) {
            if (i <= rating) {
                rat.push(<i className="fa fa-star" />);
            }
            else {
                rat.push(<i className="fa fa-star-o" />);
            }
            i += 1;
        };
        return (
            // <>
            //     {product.name} <br/>
            // </>
            <div key={1} className={this.props.layoutstyle}>
                <ToastContainer autoClose={1000}  draggable={false} /> 
                <div className="product product_tag-black product-hover-style-default product-hover-button-style-light product_title_type-single_line product_icon_type-line-icon">
                    <div className="product-inner element-hovered">
                        <div className="product-thumbnail">
                            <div className="product-thumbnail-inner">
                                <Link to={`/shop/${product.category}/${product.id}`}>
                                    {product.images[0] ?
                                        <div className="product-thumbnail-main">
                                            {/* <img src={require(`../assets/images/${product.images[0]}`)} className="img-fluid" /> */}
                                            {images.map((all_images, ind) => {
                                                    return product.images[0] == all_images.id ?
                                                        <img className="img-fluid" style={{ width: "100%;", height:"auto;"}} key={ind} src={`http://127.0.0.1:8000${all_images.image}`} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                        </div>
                                        :
                                        null
                                    }
                                    {product.images[1] ?
                                        <div className="product-thumbnail-swap">
                                            {/* <img src={require(`../assets/images/${product.images[1]}`)} className="img-fluid" /> */}
                                            {images.map((all_images, ind) => {
                                                    return product.images[1] == all_images.id ?
                                                        <img className="img-fluid" key={ind} src={`http://127.0.0.1:8000${all_images.image}`} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}

                                        </div>
                                        :
                                        null
                                    }
                                </Link>
                            </div>


                            <div className="product-actions">
                                <div className="product-actions-inner">
                                    <div className="product-action product-action-add-to-cart">
                                        {!this.CheckCardItem(product.id) ?
                                            <Link onClick={() => this.AddToCart(product.id, product.name, product.images[0], 1, product.price, "var")} className="button add_to_cart_button" rel="nofollow">Səbətə əlavə et</Link>
                                            :
                                            <Link to="/ShopingCart" className="button add_to_cart_button" rel="nofollow">Səbətə keç</Link>
                                        }
                                    </div>
                                    <div className="product-action product-action-wishlist">
                                        {!this.CheckWishList(product.id) ?
                                            <Link onClick={() => this.AddToWishList(product.id, product.name, product.images[0], 1, product.price, "var")} className="add_to_wishlist" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"> Seçilmişlərə əlavə et</Link>
                                            :
                                            <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">Bəyəndiklərimə keç</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            {/* {product.tags ?
                                <span className="ciyashop-product-category">
                                    {product.tags.map((tag, index) =>
                                        <span>{tag}{index === product.tags.length - 1 ? '' : ', '}</span>
                                    )}
                                </span>
                                : null} */}
                            {product.name ?
                                <h3 className="product-name">
                                    <Link to={`/shop/${product.category}/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                : null}
                            <div className="product-rating-price">
                                {product.price ?
                                    <span className="price">
                                        <ins>
                                            <span className="price-amount amount">
                                                <span className="currency-symbol"></span>{product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} AZN
                                            </span>
                                        </ins>
                                    </span>
                                    : null}
                                {/* <div className="product-rating">{rat}</div> */}
                            </div>
                            <div className="product-actions product-actions-list">
                                <div className="product-actions-inner">
                                    <div className="product-action product-action-add-to-cart">
                                        {!this.CheckCardItem(product.id) ?
                                            <Link onClick={() => this.AddToCart(product.id, product.name, product.pictures[0], 1, product.price, "var")} className="button add_to_cart_button" rel="nofollow">Səbətə əlavə et</Link>
                                            :
                                            <Link to="/ShopingCart" className="button add_to_cart_button" rel="nofollow">Səbətə keç</Link>
                                        }
                                    </div>
                                    <div className="product-action product-action-wishlist">
                                        {!this.CheckWishList(product.id) ?
                                            <Link onClick={() => this.AddToWishList(product.id, product.name, product.pictures[0], 1, product.price, "var")} className="add_to_wishlist" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">Seçilmişlərə əlavə et</Link>
                                            :
                                            <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">View Wishlist</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            {product.description ?
                                <div className="product-details__short-description">
                                    <p>{product.description}
                                    </p>
                                </div>
                                : null}
                            <div>
                                {/* {
                                    this.props.images.map((image, index) => {
                                        return(
                                            <img key={index} src={`http://127.0.0.1:8000${image.image}`}/>
                                        )
                                    })
                                } */}
                                {/* {
                                    product.images.map((image, index) => {
                                        return (
                                            <div className='product-thumbnail-main' key={index}>
                                                {images.map((all_images, ind) => {
                                                    return image == all_images.id ?
                                                        <img key={ind} src={`http://127.0.0.1:8000${all_images.image}`} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    images:state.user.images,
})


export default connect(
    mapStateToProps, {  }
)(ProductList)
