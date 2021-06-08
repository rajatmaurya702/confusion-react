import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Footer extends Component {
    render(){
        return (
            <div className="Footer mb-3 mt-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer