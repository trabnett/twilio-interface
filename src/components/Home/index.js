import React from 'react';
import { AuthUserContext } from '../Session';

const Home = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <HomeAuth user={authUser}/> : <HomeNonAuth />
    }
  </AuthUserContext.Consumer>
);
 
const HomeAuth = (user) => (
  <div className='container text-center'>
    <h1>Welcome logged in person {user.email}</h1><br></br><br></br>
    <img src='https://media.giphy.com/media/uiMIJMFYgRaAz5Pcb7/giphy.gif'></img>
  </div>
);

const HomeNonAuth = () => (
  <div className='container text-center'>
    <h1>You are not logged in</h1><br></br><br></br>
    <img src='https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif'></img>
  </div>
);

export default Home;
