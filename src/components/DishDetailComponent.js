import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'
import { ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import {Link} from 'react-router-dom'


const RenderDish = ({ dish }) => { //name of component(functional or class) must start with capital letter
    return (
        <CardBody>
            <CardTitle tag='h4'>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    )
}

const RenderComment = ({ comments }) => {
    if (comments) {
        const items = comments.map((comment) => {
            return (
                <ListGroupItem key={comment.id} className='border-0' color="dark">
                    <h6>{comment.comment}</h6>
                    <h6>-- {comment.author + ", " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h6>
                </ListGroupItem>
            )
        });
        return (
            <div className="col-12 col-md-5 m-2">
                <h4>Comments</h4>
                <ListGroup>
                    {items}
                </ListGroup>
            </div>
        )
    }
    else {
        return <div></div>
    }

}

const DishDetail = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>{props.dish.name}</h1>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-12 col-md-5 m-2">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <RenderDish dish={props.dish} />
                        </Card>
                    </div>
                    <RenderComment comments={props.comments} />
                </div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}



export default DishDetail