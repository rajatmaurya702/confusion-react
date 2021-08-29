import React, {Component} from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Jumbotron, Nav, NavItem, Collapse, ModalBody,
        Modal, ModalHeader, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props);

        this.state ={
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal  = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event){// how "this" is working for this function
        this.toggleModal();
        alert("Username :" + this.username.value +" Password: " + this.password.value +
            " Remember me: " + this.remember.value );  //how values are stored/getting from this.username ...
        
        event.preventDefault();
        // console.log(this.username);
        // console.log(this);

    }

    render(){
        // console.log(this);
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/"><img src="assets/images/logo.png" alt="Ristorante con Fusion" height="30" width="41" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    {/* Navlink is  used because if route is equal to the current navlink value(to) then 'active' add to className */}
                                    {/* Maybe to required to go to differnt route efficiently*/}
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <div className="ml-auto" navbar>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Contact Us</Button>
                                    </NavItem>
                                </div>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input)=>{this.username = input}}/> {/*how values are stored/getting from this.username ...*/}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input)=>this.password = input}/> {/* what exactly this.password is here*/}
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                        <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}  />
                                        Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="btn btn-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
            </React.Fragment>
        )
    }
}

export default Header