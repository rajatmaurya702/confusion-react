// import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'  //default export
import DishDetail from './DishDetailComponent'
import Menu from './menuComponent'
import  {DISHES} from '../shared/dishes' //export const DISHES 
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import Contact from './ContactComponent'
import About from './AboutComponent'
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
      comments: COMMENTS
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

      const DishWithid = ({match})=>{ //passes match, location, history
        return (
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId, 10))} />
        )
      }

    

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            {/* partial matching enable by default */}

            <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
            {/* exact -> partial matching disabled */}

            <Route path='/menu/:dishId' component={DishWithid}/>  {/* Routes start matching from top to down and return the first match */}

            <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>}/>
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;