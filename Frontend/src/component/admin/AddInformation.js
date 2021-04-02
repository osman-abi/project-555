import React, { Component } from 'react';
import { Input, FormGroup, Container,Label } from 'reactstrap';
import Form from 'reactstrap/lib/Form';
import { postMissionContext,postOurShopContext,postAboutContext,postShopAddress,postWorkDuration, postTechniqueSupport,postCopyRight } from "../../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ImageUploader from 'react-images-upload';
import Slider from "react-slick";

const productData = {
    product_gallery: [
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
        "product-single.jpg",
    ]
}

const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };


export class AddInformation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            about_context: '',

            mission_context: "",

            ourshop_context: "",

            support_text: "",

            year: "",
            context: "",
            

            address: "",
            email: "",
            email1: "",
            email2: "",
            email3: "",
            email4: "",
            email5: "",
            phone: "",
            phone1: "",
            phone2: "",
            phone3: "",
            phone4: "",
            phone5: "",

            duration_d_from: "",
            duration_d_to:"",
            duration_t_from: "",
            duration_t_to: "",
            saturday_from: "",
            saturday_to:""
            
        }
    }

    static propTypes = {
        postAboutContext: PropTypes.func.isRequired,
        postMissionContext: PropTypes.func.isRequired,
        postOurShopContext: PropTypes.func.isRequired,
        postShopAddress: PropTypes.func.isRequired,
        postWorkDuration: PropTypes.func.isRequired,
        postTechniqueSupport: PropTypes.func.isRequired,
        postCopyRight:PropTypes.func.isRequired
    }


    changeAboutContext = (e) => {
        this.setState({
            about_context:e.target.value
        })
    }

    changeMissionContext = e => {
        this.setState({
            mission_context:e.target.value
        })
    }

    changeOurShopContext = e => {
        this.setState({
            ourshop_context:e.target.value
        })
    }


    changeTechniqueSupport = e => {
        this.setState({
            technique_support:e.target.value
        })
    }

    changeCopyRightContext = e => {
        this.setState({
            context:e.target.value
        })
    }


    changeAdressContext = e => {
        this.setState({
            address:e.target.value
        })
    }

    changeEmailContext = e => {
        this.setState({
            email: e.target.value
        })
    };

    changeEmail1Context = e => {
        this.setState({
            email1:e.target.value
        })
    }

    changeEmail2Context = e => {
        this.setState({
            email2:e.target.value
        })
    }

    changeEmail3Context = e => {
        this.setState({
            email3:e.target.value
        })
    }

    changeEmail4Context = e => {
        this.setState({
            email4: e.target.value
        })
    };

    changeEmail5Context = e => {
        this.setState({
            email5: e.target.value
        })
    };

    changePhoneContext = e => {
        this.setState({
            phone:e.target.value
        })
    }

    changePhone1Context = e => {
        this.setState({
            phone1: e.target.value
        })
    };

    changePhone2Context = e => {
        this.setState({
            phone2: e.target.value
        })
    };

    changePhone3Context = e => {
        this.setState({
            phone3:e.target.value
        })
    }

    changePhone4Context = e => {
        this.setState({
            phone4:e.target.value
        })
    }

    changePhone5Context = e => {
        this.setState({
            phone5:e.target.value
        })
    }

    changeDayFrom = e => {
        this.setState({
            d_from: e.target.value
        })
    };

    changeDayTo = e => {
        this.setState({
            d_to:e.target.value
        })
    }

    changeTimeFrom = e => {
        this.setState({
            t_from: e.target.value
        })
    };

    changeTimeTo = e => {
        this.setState({
            t_to:e.target.value
        })
    }

    changeSaturdayFrom = e => {
        this.setState({
            saturday_from:e.target.value
        })
    }

    changeSaturdayTo = e => {
        this.setState({
            saturday_to:e.target.value
        })
    }

    changeCopyRightYear = e => {
        this.setState({
            year:e.target.value
        })
    }

    submitAboutContextForm = e => {
        e.preventDefault()
        const { about_context } = this.state
        const about = { about_context }
        this.props.postAboutContext(about);
    }

    submitMissionContextForm = e => {
        e.preventDefault()
        const { mission_context } = this.state
        const mission = { mission_context }
        this.props.postMissionContext(mission)
    }

    submitOurShop = e => {
        e.preventDefault();
        const { ourshop_context } = this.state
        const ourshop = { ourshop_context }
        this.props.postOurShopContext(ourshop)
        
    };

    shopAddressForm = e => {
        e.preventDefault();
        const { address, email, email1, email2, email3, email4, email5, phone, phone1, phone2, phone3, phone4, phone5 } = this.state
        const shop_address = { address, email, email1, email2, email3, email4, email5, phone, phone1, phone2, phone3, phone4, phone5 }
        this.props.postShopAddress(shop_address)
    };

    workingDurationForm = e => {
        e.preventDefault();
        const { duration_d_from, duration_d_to, duration_t_from, duration_t_to, saturday_from, saturday_to } = this.state
        const work = { duration_d_from, duration_d_to, duration_t_from, duration_t_to, saturday_from, saturday_to }
        this.props.postWorkDuration(work)
    }

    submitTechniqueSupportForm = e => {
        e.preventDefault();
        const { support_text } = this.state
        const support = { support_text }
        this.props.postTechniqueSupport(support)
    }

    submitCopyRightForm = e => {
        e.preventDefault();
        const { context, year } = this.state
        const copyright = { context, year }
        this.props.postCopyRight(copyright)

    }
    




    render() {
        let { about_context, mission_context, ourshop_context, support_text, context, year,address,
            email, email1, email2, email3, email4, email5, phone, phone1, phone2, phone3, phone4, phone5,
            duration_d_from,duration_d_to,duration_t_from,duration_t_to,saturday_from,saturday_to} = this.state
        return (
            <div className='section-ptb'>
                <Container>
                <h1 className='text-center'> Haqqimizda melumat </h1>
                <form onSubmit={this.submitAboutContextForm} className='form-inline justify-content-center'>
                    <FormGroup>
                            <textarea rows='5' cols='120' value={about_context} onChange={ this.changeAboutContext}/>
                    </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>
                <br/>
                <hr />
                <br />
                <Container>
                <h1 className='text-center'> Missiyamiz </h1>
                <form onSubmit={this.submitMissionContextForm} className='form-inline justify-content-center'>
                    <FormGroup>
                        <textarea rows='5' cols='120' value={mission_context} onChange={ this.changeMissionContext} />
                    </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>
                <br/>
                <hr />
                <br />
                <Container>
                <h1 className='text-center'> Magaza haqqinda context </h1>
                <form onSubmit={this.submitOurShop} className='form-inline justify-content-center'>
                    <FormGroup>
                        <textarea rows='5' cols='120' value={ourshop_context} onChange={ this.changeOurShopContext}/>
                    </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>

                <br/>
                <hr />
                <br />
                <Container>
                <h1 className='text-center'> Texniki destek </h1>
                <form onSubmit={this.submitTechniqueSupportForm} className='form-inline justify-content-center'>
                    <FormGroup>
                        <textarea rows='5' cols='120' value={support_text} onChange={ this.changeTechniqueSupport}/>
                    </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>

                <br/>
                <hr />
                <br />
                <Container>
                <h1 className='text-center'> CopyRight </h1>
                <form onSubmit={this.submitCopyRightForm} className='form-inline justify-content-center'>
                        <FormGroup>
                            
                            <input type='text' placeholder='2021' value={year} onChange={this.changeCopyRightYear}  className='form-control'/>
                        <textarea rows='5' cols='120' value={context} onChange={ this.changeCopyRightContext}/>
                    </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>

                <br/>
                <hr />
                <br />
                <Container>
                    <h1 className='text-center'> Magaza haqqinda melumat </h1>
                <form onSubmit={this.shopAddressForm} className="form-inline justify-content-center flex-column">
                    <br/>
                        <h3 className='text-center' > Unvan </h3>
                    
                        <div className='text-center mb-4' >
                            
                            <Input type='text' className='form-control' style={{width:"600px"}} className='mb-2' value={address} onChange={ this.changeAdressContext}/>
                        </div>
                        <br/>
                        <h3 className='text-center'> Email unvani </h3>
                        <FormGroup className='flex-row mb-4'>
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email} onChange={ this.changeEmailContext} className='ml-1' />
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email1} onChange={ this.changeEmail1Context} className='ml-1' />
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email2} onChange={ this.changeEmail2Context} className='ml-1' />
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email3} onChange={ this.changeEmail3Context} className='ml-1' />                            
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email4} onChange={ this.changeEmail4Context} className='ml-1' />
                            <Input type='text' placeholder='email hesabinizi daxil edin' value={email5} onChange={ this.changeEmail5Context} className='ml-1' />
                        </FormGroup>
                        <br/>
                        <h3 className='text-center'> Telefon No </h3>
                        <FormGroup className='flex-row'>
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone} onChange={ this.changePhoneContext} className='ml-1' />
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone1} onChange={ this.changePhone1Context} className='ml-1' />
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone2} onChange={ this.changePhone2Context} className='ml-1' />
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone3} onChange={ this.changePhone3Context} className='ml-1' />                            
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone4} onChange={ this.changePhone4Context} className='ml-1' />
                            <Input type='text' placeholder='telefon nomrenizi daxil edin' value={phone5} onChange={ this.changePhone5Context} className='ml-1' />
                        </FormGroup>
                        <button type="submit" class="btn btn-outline-success text-center w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>
                <br/>
                <hr />
                <br />
                <Container>
                <h1 className='text-center'> Is intervali </h1>
                    <form onSubmit={this.workingDurationForm} className='form-inline justify-content-center'>
                        <FormGroup className='mb-4'>
                        Heftenin necenci gununden:  <input type='number' value={duration_d_from} onChange={ this.changeDayFrom} className='mr-4 ml-4'/>
                        heftenin necenci gununue:  <input type='number' value={duration_d_to} onChange={ this.changeDayTo}  className=' ml-4'/>
                        </FormGroup>

                        <FormGroup className='mb-4'>
                            Saat neceden:  <input type='number' value={duration_t_from} onChange={ this.changeTimeFrom} className='mr-4 ml-4'/>
                            Saat neceye:  <input type='number' value={duration_t_to} onChange={ this.changeTimeTo} className=' ml-4'/>
                        </FormGroup>

                        <FormGroup className='mb-4'>
                            Senbe gunu saat neceden:  <input type='number' value={saturday_from} onChange={ this.changeSaturdayFrom} className='mr-4 ml-4'/>
                            Saat neceye:  <input type='number' value={saturday_to} onChange={ this.changeSaturdayTo} className=' ml-4'/>
                        </FormGroup>
                    <button type="submit" class="btn btn-outline-success w-75 mt-3 btn-block">Tesdiqle</button>
                    </form>
                </Container>
                <br/>
                <hr />
                <br />
                <Container>
                    <form onSubmit={this.SlideUpload}>
                <h1 className='text-center'> Slider </h1>
                <div className="ciyashop-product-thumbnails">
                                                      
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productData.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        {/* <a href="javascript:void(0)">
                                                                            <img src={require(`../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                                        </a> */}
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
                        <Input type='submit' class="btn btn-outline-success w-75 mt-3 btn-block" value='Təsdiqlə'/>
                                                    </form>
                </Container>
                

                
            </div>
        )
    }
}

export default connect(null,{postAboutContext, postMissionContext,postOurShopContext,postShopAddress,postWorkDuration,postTechniqueSupport,postCopyRight})(AddInformation)

