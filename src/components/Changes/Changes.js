import React, { Component } from 'react'
// import axios from 'axios';
import './Changes.css'

class Changes extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      dropzone: '',
      jumpNumber: '',
      discipline: '',
      details: '',
      imageUrl: '',
      toggleEdit: false
    }
  }

  componentDidMount = () => {
    const { jump } = this.props.location.state
    this.setState({
      date: `${jump.date}`,
      dropzone: `${jump.dropzone}`,
      jumpNumber: `${jump.jump_number}`,
      discipline: `${jump.discipline}`,
      details: `${jump.details}`,
      imageUrl: `${jump.image}`
    })
  }

  updateInfo = () => {
    const { toggleEdit } = this.state
    if (!toggleEdit) {
      this.setState({
        toggleEdit: true
      })
    }
    else {
      this.setState({
        toggleEdit: false
      })
    }
  }

  render() {
    console.log(this.state.toggleEdit)
    // if (!this.props.location.history) return null;
    const { date, dropzone, jumpNumber, discipline, details, imageUrl, toggleEdit } = this.state
    return (
      <div className='changesDetails'>

        <div className='changesHead'>
          <div className='changesHeader'>
            <span>Date:</span>
            <button onClick={() => this.updateInfo()} >{date}</button>
            {toggleEdit ? <input /> : null}
          </div>

          <div className='changesHeader'>
            <span>Dropzone:</span>
            <button onClick={() => this.updateInfo()} >{dropzone}</button>
            {toggleEdit ? <input /> : null}
          </div>

          <div className='changesHeader'>
            <span>Jump Number:</span>
            <button onClick={() => this.updateInfo()} >{jumpNumber}</button>
            {toggleEdit ? <input /> : null}
          </div>

          <div className='changesHeader'>
            <span>Discipline:</span>
            <button onClick={() => this.updateInfo()} >{discipline}</button>
            {toggleEdit ? <input /> : null}
          </div>
        </div>

        <div className='changesBody'>
          <div className='changesbodies'>
            <span>Jump Details:</span>
            <button onClick={() => this.updateInfo()} >{details}</button>
            {toggleEdit ? <input /> : null}
          </div>

          <div className='changesbodies'>
            <span>Jumps Image:</span>
            <img className='jumpImg' alt='jump' src={imageUrl} onClick={() => this.updateInfo()} />
            {toggleEdit ? <input /> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Changes