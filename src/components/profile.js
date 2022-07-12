import React, { Component } from 'react'
import './profile.css'

export default class profile extends Component {
  render() {
    return (
       <div className="image">
        <img src={this.props.imagez} alt="" srcset="" />
        <div className="image-overlay">
            <div className="image-title">
            {this.props.name} <br/>
            <h4>{this.props.job}</h4>
            </div>
            <p className="image-description">
                {this.props.content}
            </p>
        </div>
       </div>
    )
  }
}
