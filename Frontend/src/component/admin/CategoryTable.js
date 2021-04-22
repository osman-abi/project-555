import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParentCategory } from "../../actions/index";

export class CategoryTable extends Component {
    static propTypes = {
        category: PropTypes.array.isRequired,
        getParentCategory: PropTypes.func.isRequired,
    }
  
  
    componentDidMount() {
      this.props.getParentCategory();
      // console.log('=============',this.props.category)
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
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    <td>Otto</td>
      <button type="button" class="btn btn-outline-danger btn-block">Sil</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
     <td>Thornton</td>
     <button type="button" class="btn btn-outline-danger btn-block">Sil</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <button type="button" class="btn btn-outline-danger btn-block">Sil</button>
     </tr> */}
                            
                            {this.props.category.map((category) => {
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
  category: state.user.category
});


export default connect(mapStateToProps, {getParentCategory})(CategoryTable)

