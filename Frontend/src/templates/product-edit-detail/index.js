/*
* Admin Site Product Edit Page
*/
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ImageUploader from 'react-images-upload';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FormGroup, Input, Label, Row } from 'reactstrap';

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

const productData = {
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
}

class ProductEditDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pictures: [] ,
          photoIndex: 0,
          isOpen: false,
        };
      }

    state = {
        newImage: 'product-01.jpg',
        name: "",
        price: "",
        description: "",
        category: [],
        photos:[],
        filter_category:[]
    }
    

     componentDidMount() {
        this.setState({
           newImage: 'product-01.jpg'
        })
     }

    //function for preview images
    changePreviewImage(image) {
        this.setState({
           newImage: image
        });
    }


    ImageChange(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    changeProductName = e => {
        this.setState({
            name:e.target.value
        })
    }

    changeProductPrice = e => {
        this.setState({
            price:e.target.value
        })
    }

    changeProductDescription = e => {
        this.setState({
            description:e.target.value
        })
    }

    changeProductCategory = e => {
        this.setState({
            category:e.target.value.split(',')
        })
    }

    changeFilterCategory = e => {
        this.setState({
            filter_category: e.target.value.split(',')
        })
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
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3OTYzMTI5LCJqdGkiOiJmMWYzMDM0NjYzZDY0NTg0OTRhZjg4N2YwZGU5ZDA1YiIsInVzZXJfaWQiOjF9.Nx0LsetcdDpahrq-4EbmS7rDgyUy-oFBhXdVgE_KrkE'
            },
                    body: formData

                })
                    .then(response => response.json())
                    .then(data => {
                        this.state.photos.push(data.id)
                        this.setState({
                            photos: this.state.photos,
                            ErrorMsg:''
                        });
                    });
                // console.log(picture)
            }
        }
    

    updateProduct = e => {
        e.preventDefault();
        // console.log(this.props.product.id)
        const { name, price, description, category, filter_category, photos } = this.state
        const data = { name, price, description, category, filter_category, photos }
        fetch(`http://167.172.107.236/products/${this.props.product.id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("access_token")
            },
            body:JSON.stringify(data)
        }).then(res=>console.log(res.json()))
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        const {product} = this.props;
        const images=[];
        // {product.pictures.map((pic)=>
        //     images.push(require(`../../assets/images/${pic}`))
        // )}
        return (
            <section>
                <div className="product-content-top single-product single-product-edit">
                    <Row>
                        <div className="product-top-left col-xl-5 col-md-6">
                            <div className="product-top-left-inner">
                                <div className="ciyashop-product-images">
                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                        <div className="ciyashop-product-gallery__image">
                                                {/* <img src={require(`../../assets/images/${product.images[0]}`)}  className="img-fluid" /> */}
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
                                                      
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productData.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a href="javascript:void(0)">
                                                                            <img src={require(`../../assets/images/${pictureimage}`)}  className="img-fluid" />
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
                                        
                                        
                                        
                                        
                                        
                                        
                                        {/* <div className="ciyashop-product-thumbnails">
                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                            {product.images.map((pictureimage,index) =>
                                                <div key={index}>
                                                    <div className="ciyashop-product-thumbnail__image">
                                                        
                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                            <ImageUploader
                                                                buttonText=""
                                                                onChange={() => this.ImageChange()}
                                                                withPreview
                                                                withIcon={false}
                                                                maxFileSize={5242880}
                                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            )}
                                        </Slider>
                                    </div> */}
                                    <div className="clearfix" />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-top-right col-xl-7 col-md-6">
                            <div className="product-top-right-inner">
                                
                                <div className="summary entry-summary">
                                    <form onSubmit={ this.updateProduct}>
                                        <FormGroup className="edit-icon">
                                            <Input type="text" className="form-control product_title" onChange={this.changeProductName} placeholder="Product Name" defaultValue={product.name} />
                                        </FormGroup>
                                        <FormGroup className="edit-icon">
                                            <Input type="text" className="form-control price" onChange={this.changeProductPrice} placeholder="Product Price" defaultValue={`$${product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`} />
                                        </FormGroup>
                                        <FormGroup className="edit-icon">
                                            <Input  type="textarea" className="form-control" rows="3" onChange={this.changeProductDescription} placeholder="Product Description" defaultValue={product.description} />
                                        </FormGroup>
                                        
                                        <Label className="title">Category</Label>
                                        <Input type="text" class="form-control" placeholder="Product Category" onChange={this.changeProductCategory} defaultValue={product.category} />
                                          
                                                    <Label className="title">Məhsulun Filter Kateqoriyası</Label>
                                                    <FormGroup>
                                                         <Input type="text" className="form-control product_title" onChange={this.changeFilterCategory} value={product.filter_category} placeholder="Məhsulun Sub Filter Kateqoriyası"  />
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
                                                            <Input type="checkbox" id='check' onClick={this.onChangeBestSeller}/> 
                                                        </Label>
                                                        </FormGroup>
                                        {/* <Label className="title">Brand</Label> */}
                                        

                                        {/* <Label className="title">Total Products</Label>
                                        <input type="text" className="form-control" placeholder="Total Product" defaultValue={product.stock}></input>

                                        <Label className="title">Product Stock</Label>
                                        <input type="text" class="form-control" placeholder="Product Stock" defaultValue={product.stock}></input> */}

                                        <button type='submit' class="btn btn-primary mb-2 mr-2"> Update </button>
                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                    </form>
                                    </div>
                                </div>
                        </div>
                    </Row>
                    </div>



                    <div>


                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                                }
                            />
                        )}
                    </div>

        </section>




        )
    }
}
export default ProductEditDetail;

