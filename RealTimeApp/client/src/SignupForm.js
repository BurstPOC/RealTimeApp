import React, { Component } from 'react';
import {
  createAccount,
} from './api';

class SignupForm extends Component {
  state = {
    Name: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    createAccount(this.state.Name);
    this.setState({
      Name: '',
    });
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.Name}
            onChange={(evt) => this.setState({ Name: evt.target.value })}
            placeholder="Message"
            className="Form-drawingInput"
            required
          />
          <button
            type="submit"
            className="Form-button"
          >Send</button>
        </form>
      </div>
    );
  }
}
export default SignupForm;
