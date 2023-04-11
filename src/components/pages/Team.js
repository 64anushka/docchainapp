import React from "react";
import profile from "./profile.jpg";
import "./css/Team.css"
import Footer from "./screens/Footer";

function About() {
    let message = `E-verifiy is a blockchain based application which can help users to upload ,share and verify their documents`;
    return (
        <section className="section-white">

            <div className="" style={{width:"100%"}}>

                <div className="row" style={{marginRight:"none"}}>

                    <div className="col-md-12 text-center">

                        <h2 className="section-title">The Team Behind E-Verify</h2>

                        <p className="section-subtitle">{message}</p>

                    </div>

                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={profile} className="team-img" alt="pic" />
                            <h3>Anushka yadav</h3>
                            <div className="team-info"><p>CEO</p></div>
                            <p>Anushka is the CEO of E-verify </p>

                            <ul className="team-icon">

                                <li><a href="#" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>

                                <li><a href="#" className="pinterest">
                                    <i className="fa fa-pinterest"></i>
                                </a></li>

                                <li><a href="#" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>

                                <li><a href="#" className="dribble">
                                    <i className="fa fa-dribbble"></i>
                                </a></li>

                            </ul>


                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={profile} className="team-img" alt="pic" />

                            <h3>Chetana Agarwal</h3>

                            <div className="team-info"><p>CTO</p></div>

                            <p>Chetana is the CTO of E-verify</p>

                            <ul className="team-icon">

                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>

                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>

                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>

                                <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>

                            </ul>

                        </div>

                    </div>
                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={profile} className="team-img" alt="pic" />

                            <h3>Mahesh Lode</h3>

                            <div className="team-info"><p>COO</p></div>

                            <p>Mahesh is COO of E-verify</p>

                            <ul className="team-icon">

                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>

                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>

                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>

                                <li><a href="#" className="dribble">
                                    <i className="fa fa-dribbble"></i>
                                </a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
            <Footer/>

        </section>
    )
}

export default About;