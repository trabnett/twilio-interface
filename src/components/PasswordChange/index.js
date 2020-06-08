import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
 
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
 
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { passwordOne } = this.state;
 
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
 
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
 
    return (
      <form className='m-5' onSubmit={this.onSubmit}>
        <h3>Change Password?</h3>
        <label>New Password</label><br></br>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        /><br></br><br></br>
        <label>Confirm New Password</label><br></br>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        /><br></br><br></br>
        <button className='btn btn-primary' disabled={isInvalid} type="submit">
          Change Password
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);
