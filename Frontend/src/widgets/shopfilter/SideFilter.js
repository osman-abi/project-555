/**
 * Shop Page Side Bar Filter
 */
import { Slider } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryValue, colorValue, priceValue, searchValue, sizeValue } from '../../actions/filter';
import { uniqueCategory, uniqueColors, uniqueMinMaxPrice, uniqueSizes } from '../../services';
import { getProducts, getChildCategory, getParentCategory } from '../../actions/index'
import PropTypes from "prop-types";
import { Scrollbars } from 'react-custom-scrollbars';

class SideFilter extends Component {

    constructor(props) {
        super(props);
        // console.log('props =>', props)
        this.state = {
            SearchValue: '',
            priceplace: [this.props.prices.min, this.props.prices.max],
            setfistprice: [this.props.prices.min, this.props.prices.max],
            sidebarmenu: false,
        }
        this.showfilter = this.showfilter.bind(this);
    }

    static propTypes = {
        parent_categories: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            SearchValue: ''
        })
        this.props.searchValue('');
        this.props.getProducts();
        this.props.getChildCategory();
        this.props.getParentCategory();
        
    }
    showfilter() {
        this.setState(prevState => ({
            sidebarmenu: !prevState.sidebarmenu
        }));
    }
    onClickColorFilter = (event, colors) => {
        var index = colors.indexOf(event.target.value);
        if (event.target.checked) {
            colors.push(event.target.value);
        }
        else {
            colors.splice(index, 1);
        }
        this.props.colorValue(colors)
    }

    onClickCategoryFilter(event, categorys) {

        var index = categorys.indexOf(event.target.value);
        if (event.target.checked) {
            categorys.push(event.target.value);
        }
        else {
            categorys.splice(index, 1);
        }
        this.props.categoryValue(categorys);
    }

    onClickSizeFilter(event, sizes) {
        var index = sizes.indexOf(event.target.value);
        if (event.target.checked) {
            sizes.push(event.target.value);
        }
        else {
            sizes.splice(index, 1);
        }
        this.props.sizeValue(sizes);
    }
    SearchTextchange(SearchText) {
        this.setState({
            ...this.state,
            SearchValue: SearchText.target.value
        })
        this.props.searchValue(SearchText.target.value);
        // console.log(SearchText)
    }

    onChangePricePlace = values => {
        var maximumval = this.props.prices.max / 5;

        var value = {
            min: values['0'],
            max: values['1']
        }
        if (value.min == 0) {
            value.min = 0;
        }
        else if (value.min > 0 && value.min <= 20) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 1) / 20));
        }
        else if (value.min > 20 && value.min <= 40) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 2) / 40));
        }
        else if (value.min > 40 && value.min <= 60) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 3) / 60));
        }
        else if (value.min > 60 && value.min <= 80) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 4) / 80));
        }
        else if (value.min > 80 && value.min <= 100) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 5) / 100));
        }
        else {
            value.min = false;
        }

        if (value.max === 0) {
            value.max = 0;
        }
        else if (value.max > 0 && value.max <= 20) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 1) / 20));
        }
        else if (value.max > 20 && value.max <= 40) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 2) / 40));
        }
        else if (value.max > 40 && value.max <= 60) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 3) / 60));
        }
        else if (value.max > 60 && value.max <= 80) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 4) / 80));
        }
        else if (value.max > 80 && value.max <= 100) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 5) / 100));
        }
        else {
            value.max = false;
        }
        this.setState({
            priceplace: values
        });
        this.props.priceValue({ value })
    }
    fncl = (value) => {
        return Number.parseFloat(value).toFixed(0);
    }
    convertValue = (labelValue) => {
        return labelValue.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
    }

    toolformatter = value => {
        var maximumval = this.props.prices.max / 5;
        if (value === 0) {
            value = "0";
        }
        else if (value > 0 && value <= 20) {
            value = value * (maximumval * 1) / 20;
        }
        else if (value > 20 && value <= 40) {
            value = value * (maximumval * 2) / 40;
        }
        else if (value > 40 && value <= 60) {
            value = value * (maximumval * 3) / 60;
        }
        else if (value > 60 && value <= 80) {
            value = value * (maximumval * 4) / 80;
        }
        else if (value > 80 && value <= 100) {
            value = value * (maximumval * 5) / 100;
        }
        return this.convertValue(value);
    }

    clearprice(pricesval) {
        var value = {
            min: pricesval.min,
            max: pricesval.max
        }
        this.setState({
            priceplace: [this.props.prices.min, this.props.prices.max]
        })
        this.props.priceValue({ value })
    }
    // Clear Color Filter Code
    clearcolor() {
        var colors = [];
        this.props.colorValue(colors);
    }
    // Clear Category Filter Code
    clearcategory() {
        var categorys = [];
        this.props.categoryValue(categorys);
    }
    // Clear Size Filter Code
    clearsize() {
        var sizes = [];
        this.props.sizeValue(sizes);
    }
    render() {
        var { products,child_categories,parent_categories } = this.props
        var price = []
        for (const i of products) {
            price.push(i)
        }
        var max = Math.max.apply(Math, price)
        var maxdivide = max / 5;
        const marks = {
            0: 0,
            20: ((maxdivide * 1).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            40: ((maxdivide * 2).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            60: ((maxdivide * 3).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            80: ((maxdivide * 4).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            100: max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
        };
        // console.log('max',max)
        
        const categoryFilterValues = this.props.filters.category;
        
        return (
            <div>
                <div className="widget">
                    <h4 className="widget-title">Axtar</h4>
                    <input type="text" id="btn-search"
                        className="form-control" value={this.state.SearchValue}
                        onChange={this.SearchTextchange.bind(this)}
                        placeholder="axtar..." />
                </div>
                

                {parent_categories.map((parentCategory, i) => { 
                   return(
                    <div key={i} className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                            <div className="d-flex align-items-center justify-content-between" >
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h4 className="widget-title" key={i}>{parentCategory.name}</h4>
                                    <p><a className="price-clear-filter" onClick={() => this.clearcategory()} >Təmizlə</a></p>
                                </div>
                            </div>
                            <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '215px' }}>
                                <Scrollbars>

                                    {this.props.categorys.map((category,index)=>{
                                        return (
                                            <div className="form-check pgs-filter-checkbox" key={index}>
                                                <input type="checkbox" onClick={(e) => this.onClickCategoryFilter(e, categoryFilterValues)} value={category} defaultChecked={categoryFilterValues.includes(category) ? true : false} className="form-check-input" id={category} />
                                                {category.parent.id === parentCategory.id ? <label className="form-check-label" key={index} htmlFor={category}>{category.name}</label>:null}
                                            </div>
                                        )
                                    })}
                                    
                                </Scrollbars>
                            </div>
                            </div>
                   )
                        
            })}
               
            </div>
        )
    }
}

const mapDispatchToProps = state => ({
    categorys: uniqueCategory(state.user.products),
    child_categories: state.user.child_category,
    parent_categories: state.user.parent_category,
    prices: uniqueMinMaxPrice(state.user.products),
    products:state.user.products,
    filters: state.filters
})
export default connect(
    mapDispatchToProps,
    { categoryValue, sizeValue, colorValue, priceValue, searchValue, getProducts, getChildCategory, getParentCategory }
)(SideFilter);

