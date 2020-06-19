import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

export default function Account () {
  const account = useContext(UserContext)

  return (
    <div>
      <h1>{account.firstName}</h1>
      <h1>{account.lastName}</h1>
      <h1>{account.email}</h1>
    </div>
  )
}