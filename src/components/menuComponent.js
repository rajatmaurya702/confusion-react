import React, {Component} from "react"
import {Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent'

class Menu extends Component {
    constructor (props){
        console.log("Menu constructor ");
        super(props);
        this.state = {
            selectDish: null
        }
    }


    onDishSelect(dish){
        if(this.state.selectDish === dish){
            this.setState({selectDish : null});
        }
        else this.setState({selectDish: dish});
    }


    componentDidMount(){
        console.log("Menu componenetDidMount");
    }

    render(){
        console.log("Menu render");
        const menu = this.props.dishes.map((dish) => {
            // console.log(idx);
            return (
                 <div  key = {dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="90%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay  >
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card> 
                </div>
            )
        });
        // console.log(menu);
        
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                <DishDetail dish={this.state.selectDish} /> 
            </div>
        )
    }
}

export default Menu;