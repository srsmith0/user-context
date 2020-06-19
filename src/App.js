import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import FoodList from './components/foods/FoodList'


function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={() => <div>Welcome Home</div>} />
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/user/foods' component={FoodList} />
      </Switch>
    </Container>
    </>
  );
}

export default App;
