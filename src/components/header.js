import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

class header extends Component {
  
    render() {
        return (
          <div class="container-fluid text-white bg-header"  id='home'>
            <div class="d-flex justify-content-start header">
                <div class="container px-4 pt-5 mt-md-5">
                  <span class="fs-3 fw-bold">Hi there,</span>
                  <h1 class="display-3 fw-bold pe-2">
                    We are <span class="font_clr">Aracholō</span>
                  </h1>
                  <p class="fs-2 col-md-6">
                    a wholesome team of
                    <span class="fw-bold font_clr"> Full-Stack Web Developer. </span>
                    We us a Team are here to help you achieve your goals and chase your dreams.
                  </p>
                </div>

            </div>
          </div>
        )
    }
}

export default header;