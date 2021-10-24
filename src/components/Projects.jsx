import React from 'react';

// Import Images
import chirper from '../img/Chirper.gif';
import cHub from '../img/cocktail_hub.PNG';
import eBackend from '../img/ecommerce_backend.gif';
import emTracker from '../img/employeeTracker.PNG';
import techBlog from '../img/techblog.gif';
import weatherDash from '../img/weatherDash.PNG';

class Projects extends React.Component{

    render(){
        return(
            <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Some of my excellent projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={chirper} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={chirper} alt="cocktail hub" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Chirper</h2>
                          <div className="w-more">
                            <span className="text-warning">Web Messaging App (Full Stack)</span> / <span className="w-date">13 Sept. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/Chirper" target="_blank"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://mysterious-bastion-78954.herokuapp.com/"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={cHub} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={cHub} alt="" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Cocktail Hub</h2>
                          <div className="w-more">
                            <span className="text-warning">Front End Development</span> / <span className="w-date">18 Jul. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/Cocktail_Hub" target="_blank"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://thossain89.github.io/Cocktail_Hub/"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={techBlog} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={techBlog} alt="" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Tech Blog</h2>
                          <div className="w-more">
                            <span className="text-warning">Blogging web App (Full Stack)</span> / <span className="w-date">30 Aug. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/Tech_Blog" target="_blank"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://limitless-depths-94721.herokuapp.com/"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={eBackend} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={eBackend} alt="" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Ecommerce Backend</h2>
                          <div className="w-more">
                            <span className="text-warning">Backend development for Ecommerce Site</span> / <span className="w-date">23 Aug. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/E-Commerce-Backend" target="_blank"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://github.com/thossain89/E-Commerce-Backend"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={emTracker} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={emTracker} alt="" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Employee Tracker</h2>
                          <div className="w-more">
                            <span className="text-warning">CMD App</span> / <span className="w-date">16 Aug. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/Employee_Tracker" target="_blank"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://github.com/thossain89/Employee_Tracker"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={weatherDash} data-gallery="portfolioGallery" className="portfolio-lightbox">
                      <div className="work-img">
                        <img src={weatherDash} alt="" className="img-fluid"></img>
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Weather Dashboard</h2>
                          <div className="w-more">
                            <span className="text-warning">Web App (API)</span> / <span className="w-date">12 Jul. 2021</span>
                            <br></br>
                            <a href="https://github.com/thossain89/Weather_Dashboard"><span className="link-info">Github Repository</span></a>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <a href="https://thossain89.github.io/Weather_Dashboard/"> <span className="bi bi-plus-circle"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Projects;
    