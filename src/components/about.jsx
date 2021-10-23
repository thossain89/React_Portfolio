import React from 'react';
import myImage from "../img/tanvir.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"HTML5_skill", content: "HTML5",percentage: "90%", value: "90"},
                {id:"CSS3_skill", content: "CSS3",percentage: "80%", value: "80"},
                {id:"JavaScript_skill", content: "JavaScript",percentage: "70%", value: "70"},
                {id:"Jquery_skill", content: "Jquery",percentage: "65%", value: "65"},
                {id:"UI_skill", content: "Bootstrap, Materialize & Bulma",percentage: "65%", value: "65"},
                {id:"Server_skill", content: "Node.js & Express.js",percentage: "80%", value: "80"},
                {id:"Database_skill", content: "MySql & MongoDB",percentage: "70%", value: "70"},
                {id:"Websocket_skill", content: "Socket.io",percentage: "60%", value: "60"},
                {id:"GraphQl_skill", content: "GraphQL",percentage: "60%", value: "60"},
                {id:"ReactJS_skill", content: "ReactJS",percentage: "50%", value: "50"},
            ],
            about_me:[
                {id: "first-p-about",content: "I am a solutions-driven Full Stack Developer applying Engineering background and strong technical skill set towards building functional websites and web applications.I am undertaking an intensive Full Stack Development course from the University of Sydney (USYD), where I am developing skills in HTML 5, JavaScript, CSS, Bootstrap,jQuery, Express.js, Node.js, MySql, MongoDB, PWA, GraphQL, Socket.io, React.js and responsive web design."},
                {id: "second-p-about", content: " I have graduated in Electrical & Electronics Engineering with majors in communication systems from University of Plymouth, UK and for last last 5 years I have been in the retail industry which gave me the opportunity to learn about work ethics, attention to detail, communication skills, interpersonal skills, customer service skills including excellent leadership skills. I have always excelled at multitasking and used to work part-time while undertaking my degree. My strengths include problem solving, project management, and agile adaptation to last minute support changes, which makes me an integral member of any team."},
                {id: "third-p-about", content: "As an eager learner and natural “helper”, I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team to continue to develop innovative, and exciting work."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="skill-mf">                                            
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.percentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.percentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;