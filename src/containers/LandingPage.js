import React, { Component } from 'react'
import './LandingPage.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobActions from '../actions'
import { Row, Col, Input, Form, FormGroup, Label, Container, Button } from 'reactstrap'


class Landingpage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h1>Business Solution Personal Invitation</h1>
                <Form>
                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Company<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Anrede<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Contact Person<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Street, No<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Postcode, City<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Country<sup>*</sup></Label>
                                <Input type="select" required>
                                    <option>Country</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Value Added Tax Ident, No</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Telephone<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>Fax</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Label>E-mail<sup>*</sup></Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button color="success" size="sm">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        customerForm: state.customerForm,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(jobActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);


