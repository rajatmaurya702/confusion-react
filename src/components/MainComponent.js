// import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'  //default export
import DishDetail from './DishDetailComponent'
import Menu from './menuComponent'
import  {DISHES} from '../shared/dishes' //export const DISHES 
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import Contact from './ContactComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./HomeComponent"
import { COMMENTS } from '../shared/comments'



class Main extends Component {
  // componentDidMount() {
  //   console.log("Main, componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("Main, componentDidUpdate");
  // }

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comment: COMMENTS
    }
  }


  render() {
      const HomePage = ()=>{
        return (
          <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
            promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
          />
        )
      }

    // console.log("Main, render");

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            {/* partial matching enable by default */}

            <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
            {/* exact -> partial matching disabled */}

            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;