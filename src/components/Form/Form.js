import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { createJump } from '../../redux/actionCreators'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      dropzone: '',
      jumpNumber: '',
      discipline: '',
      details: '',
      imageUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => {
    console.log('hit')
  }

  create = () => {
    const { date, dropzone, jumpNumber, discipline, details, imageUrl } = this.state
    const body = {
      date: date,
      dropzone: dropzone,
      jumpNumber: jumpNumber,
      discipline: discipline,
      details: details,
      imageUrl: imageUrl
    }
    axios
      .post('/api/create/jump', body)
      .then(res => {
        this.props.createJump(res.data)
        this.props.history.push('/dashboard')
      })
  }

  cancel = () => {
    this.setState({
      date: '',
      dropzone: '',
      jumpNumber: '',
      discipline: '',
      details: '',
      imageUrl: ''
    })
    this.props.history.push('/dashboard')
  }

  render() {
    const { date, dropzone, jumpNumber, discipline, details, imageUrl } = this.state
    return (
      <div className='allOfForm'>
        <h1>Enter Your Jump Information</h1>
        <div className='formHolder' >
          <div className='formHeader'>
            <label>Date</label>
            <input name='date' value={date} placeholder='Enter Your Jumps Date' onChange={(e) => this.handleChange(e)} />
          </div>

          <div className='formHeader'>
            <label>Dropzone</label>
            <input name='dropzone' value={dropzone} placeholder='Enter Your Dropzone' onChange={(e) => this.handleChange(e)} />
          </div>

          <div className='formHeader'>
            <label>Jump Number</label>
            <input name='jumpNumber' value={jumpNumber} placeholder='Enter Your Jump Number' onChange={(e) => this.handleChange(e)} />
          </div>

          <div className='formHeader'>
            <label>Discipline</label>
            <input name='discipline' value={discipline} placeholder='Enter Your Jumps Discipline' onChange={(e) => this.handleChange(e)} />
          </div>
        </div>

        <div className='imageHolder' >
          <div className='smallerHolder'>
            <label>Jump Details</label>
            <input name='details' value={details} placeholder='Enter Your Jump Details' onChange={(e) => this.handleChange(e)} />
          </div>
          <div className='smallerHolderTwo'>
            <label>Image</label>
            <input name='imageUrl' value={imageUrl} placeholder="Enter Your Image's Url" onChange={(e) => this.handleChange(e)} />
          </div>
        </div>

        <div className='formButtons'>
          <button className='formBut' onClick={() => this.create()}>Create Jump</button>
          <button className='formBut' onClick={() => this.cancel()}>Cancel Changes</button>
        </div>
      </div>
    )
  }
}



export default connect(null, { createJump })(Form)