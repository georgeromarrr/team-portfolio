import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

class contact extends Component {
  
    render() {
        return (
          <div id="contact" class="container pt-2" >
            <div class="container mt-5 pt-5 px-2">
              <div
                class="p-5 m-3 bg-dark rounded-3 text-dark shadow text-white rounded bg-opacity-50"
              >
            <h1 class="pb-5 titleheader">
              Contact
            </h1>

            
            <div class="row">

              <div class="col-lg-3 col-sm-6 d-flex">
              <i class="bi bi-github"></i><p class="fs-5"><a href="#"><span>georgeromarrr</span></a>
                  </p>
              </div>
              
              <div class="col-lg-3 ol-sm-6 d-flex">
                  <i class="fa-brands fa-linkedin mx-2 icn_cntct"></i
                  ><p class="fs-5"><a
                    href="#"
                    ><span
                      >Romar George Doinog</span
                    ></a>
                  </p>
              </div>

              <div class="col-lg-3 col-sm-6 d-flex">
                  <i class="fa-solid fa-square-phone mx-2 icn_cntct"></i
                  ><p class="fs-5">+63 912-124-0805
                  </p>
              </div>

              <div class="col-lg-3 col-sm-6 d-flex">
                  <i class="fa-solid fa-envelope mx-2 icn_cntct-email"></i
                  >
                  <p class="fs-5">romar.doinog@gmail.com</p>
              </div>
                
            </div>


            </div>
          </div>
        </div>
        )
    }
}

export default contact;