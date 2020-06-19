import React from 'react';

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export default class UserProvider extends React.Component {
  state = {
    email:'fake@fake.com',
    firstName: 'Shawn',
    lastName: 'Smith',
    updateUser: (account) => this.updateUser(account)
  }

  updateUser (account) {
    this.setState({...account})
  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

