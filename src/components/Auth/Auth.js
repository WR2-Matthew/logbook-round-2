import React, { Component } from 'react'
import axios from 'axios';
import './Auth.css'
import { connect } from 'react-redux'
import { setUser } from '../../redux/actionCreators'

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = (e) => {
    const { username, password } = this.state
    e.preventDefault();
    const body = {
      username: username,
      password: password
    }
    axios
      .post('/api/login', body)
      .then(res => {
        this.props.setUser(res.data.user_id, res.data.username)
        this.props.history.push('/dashboard')
      })
  }

  register = (e) => {
    const { username, password } = this.state
    e.preventDefault()
    const body = {
      username: username,
      password: password
    }
    axios
      .post('/api/register', body)
      .then(res => {
        this.props.setUser(res.data.user_id, res.data.username)
        this.props.history.push('/dashboard')
      })
  }

  render() {
    const { username, password } = this.state
    return (
      <div className='auth'>

        <div className='holder'>
          <div className='title'>
            <h1>WELCOME TO THEY SKY!</h1>
          </div>

          <div className='circleHolder'>
            <div className='authLogin'>
              <label>Username:</label>
              <input name='username' value={username} placeholder='Enter Username' onChange={(e) => this.handleChange(e)} />

              <label>Password:</label>
              <input name='password' value={password} placeholder='Enter Password' onChange={(e) => this.handleChange(e)} />
            </div>

            <div className='buttons'>
              <button className='authButtons' onClick={(e) => this.login(e)}>Login</button>
              <button className='authButtons' onClick={(e) => this.register(e)} >Register</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default connect(null, { setUser })(Auth)