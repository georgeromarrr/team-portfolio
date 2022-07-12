import React, { Component } from 'react'
import './Profile.css'

export default class profile extends Component {
  render() {
    return (
       <div className="image">
        <img src={this.props.imagez} alt="" srcset="" />
        <div className="image-overlay">
            <div className="image-title">
            {this.props.name} <br/>
            {this.props.job}
            </div>
            <p className="image-description">
                {this.props.content}
            </p>
        </div>
       </div>
    )
  }
}
