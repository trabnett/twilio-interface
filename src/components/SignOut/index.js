import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button class='btn btn-primary' type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
