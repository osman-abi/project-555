
/*
* Post Detail Page
*/
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import { Row } from 'reactstrap';
import { getProductImages,getFilterCategory } from "../../actions/index";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.AddToWishList = this.AddToWishList.bind(this);
        this.state = {
          photoIndex: 0,
          isOpen: false,
          qty:1,
          newImage:''
        };
      }

      static propTypes = {
          filter_category: PropTypes.array.isRequired,
          getFilterCategory:PropTypes.func.isRequired,
          images: PropTypes.array.isRequired,
          getProductImages:PropTypes.func.isRequired
      }

      componentDidMount() {
          var emptyArr = []
          this.props.getProductImages()
          for (const i of this.props.images) {
              for (const j of this.props.product.images) {
                  if (i==j) {
                      emptyArr.push(i.image)
                      this.setState({
                          newImage:emptyArr[0]
                      })
                  }
              }
          }
          this.props.getFilterCategory()
      }

    changePreviewImage(image) {
        this.setState({
           newImage: image,
           tabid:1
        });
    }

    // Add To Cart
    AddToCart(ProductID,ProductName,ProductImage,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if(Cart == null)
           Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if(selectedProduct == null)
        {

           Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Rate:Rate,StockStatus:StockStatus});
           localStorage.removeItem("LocalCartItems");
           localStorage.setItem("LocalCartItems",JSON.stringify(Cart));

           toast.success("Səbətə əlavə edildi");
        }
        else {
           toast.warning("Səbətdə var");
        }
     }

     AddToWishList(ProductID,ProductName,ProductImage,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        if(Cart == null)
           Cart = new Array();

           let selectedProduct = Cart.find(product => product.ProductID === ProductID);
           if(selectedProduct == null)
           {

              Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Rate:Rate,StockStatus:StockStatus});
              localStorage.removeItem("LocalWishListItems");
              localStorage.setItem("LocalWishListItems",JSON.stringify(Cart));

              toast.success("Item Added to WishList");
           }
           else {
              toast.warning("Item is already in WishList");
           }


     }

     PlusQty = () => {
        this.setState({
            qty:this.state.qty+1
        })
    }

    MinusQty = () => {
        if(this.state.qty > 1)
        {
            this.setState({
                qty:this.state.qty-1
            })
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

    render() {
        const { photoIndex, isOpen  } = this.state;
        const qty=this.state.qty;
        const {product, images, filter_categories} = this.props;
        const sekiller=[];
        {product.images.map((pic)=>
            images.map((photo) => {
                if (pic == photo.id) {
                    sekiller.push(photo.image)
                    
                }
            })
                
            
        )}

        let rat=[];
        let rating=product.rating;
        let i = 1;
        while (i <= 5) {
            if(i<=rating)
            {
                rat.push(<i className="fa fa-star" />);
            }
            else
            {
                rat.push(<i className="fa fa-star-o" />);
            }
            i += 1;
        };

        return (
         <section>
            <div className="product-content-top single-product">
                <Row>
                <div className="product-top-left col-xl-5 col-md-6">
                    <div className="product-top-left-inner">
                        <div className="ciyashop-product-images">
                        <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                            <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                            <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                <div className="ciyashop-product-gallery__image">
                                        <img src={this.state.newImage}  className="img-fluid" />
                                </div>
                            </Slider>
                            <div className="ciyashop-product-gallery_buttons_wrapper">
                                <div className="ciyashop-product-gallery_button ciyashop-product-gallery_button-zoom popup-gallery" onClick={() => this.setState({ isOpen: true })} >
                                <Link to="#" className="ciyashop-product-gallery_button-link-zoom">
                                    <i className="fa fa-arrows-alt" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="ciyashop-product-thumbnails">
                                            {images.map((cover, index) => {
                                                return (
                                                     <Slider key={index} {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                        {product.images.map((photo, index) => {
                                                            return photo==cover.id ? 
                                                            <div key={index} className="ciyashop-product-thumbnail__image">
                                                                <Link onMouseOver={() => this.changePreviewImage(cover.image)} >
                                                                    <img src={cover.image} className="img-fluid" />
                                                                </Link>
                                                                </div>
                                                                : null
                                                        })}
                                                        {/* {product.images[0] == cover.id ? */}
                                                        
                                                            {/* : null} */}
                                                        
                                                    </Slider> 
                                        
                                    )
                                })}
                                
                            </div>
                            <div className="clearfix" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="product-top-right col-xl-7 col-md-6">
                <div className="product-top-right-inner">
                    <div className="summary entry-summary">
                    <h1 className="product_title entry-title">{product.name}</h1>
                    {/* <div className="product-rating">
                        <div className="star-rating">
                           {rat}
                        </div>
                        <p  className="review-link mt-2" >(<span className="count">{rating}</span> customer
                        reviews)</p>
                    </div> */}
                    <p className="price">{`${(product.price).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`} AZN</p>
                    <div className="product-details__short-description">
                        <div className="pdp-about-details-txt pdp-about-details-equit">
                            {product.description}
                        </div>
                    </div>
                    <form className="cart">
                        <div className="quantity">
                        <label className="screen-reader-text" htmlFor="quantity_5cdab503cf26f">Miqdar</label>
                         <input type="text" className="input-text qty text" value={qty} title="Qty" />
                            <div className="quantity-nav">
                                    <Link className="quantity-button quantity-up" onClick={() => this.PlusQty()} >+</Link>
                                     <Link className="quantity-button quantity-down" onClick={() => this.MinusQty()} >-</Link>
                            </div>
                        </div>
                        {!this.CheckCardItem(product.id) ?
                                       <Link onClick={()=>this.AddToCart(product.id,product.name,product.images[0],product.price,"var")}  className="button single_add_to_cart_button" rel="nofollow">Səbətə əlavə et</Link>
                                 :
                                       <Link  to="/ShopingCart"  className="button single_add_to_cart_button" rel="nofollow">Səbətə keçid et</Link>
                                 }
                        <div className="clearfix" />
                    </form>
                    <div className="product-summary-actions">

                                {!this.CheckWishList(product.id) ?
                                 <div className="add-to-wishlist">
                                <Link onClick={()=>this.AddToWishList(product.id,product.name,product.images[0],product.price,"var")}>
                                Seçilmişlərə əlavə et
                                </Link>
                                </div>
                                :
                                <div className="add-to-wishlist-fill">
                                <Link to="/wishlist" >Seçilmişləri göstər</Link>
                                </div>
                                }

                    </div>
                    <div className="product_meta">
                        <span className="sku_wrapper">
                        <label>İD:</label>
                        <span className="sku">
                            {product.id} </span>
                                        </span>
                                        {filter_categories.map((filtered, i) => {
                                            return filtered.parent == null ? <span className="size">
                                            
                        <label key={i}>{filtered.name}:</label>
                            {product.filter_category.map((category,index)=>

                            
                                <span key={index} itemProp="size">
                                    {filter_categories.map((filtercat, i) => {
                                       return filtercat.id == category && filtercat.parent == filtered.id ?<Link to="#" rel="tag">{filtercat.name}</Link>:null
                                    })}
                                    
                               
                                 </span>
                            )}
                         </span>: null
                                        })}
                                        
                      {/*  <span className="posted_in"><label>Kategpriya:</label>
                            {product.category}
                        </span>
                        <span className="brands">
                        <label>Marka:</label> */}
                            {/* {product.tags.map((brand,index)=>
                                <span itemProp="brand">
                                    <Link to="#" rel="tag">{brand}{index === product.tags.length-1 ?'':','}</Link>
                                </span>
                            )} */}
                        {/* </span> */}
                    </div>
                    <div className="social-profiles">
                        <span className="share-label">Paylaş :</span>
                        <ul className="share-links">
                        <li>
                            <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                            <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" className="share-link twitter-share" target="popup">
                            <i className="fa fa-whatsapp" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" className="share-link linkedin-share" target="popup">
                            <i className="fa fa-instagram" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="ciyashop-sticky-btn">
                        <div className="ciyashop-sticky-btn-container container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                            <div className="ciyashop-sticky-btn-content">
                                <div className="ciyashop-sticky-btn-thumbnail">
                                {/* <img src={require(`../../assets/images/products/product-01.jpg`)}  className="img-fluid" alt /> */}
                                </div>
                                <div className="ciyashop-sticky-btn-info">
                                                            <h4 className="product-title">{ product.name}</h4>
                               
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="ciyashop-sticky-btn-cart">
                                <div className="wishlist-compare-button">
                                <div className="product-action product-action-wishlist">
                                    <Link to="#" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">
                                    Seçilmişləri göstər
                                    </Link>
                                </div>
                                <div className="product-action product-action-compare">
                                    <Link to="#" className="compare button" data-toggle="tooltip" data-original-title="Compare" data-placement="top">Compare
                                    </Link>
                                </div>
                                </div>
                                                        <span className="price">{ product.price}</span>
                                <form className="cart">
                                <div className="quantity">
                                    <label className="screen-reader-text" htmlFor="quantity_5cdab503cf26f">Miqdar</label>
                                    <input type="number" id="quantity_5cdab503cf26f" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="Qty" size={4} pattern="[0-9]*" inputMode="numeric" aria-labelledby />
                                    <div className="quantity-nav">
                                    <div className="quantity-button quantity-up">+</div>
                                    <div className="quantity-button quantity-down">-
                                    </div>
                                    </div>
                                </div>
                                <button type="submit" className="single_add_to_cart_button button alt">Səbətə əlavə et</button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Row>
            </div>
        <div>


            {isOpen && (
              <Lightbox
                mainSrc={sekiller[photoIndex]}
                nextSrc={sekiller[(photoIndex + 1) % sekiller.length]}
                prevSrc={sekiller[(photoIndex + sekiller.length - 1) % sekiller.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                enableZoom={false}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + sekiller.length - 1) % sekiller.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % sekiller.length,
                  })
                }
              />
            )}
          </div>

        </section>




        )
    }
}

const mapStateToProps = state => ({
    images: state.user.images,
    filter_categories:state.user.filter_category    
})
export default connect(mapStateToProps, {getProductImages,getFilterCategory})(PostDetail)

