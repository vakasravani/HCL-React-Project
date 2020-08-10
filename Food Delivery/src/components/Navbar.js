import React, { Component } from 'react';
import logIn from './logIn';
import SignUp from './SignUp';
import cart from './cart';
import Restaurants from './Restaurants';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import viewRestaurantItems from './viewRestaurantItems';

class Navbar extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
                    <a className="navbar-brand" href="#">Food Delivery</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="cart"><i className="fas fa-cart-plus mr-1"></i>cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Restaurants"><i className="fas fa-utensils mr-1"></i>restaurant</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ">
                            <li className="nav-item" >
                                <a className="nav-link" href="signup"><i className="fas fa-user-plus mr-1"></i>Register <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="logIn"><i className="fas fa-sign-in-alt mr-2"></i>signin</a>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <Route exact path="/logIn" component={logIn} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/cart" component={cart} />
                <Route exact path="/" component={Restaurants} />
                <Route exact path="/Restaurants" component={Restaurants} />
                <Route exact path="/viewMenu/:restaurantId" component={viewRestaurantItems} />
            </Router>
        );
    }
}

export default Navbar;