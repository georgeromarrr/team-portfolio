import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class aboutus extends Component {
  
    render() {
        return (
          <div id="services" class="container pt-2">
            <div class="container py-3 my-5 px-4">
              <div
                class="p-5 m-3 bg-dark rounded-3 text-dark text-white rounded shadow"
              >
                <h1 class="fw-bold pb-3 titleheader">SERVICES</h1>
                <div class="col">

                  <div class="row justify-content-around align-items-center">
                    <div class="col-lg-2 col-sm-4 p-2 srvcs_container">
                      <i class="bi bi-palette d-flex justify-content-center pt-3 icn_size"></i>
                      <p class="text-center mt-4 fs-5">Graphic Design</p>
                    </div>
                    <div class="col-lg-2 col-sm-4 p-2 srvcs_container">
                      <i class="bi bi-code-slash d-flex justify-content-center pt-3 icn_size"></i>
                      <p class="text-center mt-4 fs-5">Web Development</p>
                    </div>
                    <div class="col-lg-2 col-sm-4 p-2 srvcs_container">
                      <i class="bi bi-diagram-3 d-flex justify-content-center pt-3 icn_size"></i>
                      <p class="text-center mt-4 fs-5">Network Configuration</p>
                    </div>
                    <div class="col-lg-2 col-sm-4 p-2 srvcs_container">
                      <i class="bi bi-film d-flex justify-content-center pt-3 icn_size"></i>
                      <p class="text-center mt-4 fs-5">Video Editing</p>
                    </div>
                    <div class="col-lg-2 col-sm-4 p-2 srvcs_container">
                      <i class="bi bi-clipboard-check d-flex justify-content-center pt-3 icn_size"></i>
                      <p class="text-center mt-4 fs-5">Quality Assurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default aboutus;