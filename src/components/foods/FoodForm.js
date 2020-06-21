import React, { useState, useContext } from 'react';
import { FoodContext } from '../../providers/FoodProvider';
import { Form, Button } from 'semantic-ui-react';

function FoodForm() {
  const food = useContext(FoodContext)
  const [name, setName] = useState('')
  const [group, setGroup] = useState('')
  const [description, setDescription] = useState('')

  const newFood = {name, group, description}
  const foodList = [food]

  const handleSubmit = (e) => {
    e.preventDefault()
    addFood(newFood)
    
  }


  const addFood = (foods) => {
    food.push(foods)
    console.log(foods)
    console.log(food)
  }
 

  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <Form.Input 
      name= "name"
      value= {name}
      label= "Name"
      placeholder= "Enter Name"
      onChange={(e) => setName(e.target.value)}
      />
      <Form.Input 
      name= "group"
      value= {group}
      label= "Group"
      placeholder= "Enter Food Group"
      onChange={(e) => setGroup(e.target.value)}
      />
      <Form.Input 
      name= "descrption"
      value= {description}
      label= "Descrpition"
      placeholder= "Enter description"
      onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Submit</Button>
    </Form>
    
  )

}
export default FoodForm;

const formStyle = {
  width: "50%",
}
