import React, { Component } from 'react'
import './DashboardDetails.css'

export default class DashboardDetails extends Component {

  render() {
    const { single } = this.props
    if (!single) return null;
    return (
      <div className='dashboardDetails'>
        <div className='dashDetHead'>
          <div className='dashboardDetailsHeader'>
            <span>Date:</span>
            <p>{`${single.date}`}</p>
          </div>

          <div className='dashboardDetailsHeader'>
            <span>Dropzone:</span>
            <p>{`${single.dropzone}`}</p>
          </div>

          <div className='dashboardDetailsHeader'>
            <span>Jump Number:</span>
            <p>{`${single.jump_number}`}</p>
          </div>

          <div className='dashboardDetailsHeader'>
            <span>Discipline:</span>
            <p>{`${single.discipline}`}</p>
          </div>
        </div>

        <div className='dashDetBody'>
          <div className='dashDetailsBody'>
            <span>Jump Details:</span>
            <p>{`${single.details}`}</p>
          </div>

          <div className='dashDetailsBody'>
            <span>Jumps Image:</span>
            <img className='jumpImg' alt='jump' src={`${single.image}`} />
          </div>
        </div>
      </div>
    )
  }
}

