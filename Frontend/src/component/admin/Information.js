
import React, { Component } from 'react'
import { getAboutContext,getCopyRight,getShopAddress,getOurShopContext,getMissionContext,getTechniqueSupport, getWorkDuration } from "../../actions/index";
import { Container } from "reactstrap";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
export class Information extends Component {

    static propTypes = {
        about_context:PropTypes.array.isRequired,
        getAboutContext: PropTypes.func.isRequired,
        getCopyRight: PropTypes.func.isRequired,
        getShopAddress: PropTypes.func.isRequired,
        getWorkDuration:PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getWorkDuration();
        this.props.getAboutContext();
        this.props.getCopyRight();
        this.props.getMissionContext();
        this.props.getOurShopContext();
        this.props.getTechniqueSupport();
        this.props.getShopAddress();
    }

    render() {
        const {about_context, mission_context,ourshop,technique_support,shop_address,work_duration} = this.props
        return (
            <div className='section-ptb'>
                <Container>
                <div className='haqqimizda__melumat mb-5'>
                    <h1 className='text-center'> Haqqimizda melumat  </h1>
                    {about_context.map((about, index) => {
                        return (
                        
                            <div className='text-center' style={{padding:"30px 0;",border:"1px dotted black",height:"300px"}} key={index}> {about.about_context}</div>                
                    )
                })}
                    </div>

                    </Container>
                <hr />
                <Container>
                    <div className='missiyamiz mb-5'>
                        <h1 className='text-center'> Missiyamiz </h1>
                        {mission_context.map((mission, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {mission.mission_context}</div>
                            )
                        })}
                    </div>
                </Container>
                <hr />
                <Container>
                    <div className='missiyamiz mb-5'>
                        <h1 className='text-center'> Magazamiz </h1>
                        {ourshop.map((shop, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {shop.ourshop_context}</div>
                            )
                        })}
                    </div>
                </Container>
                <hr />
                <Container>
                    <div className='missiyamiz mb-5'>
                        <h1 className='text-center'> Texniki destek </h1>
                        {technique_support.map((tech, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {tech.support_text}</div>
                            )
                        })}
                    </div>
                </Container>

                <hr />
                <Container>
                    <div className='missiyamiz mb-5'>
                        <h1 className='text-center'> Unvan </h1>
                        {shop_address.map((address, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {address.address}</div>
                            )
                        })}
                        <h1 className='text-center'> Email unvani </h1>
                        {shop_address.map((address, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {address.email_1}</div>
                            )
                        })}
                        <h1 className='text-center'> Telefon nomresi </h1>
                        {shop_address.map((address, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {address.phone_number_1}</div>
                            )
                        })}
                    </div>
                </Container>
{/* 
                <hr />
                <Container>
                    <div className='missiyamiz mb-5'>
                        <h1 className='text-center'> Is intervali </h1>
                        {work_duration.map((work, index) => {
                            return (
                                <div className='text-center'
                                    style={{ padding: "30px 0;", border: "1px dotted black", height: "300px" }}
                                    key={index}> {tech.support_text}</div>
                            )
                        })}
                    </div>
                </Container> */}
            </div>
        )
    }
}
const mapDispatchToProps = state => ({
    about_context: state.user.about_context,
    mission_context: state.user.mission_context,
    ourshop: state.user.ourshop,
    shop_address: state.user.shop_address,
    work_duration: state.user.work_duration,
    technique_support: state.user.technique_support,
    copyrigth: state.user.copyrigth,
    contact: state.user.contact,
    
})
export default connect(mapDispatchToProps, {
    getShopAddress, getTechniqueSupport, getWorkDuration, getCopyRight, getMissionContext,
    getOurShopContext,getAboutContext})(Information)
