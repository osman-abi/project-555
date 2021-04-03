import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { getFacebook,getInstagram,getWhatsapp } from "../../actions/index";


export class SocialInfo extends Component {

    static propTypes = {
        facebook: PropTypes.array.isRequired,
        instagram: PropTypes.array.isRequired,
        whatsapp: PropTypes.array.isRequired,
        getWhatsapp: PropTypes.func.isRequired,
        getFacebook: PropTypes.func.isRequired,
        getInstagram:PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getFacebook()
        this.props.getInstagram()
        this.props.getWhatsapp()
    }
    render() {
        const {facebook,instagram,whatsapp} = this.props
        return (
            <div className="widget widget_pgs_social_profiles">
            <h4 className="widget-title">Sosial kanallar</h4>
            <div className="social-profiles-wrapper">
                <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                    <div className="social-profiles">
                            <ul>
                                {facebook.map((hesab, index) => {
                                    return (

                                        <li key={index}><a href={hesab.link} title="Facebook" target="_blank" ><i className="fa fa-facebook" /></a></li>
                                    )
                                })}
                                {whatsapp.map((hesab, index) => {
                                    return (
                                        <li key={index}><a href={hesab.link} title="Whatsapp" target="_blank" ><i className="fa fa-whatsapp" /></a></li>
                                        
                                    )
                                })}
                                {instagram.map((hesab, index) => {
                                    return (
                                        <li key={index}><a href={hesab.link} title="Instagram" target="_blank"><i className="fa fa-instagram" /></a></li>
                                        
                                    )
                                })}
                        </ul>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    facebook: state.user.facebook,
    instagram: state.user.instagram,
    whatsapp:state.user.whatsapp
})

export default connect(mapStateToProps,{getWhatsapp,getFacebook,getInstagram})(SocialInfo)
