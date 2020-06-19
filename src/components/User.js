import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

export default function User () {
  const user = useContext(UserContext)

  return (
    <div style={userDiv}>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

const userDiv = {
  padding:"20px",
  border: "solid black 2px",
  marginBottom: "15px",
  width: "50%",
  margin: "auto"
}