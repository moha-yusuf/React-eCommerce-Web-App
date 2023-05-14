import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class ContactPage extends Form {
    state = {
        data: { name: "", email: "", message: "" },
        errors: {}
    };

    schema = {
        name: Joi.string()
        .required()
        .min(2)
        .max(255)
        .label("Name"),
        email: Joi.string()
        .required()
        .email()
        .label("Email"),
        message: Joi.string()
        .required()
        .min(10)
        .max(1024)
        .label("Message")
    };

    doSubmit = async () => {
        console.log("Form submitted");
    };

    render() {
        return (
            <div className="container py-5">
                <div className="bg-white py-5 rounded">
                    <div className="container">
                    <h1 className="text-center mb-5">Contact Us</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("name", "Name")}
                            {this.renderInput("email", "Email")}
                            {this.renderTextArea("message", "Message")}
                            {this.renderButton("Send")}
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;
