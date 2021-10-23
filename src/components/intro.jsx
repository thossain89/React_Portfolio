import React from 'react';
import Background from '../img/hero-bg.jpg';
import Typed from 'react-typed';

class Intro extends React.Component{
    render(){
        return (
        <div id="home" className="intro route bg-image " style={{ backgroundImage: `url(${Background})` }}>
         <div id="home" className="intro route bg-image background">    
            
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">Hello, I am Tanvir Hossain</h1>
                  <p className="intro-subtitle"><span className="text-slider-items">
                    </span><strong className="text-slider"><Typed strings={['Front End Developer', 'Back End Developer','Server/Database Management','UX/UI Design','Skilled Leader',]} typeSpeed = {100} backDelay = {1100} backSpeed = {30} loop/></strong></p>
                  <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">View My Portfolio</a></p>
                </div>
              </div>
            </div>
         </div>
        </div>
        
        );
    }
}

export default Intro;