import React from "react"
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'


function RenderMenuItem({ dish, on_click }) {
    return (
        <Card onClick={() => on_click(dish.id)}>   { /*this is little hard to understand */}
            <CardImg width="90%" src={dish.image} alt={dish.name} />
            <CardImgOverlay  >
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}



const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <RenderMenuItem dish={dish} on_click={props.on_click} />
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

export default Menu;