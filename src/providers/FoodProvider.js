import React from 'react';

export const FoodContext = React.createContext();

export const FoodConsumer = FoodContext.Consumer;

export default class FoodProvider extends React.Component {
  state = [
    {name: "Banana",
    group: "Fruit",
    updateFood: (food) => this.updateFood(food)
  },
  {
    name: "Pumpkin Bread",
    group: "Grain",
    updateFood: (food) => this.updateFood(food)
  },
  {
    name: "Enchiladas",
    group: "Many",
    updateFood: (food) => this.updateFood(food)
  }
  ]

  updateFood(food){
    this.setState({...food})
  }

  render () {
    return (
      <FoodContext.Provider value={this.state}>
        {this.props.children}
      </FoodContext.Provider>
    )
  }
}
