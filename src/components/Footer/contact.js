import React from "react";
import {
    FormGroup,
    Form,
    Input,
    Button,
    Row,
    Col
} from "reactstrap";

class Contact extends React.Component {
    render() {
        return (
            <>
                <div class="card-group">
                    <div class="card" style={{ marginLeft: "70px", marginRight: "70px", marginTop: "50px", backgroundColor: "rgb(103, 151, 233)",marginBottom:"30px" }}>
                        <div class="card-body" style={{ marginBottom: "30px" }}>
                            <h1 style={{ fontSize: "50px", textAlign: "center", marginBottom: "20px" }}> Contact With Me </h1>
                            <Form style={{ marginLeft: "90px", marginRight: "90px" }}>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Full Name"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Email Address"
                                                type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Phone Number"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Input style={{ marginTop: "20px" }}
                                    id="exampleFormControlTextarea1"
                                    placeholder="Write a large text here ..."
                                    rows="6"
                                    type="textarea"
                                />
                                <Button color="success" size="lg" type="button" style={{ marginTop: "40px", fontSize: "20px" }}>
                                    Hire Me
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;