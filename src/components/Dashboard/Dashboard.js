import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { getJumps } from '../../redux/actionCreators'
import DashboardDetails from './DashboardDetails/DashboardDetails'
import './Dashboard.css'
// import Change from '../Change/Change'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      count: 1
    }
  }

  componentDidMount = () => {
    this.getJumps()
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { jumps } = this.props
    if (prevProps.jumps && prevProps.jumps.length !== jumps.length) {

      axios
        .get('/api/jumps')
        .then(res => {
          this.props.getJumps(res.data)
        })
    }
  }

  getJumps = () => {
    axios
      .get('/api/jumps')
      .then(res => {
        this.props.getJumps(res.data)
      })
  }

  selectJump = () => {
    const { jumps } = this.props
    const { count } = this.state
    return jumps[count - 1]
  }

  next = () => {
    const { jumps } = this.props
    const { count } = this.state

    if (jumps.length === count) {
      this.setState({
        count: 1
      })
    }
    else {
      this.setState({
        count: count + 1
      })
    }
  }

  previous = () => {
    const { jumps } = this.props
    const { count } = this.state
    if (count === 1) {
      this.setState({
        count: jumps.length
      })
    }
    else {
      this.setState({
        count: count - 1
      })
    }
  }

  delete = () => {
    const jump_id = this.selectJump().jump_id
    axios
      .delete(`/api/delete/jump/${jump_id}`)
      .then(res => {
        this.props.getJumps(res.data)
      })
    this.setState({
      count: 1
    })
  }

  render() {
    const { jumps } = this.props
    return (
      <div className='dashboard'>
        <div className='leftSideButtonHolder'>
          <button className='dashButtons' onClick={() => this.previous()} >{`< Prev`}</button>
          <Link to={{
            pathname: '/change',
            state: {
              jump: this.selectJump()
            }
          }}>
            <button className='dashButtons'>Edit</button>
          </Link>
        </div>

        <div className='dashboardLogbook' >
          {!jumps || jumps.length === 0 ? <div></div> :
            <DashboardDetails
              single={this.selectJump()}
            />
          }
        </div>

        <div className='rightSideButtonHolder'>
          <button className='dashButtons' onClick={() => this.next()} >{`Next >`}</button>
          <button className='dashButtons' onClick={() => this.delete()} >Delete</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jumps: state.jumps
  }
}

export default connect(mapStateToProps, { getJumps })(Dashboard)