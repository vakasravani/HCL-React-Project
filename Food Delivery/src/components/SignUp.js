import React, { Component } from 'react';
import User from '../model/User';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../actions/allActions';
class SignUp extends Component {

    componentDidMount(){
        this.user = new User()
    }

    user
    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            nameError: false,
            emailError: false,
            passwordError: false,
            lengthError: false,
            disabledFlag: true,
            submitFlag: true,
            retypeError: false,
            matchError: false,
            phoneError: false,
            phoneConditionError: false,
            addressError: false,
            charCondition: false,
            successFlag: true,
        }
    }
    handleUserNameChange(event) {
        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            nameError: (this.user.userName === "") ? true : false
        })
        this.buttonFlag()
    }
    handleEmailChange(event) {
        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            emailError: (this.user.userEmail === "") ? true : false,
        })
        this.buttonFlag()
    }
    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            lengthError: (this.user.userPassword.length <= 6) ? true : false

        })
        this.buttonFlag()
    }
    handleRetypePassword(event) {
        this.user.retypePassword = event.target.value
        this.setState({
            user: this.user,
            retypeError: (this.user.retypePassword === "") ? true : false,
            matchError: (this.user.retypePassword !== this.user.userPassword) ? true : false
        })
        this.buttonFlag()
    }

    handleMobile(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            phoneError: (this.user.userMobile === "") ? true : false,
            phoneConditionError: (this.user.userMobile.length !== 10) ? true : false,
            charCondition: (isNaN(this.user.userMobile)) ? true : false

        })
        this.buttonFlag()
    }
    handleAddressChange(event) {
        this.user.userAddress = event.target.value
        this.setState({
            user: this.user,
            addressError: (this.user.userAddress === "") ? true : false
        })
        this.buttonFlag()
    }
    buttonFlag() {
        this.setState({
            disabledFlag: ((this.user.userName === "") || (this.user.userPassword === "") || (this.user.retypePassword !== this.user.userPassword) || (this.user.userPassword.length <= 6) || (this.user.retypePassword === "") || (this.user.userMobile === "") || (this.user.userMobile.length !== 10) || (isNaN(this.user.userMobile)) || (this.user.userAddress === "")) ? true : false
        })

    }
    handleSubmit(event) {
        this.setState({
        })
        event.preventDefault();
        this.props.signup(this.user)
        this.user = new User()
        this.setState({
            submitFlag: false
        })
    }
    render() {
        return (
            <div className="container">

                <div className="jumbotron py-3 my-4">
                    <p className="display-4 text-center mb-0">Register Form</p>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" id="name" placeholder="User Name" value={this.state.user.userName} onChange={(event) => this.handleUserNameChange(event)} />
                        {
                            (this.state.nameError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Username Cannot be empty
                                </div> : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter email" value={this.state.user.userEmail} onChange={(event) => this.handleEmailChange(event)} />
                        {
                            (this.state.emailError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Email canot be Empty
                                </div> : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                        {
                            (this.state.passwordError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Password Cannot be empty
                                </div> : (this.state.lengthError) ?
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>sorry!</strong> Password should be greater than 6 Characters
                                    </div> : null
                        }
                    </div>
                    <div className="form-group">
                        <label >Retype Password</label>
                        <input type="password" className="form-control" id="retype" placeholder="retype password" value={this.state.user.retypePassword} onChange={(event) => this.handleRetypePassword(event)} />
                        {
                            (this.state.retypeError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Retype Password Cannot be empty
                                </div> : (this.state.matchError) ?
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Check!</strong> Re-type Should be same as Password
                                  </div> : null

                        }
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" id="mobile" placeholder="Mobile" value={this.state.user.userMobile} onChange={(event) => this.handleMobile(event)} />
                        {
                            (this.state.phoneError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Mobile Cannot be empty
                                </div> : (this.state.phoneConditionError) ?
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>sorry!</strong> Number should be exactly 10 Characters
                                  </div> : (this.state.charCondition) ?
                                        <div className="alert alert-dismissible alert-danger">
                                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                                            <strong>sorry!</strong>No Charactersare allowed
                                        </div> : null

                        }
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" placeholder="Enter address" value={this.state.user.userAddress} onChange={(event) => this.handleAddressChange(event)} rows="3" />
                        {
                            (this.state.addressError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Address Cannot be empty
                          </div> : null
                        }
                    </div>
                    <button type="submit" className="btn btn-primary mb-3" disabled={this.state.disabledFlag}>Submit</button>
                </form>
                {
                    (!this.state.submitFlag && this.state.successFlag) ?
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Well done!</strong> You successfully registerd.
                        </div> : null
                }
            </div>

        );
    }
}
SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
}
export default connect(null, { signup})(SignUp);