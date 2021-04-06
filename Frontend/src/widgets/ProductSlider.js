import React, { Component } from 'react'
import Slider from "react-slick";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getProducts, getProductImages } from "../actions/index";

export class ProductSlider extends Component {

    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        getProductImages: PropTypes.func.isRequired,
        images:PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getProducts()
        this.props.getProductImages()
    }

    AddToCart(ProductID,ProductName,ProductImage,Qty,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if(Cart == null)
           Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if(selectedProduct == null)
        {

           Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Qty:Qty,Rate:Rate,StockStatus:StockStatus});
           localStorage.removeItem("LocalCartItems");
           localStorage.setItem("LocalCartItems",JSON.stringify(Cart));

           toast.success("Item Added to Cart");
        }
        else {
           toast.warning("Item is already in Cart");
        }
     }


     CheckCardItem(ID)
     {
        let checkcart=false;
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if(Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }
    CheckWishList(ID)
    {
        let wishlist=false;
        var Wish = JSON.parse(localStorage.getItem("LocalWishListItems"));

        if(Wish && Wish.length > 0) {
            for (const wishItem of Wish) {
                if (wishItem.ProductID === ID) {
                    wishlist = true
                }
            }
        }
        return wishlist;
    }

     AddToWishList(ProductID,ProductName,ProductImage,Qty,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        if(Cart == null)
           Cart = new Array();

           let selectedProduct = Cart.find(product => product.ProductID === ProductID);
           if(selectedProduct == null)
           {

             Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Qty:Qty,Rate:Rate,StockStatus:StockStatus});
              localStorage.removeItem("LocalWishListItems");
              localStorage.setItem("LocalWishListItems",JSON.stringify(Cart));

              toast.success("Item Added to WishList");
           }
           else {
              toast.warning("Item is already in WishList");
           }


     }

    rating(productrat)
     {
        let rat=[];  
        let i = 1;
        while (i <= 5) {
              if(i<=productrat)
              {
                    rat.push(<i className="fa fa-star" />);
              }
              else
              {
                    rat.push(<i className="fa fa-star-o" />);
              }
              i += 1;
        }
        return rat;
     }

    render() {
        const settings = this.props.settings;
        const {images,products} = this.props
    const productSub = this.props.productSub;
    var cloneproduct=[];
    var cnt=0;
    products.map((product) => {
            if(product.filter_category[0]===productSub && cloneproduct.indexOf(product) === -1 && cnt <6 ){
                cloneproduct[cnt]= product;
                cnt++;  
            }
        }
    );
        return (
            <>
               <Col sm={12}>
             <ToastContainer autoClose={1000} />
             <div className="products-listing-items-wrapper products-listing-carousel">
                 <div className="products" data-nav-arrow="false" data-items={4} data-md-items={3} data-sm-items={3} data-xs-items={2} data-xx-items={1} data-space={20}>
                     <Slider {...settings} className="slider-spacing-10 slider-arrow-hover">
                            {cloneproduct.map((product,index) =>

                            <div>
                                <div className="item">
                                    <div className="product product_tag-black product-hover-style-default product-hover-button-style-dark product_title_type-single_line product_icon_type-line-icon">
                                        <div className="product-inner element-hovered">
                                            <div className="product-thumbnail">
                                                <div className="product-thumbnail-inner">
                                                    <a href={`/shop/${product.filter_category[0]}/${product.id}`}> 
                                                        <div className="product-thumbnail-main">
                                    {images.map((all_images, ind) => {
                                                    return product.images[0] == all_images.id ?
                                                        <img className="img-fluid" style={{ width: "100%;", height:"auto;"}} key={ind} src={`http://127.0.0.1:8000${all_images.image}`} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                 {/* <img src={require(`../assets/images/${product.pictures[0]}`)} className="img-fluid" alt="shop" /> */}

                              </div>
                              <div className="product-thumbnail-swap">
                                 {images.map((all_images, ind) => {
                                                    return product.images[1] == all_images.id ?
                                                        <img className="img-fluid" key={ind} src={`http://127.0.0.1:8000${all_images.image}`} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                 {/* <img src={require(`../assets/images/${product.pictures[1]}`)} className="img-fluid" alt="shop" /> */}
                              </div>
                                                    </a>
                                                </div>

                                                <div className="product-actions">
                                                    <div className="product-actions-inner">
                                                        <div className="product-action product-action-add-to-cart">
                                                               {!this.CheckCardItem(product.id) ? 
                                                                    <Link onClick={this.AddToCart(product.id,product.name, product.images[0], 1, product.price, "var")} className="button add_to_cart_button" rel="nofollow">Səbətə əlavə et</Link>
                                                                : 
                                                                    <Link  to="/ShopingCart"  className="button add_to_cart_button" rel="nofollow">View Cart</Link>
                                                                }
                                                        </div>
                                                        <div className="product-action product-action-wishlist">
                                                            {!this.CheckWishList(product.id) ? 
                                                                <Link onClick={this.AddToWishList(product.id,product.name,product.images[0],1,product.price,"var")} className="add_to_wishlist" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"> Seçilmişlərə əlavə et </Link>
                                                            :
                                                                <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">View Wishlist</Link>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                
                                                <h3 className="product-name">
                                                    <a href={`/shop/${product.filter_category[0]}/${product.id}`}>{product.name}</a>
                                                </h3>
                                                <div className="product-rating-price">
                                                
                                                <span className="price">
                                                    <ins>
                                                        <span className="price-amount amount">
                                                            <span className="currency-symbol"></span>{product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                        </span> AZN
                                                    </ins>
                                                </span>
                                                {/* <div className="product-rating">{rating(product.rating)}</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        )}


                      </Slider>
                </div>
            </div>
            
    </Col> 
            </>
        )
    }
}

const mapStateToProps = state => ({
   products: state.user.products,
   images: state.user.images
})

export default connect(mapStateToProps, {getProductImages,getProducts})(ProductSlider)
