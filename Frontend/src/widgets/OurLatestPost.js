/**
 * Top Salling Product Widgets
 */
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { getProducts, getProductImages } from "../actions/index";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyProducts from '../api/product.json'

class OurLatestPost extends Component {

   constructor(props) {
      super(props);
      this.AddToCart = this.AddToCart.bind(this);
      this.AddToWishList = this.AddToWishList.bind(this);
      var AddToCart,AddToWishList
   }

   static propTypes = {
        products: PropTypes.array.isRequired,
      getProducts: PropTypes.func.isRequired,
        getProductImages: PropTypes.func.isRequired
    }

   componentDidMount() {
      this.props.getProducts();
      this.props.getProductImages();
      // console.log(this.props.products)
   }
   
   

  AddToCart(ProductID,ProductName,ProductImage,Qty,Rate,StockStatus) {
   var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
   if(Cart == null)
      Cart = new Array();
   let selectedProduct = Cart.find(product => product.ProductName === ProductName);
   if(selectedProduct == null)
   {

      Cart.push({ProductID:ProductID,ProductName,ProductImage:ProductImage,Qty:Qty,Rate:Rate,StockStatus:StockStatus});
      localStorage.removeItem("LocalCartItems");
      localStorage.setItem("LocalCartItems",JSON.stringify(Cart));

      toast.success("Səbətə əlavə edildi");
   }
   else {
      toast.warning("Səbətdə var");
   }
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

         toast.success("Seçilmişlərə əlavə edildi");
      }
      else {
         toast.warning("Bu məhsuldan seçilmişlərdə var");
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
      const { products, images } = this.props
      //  console.log(products)
       const latest_elements = products.slice(-8)
      return (

         <Row className="products products-loop grid ciyashop-products-shortcode">
              <ToastContainer autoClose={1000} />

            {latest_elements.map((product, index) =>
              (index < 8) ?


              <Col sm={6} lg={3}>

                  <div className="product product_tag-black product-hover-style-default product-hover-button-style-dark product_title_type-single_line product_icon_type-line-icon">
                  <div className="product-inner element-hovered">
                     <div className="product-thumbnail">
                        <div className="product-thumbnail-inner">
                                 <Link to={`/shop/${product.category}/${product.id}`}>
                              <div className="product-thumbnail-main">
                                    {images.map((all_images, ind) => {
                                                    return product.images[0] == all_images.id ?
                                                        <img className="img-fluid" style={{ width: "100%;", height:"auto;"}} key={ind} src={all_images.image} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                 {/* <img src={require(`../assets/images/${product.pictures[0]}`)} className="img-fluid" alt="shop" /> */}

                              </div>
                              <div className="product-thumbnail-swap">
                                 {images.map((all_images, ind) => {
                                                    return product.images[1] == all_images.id ?
                                                        <img className="img-fluid" key={ind} src={all_images.image} />
                                                        :
                                                        <img className="img-fluid" />
                                                })}
                                 {/* <img src={require(`../assets/images/${product.pictures[1]}`)} className="img-fluid" alt="shop" /> */}
                              </div>
                           </Link>
                        </div>
                        <div className="product-actions">
                           <div className="product-actions-inner">
                              <div className="product-action product-action-add-to-cart">
                                 {!this.CheckCardItem(product.id) ?
                                       <Link onClick={()=>this.AddToCart(product.id,product.name,product.images[0],1,product.price,"var")}  className="button add_to_cart_button" rel="nofollow">Səbətə əlavə et</Link>
                                 :
                                       <Link  to="/ShopingCart"  className="button add_to_cart_button" rel="nofollow">Səbəti göstər</Link>
                                 }

                              </div>
                              <div className="product-action product-action-wishlist">
                                 {!this.CheckWishList(product.id) ?
                                    <Link onClick={()=>this.AddToWishList(product.id,product.name,product.images[0],1,product.price,"var")} className="add_to_wishlist" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"> Seçilmişlərə əlavə et</Link>
                                 :
                                       <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">Seçilmişləri göstər</Link>
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="product-info">
                        
                        <h3 className="product-name">
                           <Link to={`/shop/${product.category}/${product.id}`}>{product.name} </Link>
                        </h3>
                        <div className="product-rating-price">
                        <span className="price">
                           <ins>
                              <span className="price-amount amount">
                                 <span className="currency-symbol"></span>{product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} AZN
                              </span>
                           </ins>
                        </span>
                        
                        </div>
                        <div className="product-details__short-description">
                           <p>
                 </p>
                        </div>
                     </div>
                  </div>
               </div>
               </Col>
              :
              <div></div>
            )}

         </Row>
      )
   }
}

const mapStateToProps = state => ({
   products: state.user.products,
   images: state.user.images
})

export default connect(mapStateToProps, { getProducts, getProductImages })(OurLatestPost);
