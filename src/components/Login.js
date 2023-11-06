import React, { Component } from 'react';
import './Login.css'; // Import your CSS file for styling
import Login_image from '../assets/login.png';
import Apple_image from '../assets/apple.png';
import Google_image from '../assets/google.png';
import Linkedin_image from '../assets/linkedin.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userType: 'User Type',
        username: '',
        password: '',
    };
  }

  handleUserTypeChange = (event) => {
    this.setState({ userType: event.target.value });
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  
  handleLogin = () => {
    alert('Login button clicked!');
  };

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-left">
            <h1>Logo</h1>
          <img src={Login_image}  alt="Logo" />
          <h2>Welcome to GAP</h2>
          <p>Where opportunities meet aspiration, and success is just a click away.</p>
        </div>
        <div className="login-form-right">
          <h2>Login to Account</h2>
          <form>
            <div className='form-group'>
                <select value={this.state.userType} onChange={this.handleUserTypeChange}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder='User Name'
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <h4>Forgot Password?</h4>
            <button type="button" onClick={this.handleLogin} className="login-button">Login</button>
            <h5>Or, login with</h5>
            <div className='Icon' >
            <img src={Google_image}  alt="Image 1" />
            <img src={Linkedin_image} alt="Image 2" />
            <img src={Apple_image} alt="Image 3" />
            </div>
            <h6>Don't have an account? <span>Register</span></h6>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
