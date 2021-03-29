import React, { Component } from 'react';
import { Input, FormGroup,  } from 'reactstrap';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCategory } from "../../actions/index";
import CategoryTable from "./CategoryTable";
export class Category extends Component {

    state = {
        
        name: "",
        parent: null
    }

    static propTypes = {
        addCategory: PropTypes.func.isRequired,
    }

    onChangeName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    onChangeParent = e => {
        this.setState({
            parent: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        const { name, parent } = this.state
        const category = { name, parent }
        this.props.addCategory(category)
        alert("OK")
    }

    render() {
        const {name,parent} = this.state
        return (
            <>
            <div className="section-ptb ">
                <form className="form-inline justify-content-center" onSubmit={this.submitForm}>
                    <FormGroup >
                        <Input type="text" className="form-control  product_title" onChange={this.onChangeName} value={name} placeholder="Kategoriya adı"  />
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" className="form-control  product_title" onChange={this.onChangeParent} value={parent} placeholder="Üst kateqoriya"  />
                    </FormGroup>
                    <input type='submit' class="btn btn-primary " value='Yadda Saxla'/>
                    </form>
                </div>
                <CategoryTable/>
                
                               
                </>
            
        )
    }
}




export default connect(null, {addCategory})(Category)
// export default Category
// export default connect(null, { addProduct })(Productadd)