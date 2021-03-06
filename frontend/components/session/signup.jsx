import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.type]: e.target.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .signup({
        email: this.state.email,
        password: this.state.password
      })
      .then(action => {
        if (action.type === "RECEIVE_CURRENT_USER") {
          this.props.history.push("/settings");
        }
      });
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.login({
      email: "demo@email.com",
      password: "password"
    });
  }

  render() {
    return <div className="auth">
        <h1 className="auth__title">Sign Up</h1>
        <form action="" className="auth__form">
          <label htmlFor="" className="auth__form-field">
            Email Address
            <input onChange={this.handleChange} type="email" autoFocus="autoFocus" className="auth__form-input" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required />
          </label>
          <label htmlFor="" className="auth__form-field">
            Password
            <input onChange={this.handleChange} type="password" className="auth__form-input" minLength="6" required />
          </label>
          <p className="auth__errors">{this.props.errors}</p>
          <div className="auth__login-signup">
            <div>
              <button className="auth__submit" onClick={this.handleSubmit}>
                Sign Up
              </button>
              <button className="auth__submit--demo" onClick={this.handleDemoUser}>
                Demo Login
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>;
  }
}

export default Signup;
