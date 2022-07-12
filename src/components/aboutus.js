import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutus.css';

class aboutus extends Component {
  
    render() {
        return (
          <div id="about-us" class="container pt-2 pb-5" >
            <div class="container mt-5 pt-5 px-2">
              <div
                class="p-5 m-3 bg-dark rounded-3 text-dark shadow text-white rounded bg-opacity-75"
              >
                <h1 class="fw-bold pb-3 font_clr titleheader">ABOUT US</h1>
                <p class="fs-4 fw-bold">
                  Aracholō [ar-rak-kho-lo]
                </p>

                <span class="fs-4 fst-italic">arachne + excolō: </span>

                <p class="fs-5 pt-1">
                  From the word <span class="fst-italic fw-bold">arachne</span> in Greek: “Spider”. Arachne was a weaver who acquired such skill in her art that she ventured to challenge Athena, goddess of war, handicraft, and practical reason. We used it as the reference to say that the we as a Web Developer is a Arachne.
                </p>

                <p class="fs-5 pt-1">
                  And the word <span class="fst-italic fw-bold">excolo</span> in latin: to Cultivate or Improve. We used this meaning as an idea that we as a web developer we improve the lives of each and everyone by creating application that solves their problem also cultivating technology towards the digital age.
                </p>

                <p class="fs-5">
                  We are the <span class="fst-italic fw-bold">Aracholō</span> family. 
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default aboutus;