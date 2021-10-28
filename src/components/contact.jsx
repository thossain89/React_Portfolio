import React from 'react';
import imageOverlay from "../img/hero-bg.jpg";

class Contact extends React.Component{

    render(){
        return (
          <section
            id="contact"
            className="paralax-mf footer-paralax bg-image sect-mt4 route"
            style={{ backgroundImage: "url(" + imageOverlay + ")" }}
          >
            <div className="overlay-mf"></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="title-box-2">
                            <h5 className="title-left">Send A Message</h5>
                          </div>
                          <div>
                            <form
                              action="https://formspree.io/f/meqvwbqz"
                              method="POST"
                              className="contactForm"
                            >
                              <div id="sendmessage">
                                Your message has been sent. Thank you!
                              </div>
                              <div id="errormessage"></div>
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      id="name"
                                      placeholder="Your Name"
                                      required
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      id="email"
                                      placeholder="Your Email"
                                      required
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="subject"
                                      id="subject"
                                      placeholder="Subject"
                                      required
                                    />
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <textarea
                                      className="form-control"
                                      name="message"
                                      rows="5"
                                      placeholder="Write something here..."
                                      required
                                    ></textarea>
                                    <div className="validation"></div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <button
                                    type="submit"
                                    className="button button-a button-big button-rounded"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">Let's Connect!</h5>
                          </div>
                          <div className="more-info">
                            <p className="lead">
                              With each project, I aim to understand how to best
                              engage users for an impactful user experience. I’m
                              excited to leverage my skills in the future as
                              part of a fast-paced, quality-driven team. Reach
                              out to me to chat about our next project.
                            </p>
                            <ul className="list-ico">
                              <li>
                                <span className="bi bi-geo-alt"></span> 33-37
                                Parliament Road, Macquarie Fields, NSW, 2564
                              </li>
                              <li>
                                <span className="bi bi-phone"></span> (+61)
                                404643188
                              </li>                             
                            </ul>
                          </div>
                          <div className="socials">
                            <ul>
                              <li>
                                <a
                                  href="https://github.com/thossain89"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="ico-circle">
                                    <i className="ion-social-github"></i>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://au.linkedin.com/in/thossain89?trk=profile-badge"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="ico-circle">
                                    <i className="ion-social-linkedin"></i>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="copyright-box">
                      <p class="copyright">
                        &copy; Copyright <strong>T.HOSSAIN 2021</strong>. All
                        Rights Reserved
                      </p>
                      <div class="credits"></div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        );
    }
}

export default Contact;