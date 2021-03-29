/**
 * Contact Form
 */
import React , {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Form,  Input } from 'reactstrap';


function ContactForm() {

    return (
        <div className="contact-wrapper bg-gray w-100">
            <div className="section-title">
                <h2 className="title text-left">Bizə yazın</h2>
                </div>
                <Form>
                    <Row>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Ad" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Email Ünvanı" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Başlıq" />
                        </div>
                        </Col>
                        <Col md={12}>
                        <div className="form-group">
                            <textarea name="your-message" cols={30} rows={4} className="form-control" placeholder="Bizə bildirin" defaultValue={""} />
                        </div>
                        </Col>
                        <Col md={12} >
                        <Input type="button" defaultValue="Göndər" className="btn btn-default" />
                        </Col>
                    </Row>
                </Form>
            </div>
           )

}

export default ContactForm;
