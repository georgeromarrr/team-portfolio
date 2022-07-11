import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styles from './navbar.css';
import imglogo from './img/favicon.ico'

class navbar extends Component {
  
    render() {
        return (        
            <nav class="navbar navbar-expand-lg fixed-top d-flex bg-dark">
              <div class="container"> 
                <a class="navbar-brand" href="index.html">
                  <img src={imglogo} height="50" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Navigation --> */}
                <div class="list-group list-group-horizontal">
                  <a
                    href="#about-me"
                    class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
                    >ABOUT ME</a
                  >
                  <a
                    href="#services"
                    class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
                    >SERVICES</a
                  >
                  <a
                    href="#project"
                    class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
                    >PROJECT</a
                  >
                  <a
                    href="#contact"
                    class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
                    >CONTACT</a
                  >
                </div>
              </div>
            </nav>
        )
    }
}

export default navbar;