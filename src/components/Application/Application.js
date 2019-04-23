import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button'

class Application extends Component {
    constructor(props, context) {
        super(props, context);

        //states to control opening and closing cards with applicant information and to toggle between saved and save for later messages on button
        this.state = {
            open: false,
            isNotSaved: true
        };
        //binding to make this work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    //function to toggle button text
    handleClick() {
        this.setState(function(prevState) {
            return {isNotSaved: !prevState.isNotSaved};
        });
    }

    render() {
        const { open } = this.state;
        return (
            <div className='application-card'>
                <Card className='text-center'>
                    <Card.Header
                        onClick={() => this.setState({ open: !open })}
                        aria-controls='collapse-text'
                        aria-expanded={open}>
                        {this.props.name}                       
                    </Card.Header>
                    <Collapse in={this.state.open}>
                        <div id='collapse-text'>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <Table bordered hover responsive='sm'>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Position</th>
                                                        <th>Experience</th>
                                                        <th>Applied</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{this.props.id}</td>
                                                        <td>{this.props.position}</td>
                                                        <td>{this.props.experience}</td>
                                                        <td>{this.props.applied}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col>
                                            <Table bordered hover responsive='sm'>
                                                <thead>
                                                    <tr>
                                                        <th>Question</th>
                                                        <th>Answer</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{this.props.questions[0]["text"]}</td>
                                                        <td>{this.props.questions[0]["answer"]}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5><strong>Shift Availability</strong></h5>
                                            <Table striped bordered hover responsive='sm'>
                                                <thead>
                                                    <tr>
                                                        <th>Day</th>
                                                        <th>Shift</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Monday</td>
                                                        <td>{this.props.M}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tuesday</td>
                                                        <td>{this.props.T}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Wednesday</td>
                                                        <td>{this.props.W}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thursday</td>
                                                        <td>{this.props.Th}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Friday</td>
                                                        <td>{this.props.F}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Saturday</td>
                                                        <td>{this.props.S}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday</td>
                                                        <td>{this.props.Su}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Button variant='primary' onClick={this.props.handleSaved}>{this.state.isNotSaved ? 'Save for Later' : 'Saved'}</Button>
                            </Card.Body>
                        </div>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default Application;
