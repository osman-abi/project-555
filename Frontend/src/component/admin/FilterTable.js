import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFilterCategory } from "../../actions/index";


export class FilterTable extends Component {

    static propTypes = {
        filter_category: PropTypes.array.isRequired,
        getFilterCategory: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getFilterCategory();
        // console.log('=============', this.props.filter_category)
    }

    render() {
        return (
            <>
                <Container>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Üst kateqoriya ID</th>
                                <th scope="col">Ad</th>
                                <th scope="col">Əməliyyat</th>
                            </tr>
                        </thead>
                        <tbody>
               
                            {this.props.filter_category.map((category) => {
                                return (
                              
                                    
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                  
                                        <td>{category.parent}</td>
                                        
                                        <td>{category.name}</td>
                                        <button type="button" class="btn btn-outline-danger btn-block">Sil</button>
                                    </tr>
                                  
                                )
                            })}
                        
                        
                        </tbody>
                    </table>
                </Container>
            </>
        )
    }
}
    


const mapStateToProps = (state) => ({
  filter_category: state.user.filter_category,
});

export default connect(mapStateToProps, {getFilterCategory})(FilterTable)

