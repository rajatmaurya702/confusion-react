import {Navbar , NavbarBrand} from 'reactstrap';
import React, {Component} from 'react'
import DishDetail from './DishDetailComponent'
import Menu from './menuComponent'
import {DISHES} from '../shared/dishes'


class Main extends Component {
  componentDidMount(){
    console.log("Main, componentDidMount");
}
componentDidUpdate(){
    console.log("Main, componentDidUpdate");
}
  constructor (props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectDish: null
    }
  }

  onDishSelect(dish_id){
    this.setState({selectDish: dish_id})
  }

  
  render(){
    console.log("Main, render");
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>



        <Menu dishes={this.state.dishes} on_click={(dish_id) => this.onDishSelect(dish_id)}/> {/* Here we pass function as a props to Menu component:: how this is working:: still have doubt__ onClick vs on_click*/}
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectDish)[0]}/>
      </div>
    );
  }
}

export default Main;