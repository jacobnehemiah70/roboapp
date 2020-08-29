import React, { Component } from 'react';
import './LogIn.css'
import Particles from 'react-particles-js';



const Particlesoptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        valueArea: 800
      },

    }
  }
}


class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emial:"",
      password: "",
      messgae: "",
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === 'john' &
     this.state.email === 'john@gmail.com' &
      this.state.password === '123') {
      this.setState({ message: "Successful!" })
      this.props.swtichPage();
      return;
    }
    this.setState({ message: 'Unsuccessful' })
  }

  render() {
    return (
      <div className='login-form'>
        
        <h1>{this.state.message}</h1>
        {/* <h6 className=" text-muted ">Sign in to your account</h6> */}
        <form action='' method='' onSubmit={this.onFormSubmit}>
       

          <div className='form-group'>
            <input type="text" className="form-control" placeholder="Name" onChange={this.onNameChange} required />

          </div>
          <div className='form-group'>

            <input type="email" onChange={this.onEmailChange} className="form-control" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type='password' placeholder='password' onChange={this.onPasswordChange} className="form-control" required />
          </div>
          <div className="form-group text-left">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" name="remember" className="custom-control-input" id="remember-me" />
              <label className="custom-control-label text-white" for="remember-me">Remember me</label>
            </div>
          </div>
          <button type='submit' className="btn btn-primary shadow-2 mb-4">Login</button>
          <p className="mb-2 text-white">Forgot password? <a href="forgot-password.html">Reset</a></p>
          <p className="mb-0 text-white">Don’t have an account? <a href="signup.html">Signup</a></p>
        </form>
        <Particles className='particles'
          params={Particlesoptions} />

      </div>
    );
  }
}

// {/* <form onSubmit ={this.onFormSubmit}>
//           <input
//           type='text'
//           placeholder='name'
//             onChange={this.onNameChange}/>
//           <input
//             type='password'
//             placeholder='password'
//             onChange={this.onPasswordChange}/>
//             <button type='submit' >Login</button>
//         </form> */}


export default LogIn;