import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  handleSubmit = ( event ) => {
    const { onSubmit } = this.props;
    const { firstName, lastName } = this.state;

    event.preventDefault();

    onSubmit({ firstName, lastName });

    this.setState({
      firstName: '',
      lastName: ''
    });
  }
  handleFirstNameChange = ( event ) => {
    this.setState({ firstName: event.target.value })
  }
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value })
  }
  render() {
    const { firstName, lastName } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First name</Label>
          <Input
            required
            placeholder="First name"
            onChange={this.handleFirstNameChange}
            value={firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            required
            placeholder="Last name"
            onChange={this.handleLastNameChange}
            value={lastName}
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">Create</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;