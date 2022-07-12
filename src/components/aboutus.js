import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutus.css';

class aboutus extends Component {
  
    render() {
        return (
          <div id="about-us" class="container pt-2" >
            <div class="container mt-5 pt-5 px-2">
              <div
                class="p-5 m-3 bg-dark rounded-3 text-dark shadow text-white rounded bg-opacity-50"
              >
                <h1 class="fw-bold pb-3 font_clr titleheader">ABOUT US</h1>
                <p class="fs-5">
                  Hi! I'm Romar George B. Doinog, also you can call me Romar. I
                  lived in Cainta, Rizal. I am a graduate of Bachelor of Science in
                  Information Technology, and I have a extensive experience as a QA
                  for Web and Mobile, and also I'm currently pursuing my dream to be
                  a Full-Stack Web Developer.
                </p>
                <p class="fs-5">
                  I am a very versatile, bubbly, and Affable person. also, I am the
                  type of person when I encounter a problem will do my utmost
                  everything just to solve that problem.
                </p>
                <p class="fs-5">
                  Whenever I have nothing to do I play Valorant on pc. I am also
                  interested on some mobile games and watching movies or a TV
                  series.
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default aboutus;