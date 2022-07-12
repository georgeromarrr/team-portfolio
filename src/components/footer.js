import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutus.css';

class footer extends Component {
  
    render() {
        return (
          <div class="container-fluid pt-4 bg-black">
            <div class="d-flex justify-content-center p-3 text-white">
              <p class="text-center"><span class="fw-bold font_clr">&copy;</span> 2022 <span class="fw-bold font_clr">Aracholo</span>, All rights reserved.</p>
              </div>
          </div>
        )
    }
}

export default footer;