// import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'
import DishDetail from './DishDetailComponent'
import Menu from './menuComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./HomeComponent"


class Main extends Component {
  componentDidMount() {
    console.log("Main, componentDidMount");
  }
  componentDidUpdate() {
    console.log("Main, componentDidUpdate");
  }

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectDish: null
    }
  }

  onDishSelect(dish_id) {
    this.setState({ selectDish: dish_id })
  }


  render() {
      const HomePage = ()=>{
        return (
          <Home/>
        )
      }

    console.log("Main, render");

    return (
      <div className="App">
        <Header />
        {/* <Menu dishes={this.state.dishes} on_click={(dish_id) => this.onDishSelect(dish_id)} /> Here we pass function as a props to Menu component:: how this is working:: still have doubt__ onClick vs on_click */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} /> */}

        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
          <Redirect to='/home' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;