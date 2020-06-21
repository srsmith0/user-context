import React from 'react';

export const FoodContext = React.createContext();

export const FoodConsumer = FoodContext.Consumer;

export default class FoodProvider extends React.Component {
  state = [
    {name: "Banana",
    group: "Fruit",
    description: "Yellow and tasty",
    addFood: (food) => this.setState([food, ...this.state])
  },
  {
    name: "Pumpkin Bread",
    group: "Grain",
    description: "Seasonal and basic",
  },
  {
    name: "Tamales",
    group: "Many",
    description: "Corn flavor, moist, delicious",
  },
  ]

  updateFood(food){
    this.setState({...food})
  }

  addFood(food) {
    this.setState([food, ...this.state])
  }

  render () {
    return (
      <FoodContext.Provider value={this.state}>
        {this.props.children}
      </FoodContext.Provider>
    )
  }
}
