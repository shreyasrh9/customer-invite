import React, { Component } from 'react'
import './LandingPage.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobActions from '../actions'
import { Row, Col, Input, Form, FormGroup, Label, Container, Button } from 'reactstrap'
import { FaPen, FaTrash, FaEdit } from 'react-icons/fa';
import Box from './Box/Box'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin/Dustibin'

class Landingpage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        newTag: '',
        userComments: '',
        addtionalContacts: ([[{ 'Name': '' },
        { 'Position': '' },
        { 'Email': '' },
        { 'Phone': '' }],
        ])
    }

    componentWillMount() {
        this.props.loadInvitations()
    }

    addTag = (newTag) => {
        this.props.addTag(newTag)
    }

    addAddtionalContact = () => {
        let addtionalCont = this.state.addtionalContacts
        addtionalCont.push([[{ 'Name': '' },
        { 'Position': '' },
        { 'Email': '' },
        { 'Phone': '' }],
        ])
        this.setState({
            addtionalContacts: addtionalCont
        })
    }

    dropped = (tag) => {
        this.props.chooseTags(tag)
    }

    render() {
        return (
            <Container>
                <h1>Business Solution Personal Invitation</h1>
                <p>{this.props.customerForm !== undefined ? this.props.customerForm.invitationDetails.introtext : ''}</p>
                {/*<p>Dear Mr tired,\\nBlah blah blah</p>*/}
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
                                    {
                                        this.props.customerForm.countriesResponse.map(country => {
                                            return <option key={country.isocode} value={country.isocode}>{country.display}</option>
                                        })
                                    }
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
                        <DndProvider backend={HTML5Backend}>
                        <Dustbin tags={this.props.customerForm.chosenTags}/>
                        </DndProvider>   
                        </Col>
                    </Row>

                    {this.props.customerForm !== undefined ? <Row>
                        <Col>
                        <DndProvider backend={HTML5Backend}>
                                {
                                    this.props.customerForm.introTags.map(tag => {
                                        return (
                                            <Box name={tag} dropped={this.dropped}/>
                                        )
                                    })
                                }
                        </DndProvider>
                        </Col>
                    </Row> : ''}

                    
                    <Row>
                        <Col xs={4}>
                            <FormGroup>
                                <Input type="text" placeholder="your own keyword" onChange={(event) => this.setState({ newTag: event.target.value })} />
                            </FormGroup>
                        </Col>
                        <Col><FaPen onClick={() => this.addTag(this.state.newTag)} /></Col>
                    </Row>

                        
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input type="textarea" placeholder="comment, description of actual used system" onChange={(event) => this.setState({ userComments: event.target.value })} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label>Additional Contact</Label>
                        </Col>
                    </Row>
                    {
                        this.state.addtionalContacts.map((addtionalContact, index) => {
                            return (
                                <Row>
                                    <Col xs={2}>
                                        <FormGroup>
                                            <Input type="text" value={addtionalContact.Name} placeholder="Name" onChange={(e) => this.state.addtionalContacts[index].Name = e.target.value} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={2}>
                                        <FormGroup>
                                            <Input type="text" value={addtionalContact.Position} placeholder="Position" onChange={(e) => this.state.addtionalContacts[index].Position = e.target.value} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={2}>
                                        <FormGroup>
                                            <Input type="text" value={addtionalContact.Email} placeholder="E-mail" onChange={(e) => this.state.addtionalContacts[index].Email = e.target.value} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={2}>
                                        <FormGroup>
                                            <Input type="text" value={addtionalContact.Phone} placeholder="Phone" onChange={(e) => this.state.addtionalContacts[index].Phone = e.target.value} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={2}>
                                        <Label>Favorite<br></br>Reach time</Label>
                                        <Input
                                            type="time"
                                            placeholder="from"
                                        />
                                        <Input
                                            type="time"
                                            placeholder="to"
                                        /></Col>
                                </Row>
                            )
                        })
                    }
                    <Row>
                        <Col>
                            <Button onClick={this.addAddtionalContact}>Add addtionalContact</Button>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <Button color="success" size="sm" >Submit</Button>
                        </Col>
                    </Row> */}
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


