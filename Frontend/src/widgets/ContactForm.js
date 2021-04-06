import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { Form,  Input } from 'reactstrap';


export class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            title: "",
            message:""
        }
    }

    changeName = e => {
        this.setState({
            name:e.target.value
        })
    }
    
    changeEmail = e => {
        this.setState({
            email:e.target.value
        })
    }

    changeTitle = e => {
        this.setState({
            title:e.target.value
        })
    }

    changeMessage = e => {
        this.setState({
            message:e.target.value
        })
    }

    submitForm = e => {
        var url = 'https://1klikle.az/api/about/message/'
        const { name, email, title, message } = this.state
        const data = { name, email, title, message }
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
    }
    

    render() {
        const {name,email,title,message} = this.state
        return (
            <div className="contact-wrapper bg-gray w-100">
            <div className="section-title">
                <h2 className="title text-left">Bizə yazın</h2>
                </div>
                <Form onSubmit={this.submitForm}>
                    <Row>
                        <Col lg={4}>
                        <div className="form-group">
                                <Input type="text" className="form-control" onChange={this.changeName} value={ name} placeholder="Ad" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                                <Input type="text" className="form-control" onChange={this.changeEmail} value={ email} placeholder="Email Ünvanı" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" onChange={this.changeTitle} value={title} placeholder="Başlıq" />
                        </div>
                        </Col>
                        <Col md={12}>
                        <div className="form-group">
                            <textarea name="your-message" cols={30} rows={4} onChange={this.changeMessage} value={message} className="form-control" placeholder="Bizə bildirin" defaultValue={""} />
                        </div>
                        </Col>
                        <Col md={12} >
                        <Input type="submit" defaultValue="Göndər" className="btn btn-default" />
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default ContactForm
