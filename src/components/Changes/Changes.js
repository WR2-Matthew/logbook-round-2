import React, { Component } from 'react'
// import axios from 'axios';
import './Changes.css'
import { connect } from 'react-redux'
import { getJumps } from '../../redux/actionCreators'

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
      toggleEditOne: false,
      toggleEditTwo: false,
      toggleEditThree: false,
      toggleEditFour: false,
      toggleEditFive: false,
      toggleEditSix: false
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
    const { toggleEditOne } = this.state
    if (!toggleEditOne) {
      this.setState({
        toggleEditOne: true
      })
    }
    else {
      this.setState({
        toggleEditOne: false
      })
    }
  }

  updateInfoTwo = () => {
    const { toggleEditTwo } = this.state
    if (!toggleEditTwo) {
      this.setState({
        toggleEditTwo: true
      })
    }
    else {
      this.setState({
        toggleEditTwo: false
      })
    }
  }

  updateInfoThree = () => {
    const { toggleEditThree } = this.state
    if (!toggleEditThree) {
      this.setState({
        toggleEditThree: true
      })
    }
    else {
      this.setState({
        toggleEditThree: false
      })
    }
  }

  updateInfoFour = () => {
    const { toggleEditFour } = this.state
    if (!toggleEditFour) {
      this.setState({
        toggleEditFour: true
      })
    }
    else {
      this.setState({
        toggleEditFour: false
      })
    }
  }

  updateInfoFive = () => {
    const { toggleEditFive } = this.state
    if (!toggleEditFive) {
      this.setState({
        toggleEditFive: true
      })
    }
    else {
      this.setState({
        toggleEditFive: false
      })
    }
  }

  updateInfoSix = () => {
    const { toggleEditSix } = this.state
    if (!toggleEditSix) {
      this.setState({
        toggleEditSix: true
      })
    }
    else {
      this.setState({
        toggleEditSix: false
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editJump = () => {
    const { date, dropzone, jumpNumber, discipline, details, imageUrl } = this.state
    const { jump } = this.props.location.state
    const body = { date, dropzone, jumpNumber, discipline, details, imageUrl }
    axios
      // not sure if this jump id is going to work. Check console log of this.props.location.state
      .put(`/api/change/jump/${jump.jump_id}`, body)
      .then(res => {
        this.props.getJumps(res.data)
        this.props.history.push('/dashboard')
      })
  }

  render() {
    // if (!this.props.location.history) return null;
    const { date, dropzone, jumpNumber, discipline, details, imageUrl, toggleEditOne, toggleEditTwo, toggleEditThree, toggleEditFour, toggleEditFive, toggleEditSix } = this.state
    return (
      <div className='changesDetails'>

        <div className='changesHead'>
          <div className='changesHeader'>
            <span>Date:</span>
            <button onClick={() => this.updateInfo()} >{date}</button>
            {toggleEditOne ? <div><input name='date' value={date} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfo()}>Update</button> </div> : null}
          </div>

          <div className='changesHeader'>
            <span>Dropzone:</span>
            <button onClick={() => this.updateInfoTwo()} >{dropzone}</button>
            {toggleEditTwo ? <div><input name='dropzone' value={dropzone} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfoTwo()}>Update</button> </div> : null}
          </div>

          <div className='changesHeader'>
            <span>Jump Number:</span>
            <button onClick={() => this.updateInfoThree()} >{jumpNumber}</button>
            {toggleEditThree ? <div><input name='jumpNumber' value={jumpNumber} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfoThree()}>Update</button> </div> : null}
          </div>

          <div className='changesHeader'>
            <span>Discipline:</span>
            <button onClick={() => this.updateInfoFour()} >{discipline}</button>
            {toggleEditFour ? <div><input name='discipline' value={discipline} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfoFour()}>Update</button> </div> : null}
          </div>
        </div>

        <div className='changesBody'>
          <div className='changesbodies'>
            <span>Jump Details:</span>
            <button onClick={() => this.updateInfoFive()} >{details}</button>
            {toggleEditFive ? <div><input name='details' value={details} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfoFive()}>Update</button> </div> : null}
          </div>

          <div className='changesbodies'>
            <span>Jumps Image:</span>
            <img className='jumpImg' alt='jump' src={imageUrl} onClick={() => this.updateInfoSix()} />
            {toggleEditSix ? <div><input name='imageUrl' value={imageUrl} onChange={(e) => this.handleChange(e)} /> <button onClick={() => this.updateInfoSix()}>Update</button> </div> : null}
          </div>
        </div>
        <div>
          <button onClick={() => this.editJump}>Save Changes</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { getJumps })(Changes)