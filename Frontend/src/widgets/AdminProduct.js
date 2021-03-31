
/**
 * Admin List Product Display
 **/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, getProductImages,deleteProduct } from "../actions/index"


class AdminproductList extends Component {
    constructor(props){
        super(props);
        this.toggle1 = this.toggle1.bind(this);

        this.state = {
            open: false,
            modal1: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    static propTypes = {
        images: PropTypes.array.isRequired,
        getProductImages: PropTypes.func.isRequired,
        deleteProduct:PropTypes.func.isRequired
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getProductImages();
        // console.log(this.props.images)
    }

    toggle1() {
        this.setState(prevState => ({
          modal1: !prevState.modal1
        }));
    }
    onDeleteInvoicePopup()
    {
        this.toggle1();
    }
    render() {
        const {images, product, deleteproduct } = this.props;
    return (


             <Col key={1} sm={6} lg={3}>
                    <ToastContainer autoClose={1000} />
                     <div className="product product_tag-black product-hover-style-default product-hover-button-style-light product_title_type-single_line product_icon_type-line-icon">
                        <div className="product-inner element-hovered">
                        <div className="product-thumbnail">
                            <div className="product-thumbnail-inner">
                            <Link to="#">
                              
                                    <div className="product-thumbnail-main">
                                        {images.map((imag, index) => {
                                            {
                                               return imag.id == product.images[0] ? <img key={index} src={`http://127.0.0.1:8000${imag.image}`} className="img-fluid" />
                                                    :
                                                    null
                                            }
                                        })}
                                    </div>
                               
                                {product.images[1]  ?
                                    <div className="product-thumbnail-swap">
                                        {images.map((imag, index) => {
                                            {
                                               return imag.id == product.images[1] ? <img key={index} src={`http://127.0.0.1:8000${imag.image}`} className="img-fluid" />
                                                    :
                                                    null
                                            }
                                        })}
                                            {/* <img src={require(`../assets/images/${product.pictures[1]}`)} className="img-fluid" /> */}
                                    </div>
                                    :
                                    null
                                }
                            </Link>
                            </div>
                            <div className="product-action product-action-quick-view">
                                <Link to={`/admin-panel/Product-edit/${product.category[0]}/${product.id}`} className="open-edit-view"><i class="fa fa-pencil-square-o"></i></Link>
                                <Link to="#" className="product-delete" onClick={() => this.onDeleteInvoicePopup()} ><i class="fa fa-trash-o"></i></Link>
                            </div>
                            <div className="product-actions">
                            </div>
                        </div>
                        <div className="product-info">
                            {/* {product.tags ?
                                   <span className="ciyashop-product-category">
                                    {product.tags.map((tag,index) =>
                                            <span>{tag}{index === product.tags.length-1 ?'':','}
                                            </span>

                                     )}
                                </span>
                            : null } */}
                            {product.name ?
                            <h3 className="product-name">
                                <Link to="#">{product.name}</Link>
                            </h3>
                            : null }
                            {product.price ?
                                <span className="price">
                                <ins>
                                    <span className="price-amount amount">
                                    <span className="currency-symbol">$</span>{product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                    </span>
                                </ins>
                                </span>
                            : null }
                            {/* {product.description ?
                            <div className="product-details__short-description">
                            <p>{product.description}
                            </p>
                            </div>
                            : null } */}
                        </div>
                </div>
                    </div>
            

                    {/* modal-delete */}
                    <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="modal-delete modal-lg modal-dialog-centered">
                        <ModalHeader toggle={this.toggle1}  ></ModalHeader>
                        <ModalBody>
                             Məhsulu silmək istədiyinizə əminsiniz mi?
                        </ModalBody>
                        <ModalFooter className="justify-content-center pt-4" >
                            <Link className="action-button" to='#' onClick={this.props.deleteProduct.bind(this,product.id)}>Bəli</Link>
                            <Link className="action-button no"  onClick={this.toggle1}>Xeyr</Link>
                        </ModalFooter>
                    </Modal>
                </Col>
        )
    }

}

const mapStateToProps = state => ({
    images: state.user.images
})

export default connect(mapStateToProps, {getProductImages,deleteProduct})( AdminproductList);
