import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/aboutus';
import App from './components/App'
import Services from './components/services';
import Footer from './components/footer';
import Contact from './components/contact'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <App/>
    <Services/>
    <Contact/>
    <Footer />
  </React.StrictMode>
);