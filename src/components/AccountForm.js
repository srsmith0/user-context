import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { UserContext } from '../providers/UserProvider';

function AccountForm () {
  const user = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const editUser = {email: email, firstName: fname, lastName: lname}

  const onSubmit = (e) => {
    user.updateUser(editUser)
  }

  return(
    <Form onSubmit={onSubmit}>
      <Form.Input 
        label="Email"
        name= "email"
        value= {email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Form.Input 
        label="First Name"
        name= "fname"
        value= {fname}
        onChange={(e) => setFname(e.target.value)} 
      />
      <Form.Input 
        label="Last Name"
        name= "lname"
        value= {lname}
        onChange={(e) => setLname(e.target.value)} 
      />
      <Button color="purple">Submit!</Button>
    </Form>
  )
}

export default AccountForm;