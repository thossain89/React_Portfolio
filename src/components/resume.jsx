import React from 'react';
import resume from '../docs/resume.pdf'
import profilePic from '../img/tanvir.jpg'



class Resume extends React.Component {

    render (){
        return (
            <section id="resume" className="portfolio-mf sect-pt4 route">
            <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box text-center">
                        <h3 className="title-a">
                          Resume
                        </h3>
                        <div className="line-mf"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-9">
                      <div className="row align-items-center">
                        <div className="col-lg-5">
                          <div className="resume-base bg-primary user-dashboard-info-box p-4">
                            <div className="profile">
                              <div className="jobster-user-info">
                                <div className="profile-avatar">
                                  <img className="img-fluid " src={profilePic} alt="Tanvir Hossain"></img>
                                </div>
                                <div className="profile-avatar-info mt-3">
                                  <h5 className="text-white">Tanvir Hossain</h5>
                                </div>
                              </div>
                            </div>
                            <div className="about-candidate border-top">
                              <div className="candidate-info">
                                <h6 className="text-white">Name:</h6>
                                <p className="text-white">Tanvir Hossain</p>
                              </div>
                              <div className="candidate-info">
                                <h6 className="text-white">Email:</h6>
                                <p className="text-white">hossaintanvir@live.co.uk</p>
                              </div>
                              <div className="candidate-info">
                                <h6 className="text-white">Phone:</h6>
                                <p className="text-white">(+61) 404643188</p>
                              </div>
                              <div className="candidate-info">
                                <h6 className="text-white">Date Of Birth:</h6>
                                <p className="text-white">21-02-1991</p>
                              </div>
                              <div className="candidate-info">
                                <h6 className="text-white">Address:</h6>
                                <p className="text-white">33 Parliament Road, Macquarie Fields, NSW, 2564 </p>
                              </div>
                              <div className="candidate-info">
                                <h6 className="text-white">Gender:</h6>
                                <p className="text-white">Male</p>
                              </div>
                            </div>
                            <div className="mt-0 text-white">
                              <h5 className="text-white">Professional Skill:</h5>
      
                              <ul >
                                <li>HTML 5 & CSS 3</li>
                                <li>JavaScript</li>
                                <li>Bootstrap, Materialize & Bulma</li>
                                <li>jQuery</li>
                                <li>Express.js & Node.js</li>
                                <li>Mysql & MongoDB</li>
                                <li>Sequelize & Mongoose</li>
                                <li>RESTful API & CRUD operations</li>
                                <li>GraphQl</li>
                                <li>Socket io</li>
                                <li>React</li>
                                <li>Git</li>
                                <li>MATLAB and LABVIEW</li>
                              </ul>                       
      
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="resume-experience">
                            <div className="timeline-box">
                              <h5 className="resume-experience-title">Education:</h5>
                              <div className="jobster-candidate-timeline">
                                <div className="jobster-timeline-item">
                                  <div className="jobster-timeline-circle">                                  
                                  </div>
                                  <div className="jobster-timeline-info">
                                    <div className="dashboard-timeline-info">
                                      <span className="jobster-timeline-time">2011 - 2012</span>
                                      <h6 className="mb-2">Bsc Electrical and Electronics Engineering</h6>
                                      <span>- Plymouth University, UK</span>
                                      <p className="mt-2">Graduated with Second Class Honors Upper limit (2.1).</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="jobster-timeline-item mb-0">
                                  <div className="jobster-timeline-circle">                                    
                                  </div>
                                  <div className="jobster-timeline-info">
                                    <div className="dashboard-timeline-info">
                                      <span className="jobster-timeline-time">2009 - 2011</span>
                                      <h6 className="mb-2">HND (Higher National Diploma, Edexcel) in Electrical/Electronics Engineering (comunication) </h6>
                                      <span>- ICON College of Technology and Management</span>
                                      <p className="mt-2">Graduated with 8 Distinctions, 4 Merits, 4 Passes out of 16 module.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="timeline-box mt-4">
                              <h5 className="resume-experience-title">Work &amp; Experience:</h5>
                              <div className="jobster-candidate-timeline">
                                <div className="jobster-timeline-item">
                                  <div className="jobster-timeline-circle">
                                  
                                  </div>
                                  <div className="jobster-timeline-info">
                                    <div className="dashboard-timeline-info">
                                      <span className="jobster-timeline-time">Mar 2015 to Present</span>
                                      <h6 className="mb-2">Sales Specialist</h6>
                                      <span>- Anaconda Pty ltd </span>
                                      <div className="mt-2">
                                        <ul>
      
                                          <li>
                                            The current role covers multiple departments within the business, primarily managing
                                            inventory, online orders, warranty claims and IT related issues.
                                          </li>
                                          <li>
                                            Skilled user of SAP inventory management software and SWIFT (e-commerce) platform.
                                          </li>
                                          <li>
                                            Troubleshoot IT related problems in store, for example, PDA, POS, workstations,
                                            communication radios and security cameras.
                                          </li>
                                          <li>
                                            Remote support other NSW stores to troubleshoot SAP.
                                          </li>
                                          <li>
                                            Supervise ecommerce team, to ensure adherence to quality standards, deadlines, and
                                            proper procedures, correcting errors or problems.
                                          </li>
                                          <li>
                                            Maintain records pertaining to inventory, personnel, orders, supplies, or machine
                                            maintenance.
                                          </li>
                                          <li>
                                            Implement corporate or departmental policies, procedures, and service standards in
                                            conjunction with management regarding warranty claims.
                                          </li>
                                          <li>
                                            Resolve customer complaints or answer customers' questions regarding products,
                                            policies and warranty procedures.
                                          </li>
                                            
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="jobster-timeline-item mb-0">
                                  <div className="jobster-timeline-circle">                                  
                                  </div>
                                  <div className="jobster-timeline-info">
                                    <div className="dashboard-timeline-info">
                                      <span className="jobster-timeline-time">Jan 2013 to Dec 2014</span>
                                      <h6 className="mb-2">Private Tutor</h6>
                                      <span>- Worked as a private Tutor </span>
                                      <div className="mt-2">
                                        <ul>
      
                                          <li>
                                            Instruct through lectures, discussions, and demonstrations in one or more subjects, such
                                            as Mathematics, Physics or Chemistry.
                                          </li>
                                          <li>
                                            Modify the general education curriculum for special-needs students based upon a variety
                                            of instructional techniques and instructional technology.
                                          </li>
                                          <li>
                                            Prepare materials according to students' need.
                                          </li>
                                          <li>
                                            Establish clear objectives for all lessons, units, and projects and communicate those
                                            objectives to students.
                                          </li>
                                          <li>
                                            Confer with parents or guardians, other teachers, counselors, and administrators to
                                            resolve students' behavioral and academic problems.
                                          </li>
                                          <li>
                                            Guide and counsel students with academic problems, or special academic interests.
                                          </li>
                                          <li>
                                            Teach students personal development skills such as goal setting, independence, and
                                            self-advocacy.
                                          </li>
                                          <li>
                                            Use computers, audio-visual aids, and other equipment and materials to supplement
                                            presentations.
      
                                          </li>
                                            
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                              <div className="jobster-candidate-timeline">
                                <div className="jobster-timeline-item">
                                  <div className="jobster-timeline-circle">
                                  
                                  </div>
                                  <div className="jobster-timeline-info">
                                    <div className="dashboard-timeline-info">
                                      <span className="jobster-timeline-time">Jun 2010 to Aug 2011</span>
                                      <h6 className="mb-2">Sales Team Member</h6>
                                      <span>- Harrods (Case Luggage) </span>
                                      <div className="mt-2">
                                        <ul>
      
                                          <li>
                                            Stock push on the floor according to the morning floor check data.
                                          </li>
                                          <li>
                                            Packing online/Telephone orders with fast and efficient way.
                                          </li>
                                          <li>
                                            Floor walk with team leaders and list the items for next day replenishment 
                                          </li>
                                          <li>
                                            Help customers with travel accessories and provide them with information regarding
                                            travel goods.
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
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href={resume} role="button">Download My Resume</a></p>
                </div>          
          </section>
        )
    }
}

export default Resume;