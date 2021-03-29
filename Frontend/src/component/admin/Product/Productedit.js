/**
 *  Admin Site Product Edit Page
 */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import productdata from '../../../api/product';
import ProductEditDetail from '../../../templates/product-edit-detail';
import { getProducts } from "../../../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class Productedit extends Component{
    constructor(props)
    {
         super(props);
         this.state={   
             ProductId:parseInt(this.props.match.params.id),
             CurrentProduct:null
         }
    }

    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
    }

    componentDidMount()
    {
        this.props.getProducts();
        let CurrentProductId = this.state.ProductId;
        
        let allproductdata=this.props.products;
        if(allproductdata && allproductdata.length > 0)
        {
            for(let product of allproductdata)
            {
                if(product.id === CurrentProductId)
                {
                        this.setState({
                            ...this.state,
                            CurrentProduct:product
                        })
                }
            }
        }

    }
    render(){
        const Productedit = this.state.CurrentProduct;
        return(
                <div>
                    {Productedit !== null ?
                        <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <ProductEditDetail product={Productedit} />
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

const mapStateToProps = (state) => ({
  products: state.user.products
});

export default connect(mapStateToProps, {getProducts})(Productedit)
