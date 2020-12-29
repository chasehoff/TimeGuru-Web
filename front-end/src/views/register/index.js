import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import './index.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

class Register extends Component {
     
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    //change state onchange
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    }
    
    render () {
        const { errors, name, email, password, password2 } = this.state;
        return (
            <div className="register__container">
                <div className="register__modal">
                    <AccountCircleIcon className="register__icon" />
                    <h3>Register</h3>
                    <form className="register__modal__form" method="post" onSubmit={this.onSubmit}>
                        <span className="validation__errors">{errors.name}</span>
                        <TextField id="name" error={errors.name} type="text" required className="register__textField" label="Name" variant="outlined" value={name} onChange={this.onChange} />
                        <span className="validation__errors">{errors.email}</span>
                        <TextField id="email" error={errors.email} type="email" required className="register__textField" label="Email" variant="outlined" value={email} onChange={this.onChange} />
                        <span className="validation__errors">{errors.password}</span>
                        <TextField id="password" error={errors.password} type="password" required className="register__textField" label="Password" variant="outlined" value={password} onChange={this.onChange} />
                        <span className="validation__errors">{errors.password2}</span>
                        <TextField id="password2" error={errors.password2} type="password" required className="register__textField" label="Re-Type Password" variant="outlined" value={password2} onChange={this.onChange}/>
                        <input className="register__button" type="submit" value="Create Account" />
                    </form>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));
