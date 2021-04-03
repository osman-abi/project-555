/**
 *  Admin Site Product Add
 */
import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../../actions/index";
import { Container, FormGroup, Input, Label, Row } from 'reactstrap';

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
const productdata = {
    Product_single: "product-single.jpg",
    product_gallery: [
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
       
    ],
    size:[
        "M",
        "L",
        "XXL",
        "S"
    ],
    colors:[
        "Black",
        "Red",
        "Blue",
        "Green"
    ],
    tags:[
        "Athleisure",
        "Jacket",
        "Women",
        "Clothing",
        "Blazers"
    ]

 }
class Productadd extends Component{
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                price: "",
                description: "",
                category: [],
                filter_category: [],
                stock_status: false,
                best_seller:false,
                pictures: [],
                photos: [],
                photoIndex: 0,
                isOpen: false,
                ErrorMsg:""
            };
            this.Uploadimage = this.Uploadimage.bind(this);
    }
    
    static propTypes = {
        addProduct:PropTypes.func.isRequired
    }

        Uploadimage(picture) {
            if(picture == '')
            {
                this.setState({
                    ...this.state,
                    ErrorMsg:"File Not Supported"
                })
            }
            else
            {
                const files = picture
                const formData = new FormData();
                formData.append('image', files[0]);
                
                fetch('http://167.172.107.236/images/product_image/', {
                    method: 'POST',
                     headers: {
            // 'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2Njc4OTIwLCJqdGkiOiI3YzBjMDNlOWY0YTU0YWQ2YWYxYTRjMzk0NWM5YTY4NiIsInVzZXJfaWQiOjF9.MlkIAa9CO7Cg2ev21O9IDneqzgw78YLZoq4WsOaCmaA'
        },
                    body: formData

                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data)
                        this.state.photos.push(data.id)
                        this.setState({
                            pictures: this.state.pictures.concat(picture),
                            photos: this.state.photos,
                            ErrorMsg:''
                        });
                    });
                // console.log(picture)
            }
        }
        componentDidUpdate() {
            window.scrollTo(0, 0)
            // console.log(this.state.stock_status)
    }
    
    //dispatch products to apis

    onChangeBestSeller = (e) => {
        e.preventDefault();
        this.setState({
            best_seller:true
        })
    }

    onChangeStockStatus = (e) => {
        e.preventDefault();
        this.setState({
            stock_status: true
        })
    };
    onChangeCategory = (e) => {
        this.setState({
            category: e.target.value.split(",")
        })
    };

    onChangeFilterCategory = e => {
        this.setState({
            filter_category:e.target.value.split(",")
        })
    }

    onChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    onChangePrice = e => {
        this.setState({
            price: e.target.value
        })
    }

    onChangeDescription = e => {
        this.setState({
            description: e.target.value
        })
    }

    submitForm = e => {
        e.preventDefault();
        const { name, price, description,category,filter_category,photos } = this.state;
        const products = { name, price, description, category, filter_category, photos };
        this.props.addProduct(products)
        alert(this.state.photos)
    }
    render() {
          const { name, price, description,category, filter_category } = this.state;
        return(
                <div>
                    <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <div className="product-content-top single-product single-product-edit">
                                    <Row>
                                        <div className="product-top-left col-xl-5 col-md-6">
                                            <div className="product-top-left-inner">
                                                <div className="ciyashop-product-images">
                                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                                    {/* <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel"> */}
                                                    {/* <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                                        <div className="ciyashop-product-gallery__image">
                                                                <img src={require(`../../../assets/images/${productdata.Product_single}`)}   className="img-fluid" />
                                                        </div>

                                                    </Slider> */}

                                                    {/* </div> */}
                                                    <div className="ciyashop-product-thumbnails">
                                                      
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productdata.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a href="javascript:void(0)">
                                                                            <img src={require(`../../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                                             <ImageUploader
                                                                                buttonText=""
                                                                                withIcon={false}
                                                                                withPreview={true}
                                                                                fileTypeError={this.state.ErrorMsg}
                                                                                onChange={this.Uploadimage}
                                                                                imgExtension={['.jpg', '.jpeg', '.png']}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                    <div className="clearfix" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                       <div className="product-top-right col-xl-7 col-md-6">
                                        <div className="product-top-right-inner">
                                            <div className="summary entry-summary">
                                                <form onSubmit={this.submitForm}>
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control product_title" onChange={this.onChangeName} value={name} placeholder="Məhsulun adı"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control price" onChange={this.onChangePrice} value={price} placeholder="Məhsulun qiyməti"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input  type="textarea" className="form-control" rows="3" onChange={this.onChangeDescription} value={description} placeholder="Məhsulun xüsusiyyətləri" />
                                                        </FormGroup>
                                                        <Label className="title">Məhsulun Kateqoriyası</Label>
                                                    <FormGroup>
                                                         <Input type="text" className="form-control product_title" onChange={this.onChangeCategory} value={category} placeholder="Məhsulun Sub Kateqoriyası"  />
                                                    </FormGroup>
                                                    <Label className="title">Məhsulun Filter Kateqoriyası</Label>
                                                    <FormGroup>
                                                         <Input type="text" className="form-control product_title" onChange={this.onChangeFilterCategory} value={filter_category} placeholder="Məhsulun Sub Filter Kateqoriyası"  />
                                                        </FormGroup>
                                                       <Label className='title'>Anbarda?</Label>
                                                        <FormGroup >
                                                            
                                                        <Label className='mb-4'>
                                                        <Input type="checkbox" onChange={ this.onChangeStockStatus}/>  
                                                        </Label>
                                                </FormGroup>
                                                <Label className='title'>Ən çox satılan?</Label>
                                                        <FormGroup >
                                                            
                                                        <Label className='mb-4'>
                                                            <Input type="checkbox" onClick={this.onChangeBestSeller}/> true
                                                        </Label>
                                                        </FormGroup>

                                                        <input type='submit' class="btn btn-primary mb-2 mr-2" value='Yadda Saxla'/>
                                                    <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> İmtina et </Link>
                                                    </form>
                                            </div>
                                                </div>
                                        </div>
                                    </Row>
                                    </div>
                            </Container>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(null, { addProduct })(Productadd)
// export default Productadd;
