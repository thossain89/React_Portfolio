import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Import CSS
import 'normalize.css';
import './styles/Animate/Animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/icons/css/ionicons.css';
import './styles/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './styles/App.scss';

//Import Js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'lightbox2/dist/js/lightbox.min.js';
import './libs/easing';

// Import components

import Intro from './components/intro.jsx';
import Navbar from './components/navbar';
import About from './components/about.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';
import Contact from './components/contact';
import Resume from './components/resume';
import Projects from './components/projects';


ReactDOM.render(
  <React.Fragment>
      <Navbar />
      <Intro />
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>     
      <BackToTop/>
      <Preloader/>
  </React.Fragment>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
