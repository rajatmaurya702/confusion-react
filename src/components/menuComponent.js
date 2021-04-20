import React, {Component} from "react"
import {Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class Menu extends Component {
    componentDidMount(){
        console.log("Menu, componentDidMount");
    }
    componentDidUpdate(){
        console.log("Menu, componentDidUpdate");
    }

    render(){
        console.log("Menu, render");
        const menu = this.props.dishes.map((dish) => {
            return (
                 <div  key = {dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={()=>this.props.on_click(dish.id)}>
                        <CardImg width="90%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay  >
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card> 
                </div>
            )
        });
        
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}

export default Menu;