import React, {Component} from "react"
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends Component {
    constructor (props){
        super(props);
        this.state = {
            selectDish: null
        }
    }


    onDishSelect(dish){
        this.setState({selectDish: dish});
    }

    renderDish(dish){ //when this function get called
        if(dish == null){
            return <div></div>
        }
        else {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.title}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                 <div  key = {dish.id} className="col-12 col-md-3 m-1">
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectDish)}  {/*why this is working */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;