/**
 *  Shop Product Detail Page
 */
import React , {Component} from 'react';
import PostDetail from '../../templates/post-detail';
import ProductSlider from '../../widgets/ProductSlider';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Nav, NavItem, NavLink,TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const relatedslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }

    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
        }
    }
  ]
};

class ProductDetail extends Component {
    constructor(props)
    {
         super(props);
         this.state={
             AllProduct:this.props.products,
             ProductId:parseInt(this.props.match.params.id),
             CurrentProduct:null,
             activeTab: '1',
             ////////////////
             
             firstname: "",
             email: "",
             commentt:""
         }
         this.toggle = this.toggle.bind(this);
    }

    componentDidMount()
    {
        window.scrollTo(0, 0)
        let CurrentProductId=this.state.ProductId;
        let allproductdata=this.state.AllProduct;
        if(allproductdata && allproductdata.length > 0)
        {
            allproductdata.map((product)=>{
                if(product.id === CurrentProductId)
                {
                    this.setState({
                        ...this.state,
                        CurrentProduct:product
                    })
                }
            })
        }
    }

    changeName = e => {
        this.setState({
            firstname:e.target.value
        })
    }

    changeEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    changeComment = e => {
        this.setState({
            commentt:e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();
        const data = {
            product: this.state.CurrentProduct.id,
            firstname: this.state.firstname,
            email: this.state.email,
            commentt: this.state.commentt
        }
        fetch('https://1klikle.az/api/products/comments/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    render() {
        const Productedit = this.state.CurrentProduct;
        const {firstname,email,commentt} = this.state
        
     return (
       
        <div>
            {Productedit !== null ?
                <div className="site-content">
                    <div className="inner-intro">
                    <Container>
                        <Row className="intro-title align-items-center">
                            <div className="col-12">
                                <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                <li className="home">
                                    <span>
                                    <Link className="bread-link bread-home" to="/">Ana səhifə</Link>
                                    </span>
                                </li>
                                    <li>Məhsulun Kategoriyasi</li>
                                     <li>Məhsulun adı</li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="content-wrapper section-ptb">
                    <Container>
                        <PostDetail  product={Productedit} tabid={this.state.activeTab} />
                        <div className="product-content-bottom">

                            <Nav tabs >
                                <NavItem active>
                                    <NavLink   className={classnames({ active: this.state.activeTab === '1' })}  onClick={() => { this.toggle('1'); }}>Məhsulun xüsusiyyətləri</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className={classnames({ active: this.state.activeTab === '2' })}  onClick={() => { this.toggle('2'); }}>Rəy bildirin</NavLink>
                                </NavItem>
                                {/* <NavItem disabled>
                                    <NavLink  className={classnames({ active: this.state.activeTab === '3' })}  onClick={() => { this.toggle('3'); }}>Custom tab</NavLink>
                                </NavItem> */}
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                        <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="home-tab">
                                                <h2>What is Lorem Ipsum?</h2>
                                                <p><strong>Lorem Ipsum</strong> {Productedit.description} </p>
                                                Link
                                                <div className="product-info-box border-top border-bottom mt-5  pt-4 pt-lg-0 pb-2 pb-sm-0">
                                                    <Row>
                                                    <Col sm={6} md={4}>
                                                        <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                                        <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                                            <div className="ciyashop_info_box_2-icon">
                                                            <div className="ciyashop_info_box_2-icon-wrap">
                                                                <div className="ciyashop_info_box_2-icon-outer">
                                                                <div className="ciyashop_info_box_2-icon-inner">
                                                                    <i className="glyph-icon pgsicon-ecommerce-delivery-truck-1" /> </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="ciyashop_info_box_2-content">
                                                            <div className="ciyashop_info_box_2-content-wrap">
                                                                <div className="ciyashop_info_box_2-content-inner">
                                                                <h6 className="ciyashop_info_box_2-title inline_hover"> Çatdırılma </h6>
                                                                
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6} md={4} className="py-3 py-md-0">
                                                        <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                                        <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                                            <div className="ciyashop_info_box_2-icon">
                                                            <div className="ciyashop_info_box_2-icon-wrap">
                                                                <div className="ciyashop_info_box_2-icon-outer">
                                                                <div className="ciyashop_info_box_2-icon-inner">
                                                                    <i className="glyph-icon pgsicon-ecommerce-headphones-1" /> </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="ciyashop_info_box_2-content">
                                                            <div className="ciyashop_info_box_2-content-wrap">
                                                                <div className="ciyashop_info_box_2-content-inner">
                                                                <h6 className="ciyashop_info_box_2-title inline_hover">
                                                                Keyfiyyətli Xidmət: </h6>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6} md={4}>
                                                        <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                                        <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                                            <div className="ciyashop_info_box_2-icon">
                                                            <div className="ciyashop_info_box_2-icon-wrap">
                                                                <div className="ciyashop_info_box_2-icon-outer">
                                                                <div className="ciyashop_info_box_2-icon-inner">
                                                                    <i className="glyph-icon pgsicon-ecommerce-reload" /> </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="ciyashop_info_box_2-content">
                                                            <div className="ciyashop_info_box_2-content-wrap">
                                                                <div className="ciyashop_info_box_2-content-inner">
                                                                <h6 className="ciyashop_info_box_2-title inline_hover">Tam Zəmanət</h6>
                                                                
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    </Row>
                                                </div>
                                                </div>

                                            </div>

                                </TabPane>
                                <TabPane tabId="2">
                                <div className="product-reviews">
                                    <h6>Rəy bildir</h6>
                                    <form onSubmit={this.addComment}>
                                       <div class="form-group">
                                        <label>Ad</label>
                                        <input type="text" onChange={this.changeName} value={firstname} class="form-control"></input>
                                      </div>
                                      <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" onChange={this.changeEmail} value={email} class="form-control"></input>
                                      </div>
                                      
                                      <div class="form-group">
                                        <label>Rəyiniz </label>
                                        <textarea class="form-control" onChange={this.changeComment} value={commentt} rows="3"></textarea>
                                      </div>
                                      
                                       <div class="form-group">
                                        <button type='submit' class="btn btn-primary">Təsdiqlə</button>
                                      </div>


                                    </form>
                                    </div>
                                </TabPane>
                            </TabContent>
                            <div className="related products">
                                <h2>Oxşar məhsullar</h2>
                                <div className="row">
                                    <ProductSlider productSub={Productedit.subcategory}  settings={relatedslider} />
                                </div>
                            </div>
                            </div>
                    </Container>
                </div>
                </div>
         :
            null
        }
        </div>
        )
    }
}

const AppMapStateToProps = state => {
    return {
      products: state.user.products
    };
  };

  
export default connect(AppMapStateToProps)(withRouter(ProductDetail));
