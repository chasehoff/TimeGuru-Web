import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import './index.css';
import Navigation from '../../components/navigation';

class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {}
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    }
    render() {
        const {errors, email, password } = this.state;
        return (
            <div>
                <Navigation />
                <div className="login__container">
                    <div className="login__modal">
                        <AccountCircleIcon className="login__icon" />
                        <h3>Sign In</h3>
                        <form className="login__modal__form" onSubmit={this.handleSubmit}>
                            <div>
                                <span>{errors.email}</span>
                                <span>{errors.emailnotfound}</span>
                            </div>
                            <TextField errors={errors.email} id="email" type="email" className="login__textField" label="Email" variant="outlined" value={email} onChange={this.onChange} />
                            <div>
                                <span>{errors.password}</span>
                                <span>{errors.passwordincorrect}</span>
                            </div>
                            <TextField errors={errors.password} id="password" type="password" className="login__textField" label="Password" variant="outlined" value={password} onChange={this.onChange} />
                            <p>Don't have an account? Sign up <span><Link to="/register">here</Link></span>!</p>
                            <input className="login__button" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);