import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillReceiveProps(props) {
    if (props.signedIn) {
      props.router.push("/#/");
    }
  }

  handleInput(e) {
    let updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({user: this.state});
  }

  render() {
    const buttonText = this.props.formType === 'signin' ? "Sign In" : "Sign Up";
    let errors = [];
    if (this.props.errors) {
      Object.keys(this.props.errors).forEach((e) => {
        errors.push(<li key={this.props.errors[e]}>{this.props.errors[e]}</li>);
      });
    }

    return (
      <div>
        <h1>{buttonText}</h1>
        {errors}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text'
            name="username"
            onChange={this.handleInput.bind(this)}
            value={this.state.username}
            placeholder="User name"/>
          <input type='password'
            name="password"
            onChange={this.handleInput.bind(this)}
            value={this.state.password}
            placeholder="Password"/>
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
