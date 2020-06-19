import React from 'react';
import User from './User';
import UserForm from './UserForm';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function UserProfile () {
  return (
    <div style={{textAlign: "center"}}>
    <User />
    <NavLink to='/user/foods'>
      <Button style={{margin:"20px 20px"}} color="teal" textColor="orange">See my favorite foods!</Button>
      </NavLink>
    <UserForm />
    </div>
  )
}