import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styles from './navbar.css';

class navbar extends Component {
  
    render() {
        return (        
            <nav class="navbar navbar-expand-lg fixed-top d-lfex bg-dark">
              <a class="navbar-brand" href="index.html">
                <img src="sdds" height="50" />
              </a>



              {/* <!-- Navigation --> */}
              <div class="list-group list-group-horizontal pt-2">
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
            </nav>
        )
    }
}

export default navbar;
