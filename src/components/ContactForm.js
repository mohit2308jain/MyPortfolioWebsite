import React from "react";
import { Label, Form, Input, Button, Jumbotron } from "reactstrap";

import '../stylesheets/Contact.css';

class ContactForm extends React.Component {
    state = {
        status: ""
    };

    submitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <Jumbotron className="container contactContainer">
                <Form onSubmit={(event) => this.submitForm(event)}
                action="https://formspree.io/mzbjkzoe"
                method="POST">

                    <div className="row p-2">
                        <div className="col-12 col-md-2">
                            <Label className="font-weight-bold">Name: </Label>
                        </div>

                        <div className="col-12 offset-md-1 col-md-8">
                            <Input type="text" name="name" placeholder="Your Name Here.." required/>
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-12 col-md-2">
                        <Label className="font-weight-bold">Email: </Label>
                        </div>

                        <div className="col-12 offset-md-1 col-md-8">
                            <Input type="email" name="email" placeholder="Your Email Here.." required/>
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-12 col-md-2">
                            <Label className="font-weight-bold">Mobile: </Label>
                        </div>

                        <div className="col-12 offset-md-1 col-md-8">
                            <Input type="number" name="mobile" placeholder="Your Mobile No. Here.." 
                                required/>
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-12 col-md-2">
                            <Label className="font-weight-bold">Message: </Label>
                        </div>

                        <div className="col-12 offset-md-1 col-md-8">
                            <Input type="textarea" name="message" placeholder="Your Message here.." required/>
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col-12 text-center">
                            <Button color="success" outline className="font-weight-bold">Submit</Button>
                        </div>
                    </div>
                    
                    <div className="row p-2">
                        <div className="col-12 text-center">
                        {
                            (status === 'SUCCESS') ? <h3 className="text-center">Thanks!</h3> : <div></div>
                        }
                        {status === "ERROR" && <h5 className="text-center">Ooops! There was an error.</h5>}
                        </div>
                    </div>
                    
                </Form>
        </Jumbotron>
        );
    }
}

export default ContactForm;