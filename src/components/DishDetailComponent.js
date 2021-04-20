import {Component} from 'react'
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap'
import {ListGroup, ListGroupItem} from 'reactstrap'

class DishDetail extends Component {
    componentDidMount(){
        console.log("DishDetail, componentDidMount");
    }
    componentDidUpdate(){
        console.log("DishDetail, componentDidUpdate");
    }
    renderDish(){
        return (
            <CardBody>
                <CardTitle tag='h4'>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        )
    }

    renderComment(comments){
        if(comments){
            const items = comments.map((comment)=>{
                return (
                    <ListGroupItem key={comment.id} className='border-0' color="dark">
                         <h6>{comment.comment}</h6> 
                         <h6>-- {comment.author + ", " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</h6>
                    </ListGroupItem>
                )
            });
            return(
                <div className="col-12 col-md-5 m-2">
                    <h4>Comments</h4>
                    <ListGroup>
                        {items}
                    </ListGroup>
                </div>
            )
        }
        else{
            return <div></div>
        }
        
    }

    render(){
        console.log("DishDetail, render");
        if(this.props.dish){
            return (

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-md-5 m-2">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                {this.renderDish(this.props.dish)}
                            </Card>
                        </div>
                        {this.renderComment(this.props.dish.comments)}
                    </div>
                </div>
                
                    
            )
        }
        else{
            return (<div></div>)
        }
    }
}

export default DishDetail