/**
 * Shop Page Social Info
 */
import React, { Component } from 'react';

function SocialFilter() {
    return (
        <div className="widget widget_pgs_social_profiles">
            <h4 className="widget-title">Sosial kanallar</h4>
            <div className="social-profiles-wrapper">
                <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                    <div className="social-profiles">
                        <ul>
                            <li><a href="https://www.facebook.com" title="Facebook" target="_blank" ><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/" title="Whatsapp" target="_blank" ><i className="fa fa-whatsapp" /></a></li>
                            <li><a href="https://google.com/" title="Instagram" target="_blank"><i className="fa fa-instagram" /></a></li>
                        </ul>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SocialFilter;


