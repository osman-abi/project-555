/**
 *  Admin Invoive Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import invoice from '../../api/invoice.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInvoice,deleteInvoice } from "../../actions/index";

class Invoices extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        modal1: false,
        dropdownOpen: false,
        isOpen: false,
        // invoices:invoice,
        searchProduct:'',
        invoiceview:''
      };

      this.toggle = this.toggle.bind(this);
      this.toggle1 = this.toggle1.bind(this);
  }
  

  static propTypes = {
        invoices: PropTypes.array.isRequired,
    getInvoice: PropTypes.func.isRequired,
        deleteInvoice:PropTypes.func.isRequired
    }
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    toggle1() {
      this.setState(prevState => ({
        modal1: !prevState.modal1
      }));
    }

    componentDidMount() {
      window.scrollTo(0, 0)
      this.props.getInvoice()
      
    }

    onSearchProduct(searchText){
      if(searchText === '')
      {
        this.setState({
            ...this.state,
            invoices:invoice,
            searchProduct:searchText
        })
      }
      else
      {
        let SearchBuyer= invoice.filter((invo)=>{
            if(searchText === searchText.toLowerCase()){
                let buyer = invo.buyer.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                return (
                  buyer
               )
            }
            else {
               let buyer = invo.buyer.toUpperCase().indexOf(searchText.toUpperCase()) > -1
               return (
                  buyer
               )
            }
        });
        this.setState({
          ...this.state,
          searchProduct:searchText,
          invoices:SearchBuyer
        })
      }
    }
    onDeleteInvoicePopup(data)
    {
        this.data=data;
        this.toggle1();
    }
    onDeleteInvoice(res){
      if(res)
      {
        let deleteInvoice = this.data;
        this.props.deleteInvoice(deleteInvoice.id)
        // window.location.reload()
      }
    }

    onViewInvoicePopup(data)
    {
      this.setState({
        invoiceview:data
      })
      this.toggle();
    }


    render() {
      const viewInvoice = this.state.invoiceview;
      const columns = [
        {
           maxWidth: 75,
           Header: 'No.',
           accessor: 'id'
        },
        {
           sortable: false,
           Header: 'Transaksiya ID',
           accessor: 'transaction_id'
        },
        {
           minWidth: 160,
           Header: 'Al??c??',
           accessor: 'firstname',
        },
        {
           Header: 'Tarix',
           accessor: 'ordered_date',
        },
        // {
        //   Header: 'Status',
        //   accessor: 'status',
        // },
        // {
        //   Header: '??d??ni??',
        //   accessor: 'payment',
        // },
        {
           Header: 'Qiym??t',
           accessor: 'amount',
        },
        // {
        //    Header: 'Kreditl?? m??bl????',
        //    accessor: 'debit',
        // },
         {
           Header: '??m??liyyat',
           accessor: 'action',
           Cell: props => {
              return (
                 <div>
                    <Link className="view-button" onClick={() => this.onViewInvoicePopup(props.original)} > Bax <i className="fa fa-eye pl-2"></i></Link>
                    <a  className="delete-button"
                       onClick={() => this.onDeleteInvoicePopup(props.original)}
                    >Sil <i className="fa fa-trash-o pl-2"></i>
                    </a>
                 </div>
              )
           },
        }
      ]
      const inv = []
      const {invoices} = this.props
      for (const i of invoices) {
        inv.push(i)
      }
    return (
      <div>
      <div className="section-ptb">
      <Container>
        <Row>
        <Col lg={12}>
           <div className="mb-0">
              <h4>Qaim?? siyah??s??</h4>
              </div>
              <div className="mb-4">
                <form>
                <div class="form-group">
                  <input type="text" class="form-control"  placeholder="Qaim?? axtar" value={this.state.searchProduct} onChange={(e) => this.onSearchProduct(e.target.value)}></input>
                </div>
                </form>
              </div>
                <ReactTable className="invoices-table"
                    data={inv}
                    columns={columns}
                    minRows={1}
                    defaultPageSize={5}
                />

                
                  {/* modal-view */}
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-view modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    {viewInvoice !== null ?
                    <ModalBody>
                      <div className="success-screen">
                      <div className="thank-you text-center">
                        <i className="fa fa-check-circle-o"></i>
                        <h1 className="text-white">T??????kk??rl??r</h1>
                        <span>??d??ni??iniz q??bul olunub! Sifari??iniz tezlikl?? t??sdiql??nc??k</span>
                        <strong className="text-white">Qaim?? ID:{viewInvoice.invoiceid}</strong>
                      </div>
                      <div className="delivery p-4 p-md-5 bg-light text-center">
                        <h2 className="mb-0 mt-2">{viewInvoice.date}</h2>
                      </div>
                      <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                      <Row>
                        <Col lg={6}>
                        <h6>??atd??r??lacaq ??nvan</h6>
                          <ul className="list-unstyled mb-0">
                            {/* <li>Ciyashop</li> */}
                            <li>#10</li>
                            <li>+994 55 201 27 17</li>
                            <li>support@ciyashop.com</li>
                            <li>Baki ????h., N??rmianov ray.</li>
                          </ul>
                        </Col>
                        <Col lg={6} className="text-lg-right mt-4 mt-lg-0">
                          <h6>Q??sa M??zmun</h6>
                          <ul className="list-unstyled mb-0">
                            <li><span>Sifari?? ID:</span> <strong>{viewInvoice.invoiceid}</strong></li>
                            <li><span>Sifari??in Tarixi:</span> <strong>{viewInvoice.date}</strong></li>
                            <li><span>Sifari??in M??bl????i:</span> <strong>${viewInvoice.price + viewInvoice.tax + 50}.00</strong></li>
                          </ul>
                        </Col>
                      </Row>
                      </div>
                      <div className="ordered-detail">
                        <h5 className="mb-4">Sifari?? m??lumat??</h5>
                        <div className="table-responsive">
                        <table class="table mb-0">
                          <tbody>
                            <tr className="ordered-item">
                              {typeof(viewInvoice.pictures) != 'undefined' ?
                                <td className="ordered-image">
                                  <img  src={require(`../../assets/images/${viewInvoice.pictures}`)}  className="img-fluid" />
                                </td>
                              :
                                null
                              }

                              <td  className="ordered-name">
                                <h6 className="mb-0">M??hsulun ad??</h6>
                                <span>{viewInvoice.productname}</span>
                              </td>
                              <td className="ordered-quantity">
                                <h6 className="mb-0">Miqdar</h6>
                                <span>{viewInvoice.qty}</span>
                              </td>
                              <td className="ordered-price">
                              <h6 className="mb-0">Qiym??t</h6>
                              <span>${viewInvoice.price}.00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                        <div className="table-responsive">
                        <table class="table total-table table-borderless mt-4 mb-0">
                          <tbody>
                            <tr className="border-top">
                            <td><strong className="h5">C??mi M??bl????</strong></td>
                              <td className="text-right h5"><strong>${viewInvoice.price + viewInvoice.tax + 50}.00</strong></td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>
                    </div>
                    </ModalBody>
                    :
                      null
                    }
                  </Modal>

                  {/* modal-delete */}
                  <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="modal-delete modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle1}></ModalHeader>
                    <ModalBody>
                      Qaim??ni silm??k ist??diyiniz?? ??minsiniz mi?
                    </ModalBody>
                    <ModalFooter className="justify-content-center pt-4">
                      <Link className="action-button" to="#" onClick={(res)=>this.onDeleteInvoice(res)}>B??li</Link>
                      <Link className="action-button no" to="#" onClick={this.toggle1}>Xeyr</Link>
                    </ModalFooter>
                  </Modal>
                  </Col>
                </Row>
                </Container>
                </div>
              </div>
          )

    }
}

const mapStateToProps = state => ({
    invoices: state.user.invoice
})



export default connect(
    mapStateToProps, { getInvoice,deleteInvoice }
)(Invoices)
