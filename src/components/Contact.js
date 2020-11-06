import React from 'react';
import './Contact.css'
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function Contact() {
    return (
    <Form className="contact">
    <Link className="link" to="/">
      <h1>
        <span className="font-weight-bold title">React</span>.com
      </h1>
      </Link>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
        <Label>Message</Label>
        <Input type="textarea" placeholder="Message" /> 
        <Button className="btn-lg btn-dark btn-block loginbutton">
          Submit
        </Button>
        </FormGroup>
        </Form>
    )
}

export default Contact;
