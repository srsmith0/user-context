import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import AccountProfile from './components/AccountProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={() => <div>Welcome Home</div>} />
        <Route exact path='/account/profile' component={AccountProfile} />
      </Switch>
    </Container>
    </>
  );
}

export default App;
