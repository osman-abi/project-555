/**
 * Business Schedule Page
 */
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkDuration, getTechniqueSupport } from "../actions/index";


class Businessschedule extends Component {

  static propTypes = {
    getWorkDuration: PropTypes.func.isRequired,
    getTechniqueSupport: PropTypes.func.isRequired,
    technique_support: PropTypes.array.isRequired,
    work_duration:PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getWorkDuration();
    this.props.getTechniqueSupport()
  }
  
  render() {
     const {work_duration, technique_support} = this.props
    return (
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
            <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
              <div className="ciyashop_info_box-icon">
                <div className="ciyashop_info_box-icon-wrap">
                  <div className="ciyashop_info_box-icon-outer">
                    <div className="ciyashop_info_box-icon-inner text-dark">
                      <i className="fa fa-clock-o" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box-content">
                <div className="ciyashop_info_box-content-wrap">
                  <div className="ciyashop_info_box-content-inner">
                    <h4 className="ciyashop_info_box-title">
                      İş saatları </h4>
                    <div className="ciyashop_info_box-description">
                      <p className="mb-1"></p>
                      {work_duration.map((work, index) => {
                        return (
                        <p key={index}>
                          <strong>{work.duration_d_from} -- {work.duration_d_to} </strong> : <p>{work.duration_t_from} – { work.duration_t_to}</p><br />
                          <strong>Şənbə günü</strong> : <p>{work.saturday_from} – {work.saturday_to}</p><br />
                        </p>

                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
            <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
              <div className="ciyashop_info_box-icon">
                <div className="ciyashop_info_box-icon-wrap">
                  <div className="ciyashop_info_box-icon-outer">
                    <div className="ciyashop_info_box-icon-inner text-dark">
                      <i className="fa fa-life-ring" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box-content">
                <div className="ciyashop_info_box-content-wrap">
                  <div className="ciyashop_info_box-content-inner">
                    <h4 className="ciyashop_info_box-title">
                      Texniki dəstək </h4>
                    <div className="ciyashop_info_box-description">
                      {technique_support.map((support, index) => {
                        return (
                          <p key={ index}> {support.support_text} </p>

                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        </Row>

      )
    }
 }

const mapStateToProps = state => ({
  work_duration: state.user.work_duration,
  technique_support: state.user.technique_support
  
})


 export default connect(mapStateToProps, {getWorkDuration, getTechniqueSupport})(Businessschedule)

