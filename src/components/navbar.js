import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import imglogo from './img/favicon.ico'

class navbar extends Component {
  
    render() {
        return (
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={imglogo} height="50" alt="Aracholō Logo"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link nvbar_fnt fw-bold" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nvbar_fnt fw-bold" href="#about-us">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nvbar_fnt fw-bold" href="#services">SERVICES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nvbar_fnt fw-bold" href="#">CONTACT</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        )
    }
}

export default navbar;