import React, { Component } from 'react';
import {
  subscribeToAccount,
} from './api';


class SignupList extends Component {
  constructor(props) {
    super(props);

    subscribeToAccount((signups) => {
      this.setState(prevState => ({
        signup: prevState.signup.concat([signups]),
      }));
    });
  }

  state = {
    signup: [],
  };

  render() {
    const signup = this.state.signup.map(signups => (
      <li
        className="SignupList-item"
        key={signups.id}
      >
        {signups.name}
      </li>
    ));

    return (
      <ul
        className="SignupList"
      >
        {signup}
      </ul>
    );
  }
}

export default SignupList;
