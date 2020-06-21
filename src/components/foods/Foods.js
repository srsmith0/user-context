import React, { useContext, useEffect, useState } from 'react';
import { FoodContext } from '../../providers/FoodProvider.js';
import { Card } from 'semantic-ui-react';

export default function Foods () {
const foodList = useContext(FoodContext)
const [foodState, setFoodState] = useState([])

useEffect (() => {
  const foodState = setFoodState(foodList)
  console.log(foodState)
}, [])

return foodList.map((f) => 
  <Card>
    <Card.Header>{f.name}</Card.Header>
    <Card.Meta>Type: {f.group}</Card.Meta>
    <Card.Description>
      Description: 
      <br />
      {f.description}</Card.Description>
  </Card>
)


}


