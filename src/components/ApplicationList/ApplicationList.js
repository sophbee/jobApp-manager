import React, { Component } from 'react';
import Application from '../Application/Application';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class ApplicationList extends Component {
    constructor(props) {
        super(props);

        //holding filtered applicant names, favorited names, and marking applicants as saved or not in state
        this.state = {
            filteredApplicants: [],
            savedApplicants: [],
            isSaved: true
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSaved = this.handleSaved.bind(this);
    }

    //after component mounts, sending data to change the state (either show searched applicant or all applicants)
    componentDidMount() {
        this.setState({
            filteredApplicants: this.props.applicants,
            // savedApplicants: this.props.applicants
        });
    }

    //trigger any time props being passed into component are changed
    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredApplicants: nextProps.applicants,
            // savedApplicants: nextProps.applicants
        });
    }

    //function to handle saved applicants for viewing later
    // handleSaved() {
    //     this.setState({
    //         isSaved: true
    //     });
    //     if(this.setState === true) {
    //         return savedApplicants;
    //     } else {
    //         return filteredApplicants;
    //     }
    // }

    handleChange(e) {
        //hold the original version of the list
        let currentList = [];
        // hold the filtered list before putting into state
        let newList = [];

        //if search bar isn't empty
        if (e.target.value !== "") {
            //assign all applicants to currentList
            currentList = this.props.applicants;

            //.filter() to show searched applicants
            newList = currentList.filter(applicant => {
                //change applicant name to lowercase
                const applicantLowerCase = applicant.name.toLowerCase();
                //change search term to lowercase
                const filtered = e.target.value.toLowerCase();
                //check to see if the current list item includes the search term; if so, add to newList
                return applicantLowerCase.includes(filtered);
            });
        } else {
            // if search is empty, newList to currentList
            newList = this.props.applicants;
        }
        //set filtered state based newList
        this.setState({
            filteredApplicants: newList
        });
    }

    render() {
        //sorting names in ABC order before mapping out to client side
        return (
            <div className='applicationList-panel'>
            <Container>
                <Form>
                    <FormControl 
                        type="text"
                        size="lg"
                        placeholder="Search Applicants" 
                        className="mr-sm-2"
                        onChange={this.handleChange}
                    />
                </Form>
             
                {this.state.filteredApplicants
                    .sort(function(a, z) {
                        let aName = a.name.toLowerCase();
                        let zName = z.name.toLowerCase();
                        return (aName < zName) ? -1 : (aName > zName) ? 1 : 0;
                    })
                    .map((applicant, index) => (
                    <Application
                        key={index}
                        id={applicant.id}
                        name={applicant.name}
                        position={applicant.position}
                        applied={applicant.applied}
                        experience={applicant.experience}
                        M={applicant.availability.M}
                        T={applicant.availability.T}
                        W={applicant.availability.W}
                        Th={applicant.availability.Th}
                        F={applicant.availability.F}
                        S={applicant.availability.S}
                        Su={applicant.availability.Su}
                        questions={applicant.questions}
                    />
                ))}
                <Button variant='primary' onClick={this.handleSaved}>Show Saved Applicants</Button>
            </Container>
            </div>
        );
    }
}

export default ApplicationList;