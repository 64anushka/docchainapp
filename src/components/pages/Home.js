import React from "react";
import "../css/home.css"
import Cost from "../assets/cost.png"
import DocImage from "../assets/document.png"
import Time from "../assets/time.png"
import Team from "../assets/team.jpg"
// import Footer from "./screens/Footer.js"

function HomePage() {
    return (
        <>
            <div id="top">
                <div className="homeStyle">
                    <h1 className="headline-text">
                        Build <span style={{ color: "#0dcaf0" }}>trust</span><br /> into your <span>orgnization</span></h1>
                    <p className="text-light" id="tagline-text">
                        The Doc-Chain platform is a leading Document Verification platform <br />
                        designed to bring efficiency and security to your operations.
                    </p>
                    <div className="buttonStyle">
                        <a href="#verification page link"><button type="button" className="btn btn-danger text-white">Go Verify</button></a>
                        <a href="#uploading page link"><button type="button" className="btn btn-success text-white" >Upload</button></a>
                    </div>
                </div>
            </div>

            {/* ------------------------INFORMATION---------------------- */}
            <div className="container-fluid" style={{ paddingTop: "2rem" }}>
                <div className="row text-light">
                    <div className="col-lg-4 text-center">
                        <img src={Cost} width="150" alt="less cost" />
                        <h4>Less Cost</h4>
                        <p className="para-light">
                            with Doc-Chain uploading any document cost only <span className="text-warning"> 0.01 &dollar; 😮</span>
                            so you can upload without caring about the Operation cost
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={Time} width="150" alt="fast process" />
                        <h4>Fast Process</h4>
                        <p className="para-light">
                            Verfying Certificates takes just <br /><span className="text-warning">few Second 😳 </span>
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={DocImage} width="150" alt="secure" />
                        <h4>Secure</h4>
                        <p className="para-light">
                            100% Secure & Transparent all operations With <span className="text-warning">Blockchain Technology 🔒 </span>
                        </p>
                    </div>
                </div>
            </div>

            {/*-----------------ABOUT--------------------*/}

            <div className="container" id="about">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7" style={{ color: "white" }}>
                        <h1>
                            WE ARE TOP <br />
                        </h1>
                        <p>
                            As a team developing a blockchain-based verification system  with some
                            additional functionalities,we are committed to delivering a secure and
                            user-friendly platform that enables us to verify ,share data and transactions on the blockchain.
                            One of the most significant benefits of this system is that it eliminates the need for
                            intermediaries,such as banks or other third-party verification services.
                        </p>
                        <p>
                            Overall, a blockchain based system is a powerful tool for business and organizations
                            looking to enhance their security, streamline their operations, and increase trust
                            between stakeholders.
                        </p>

                        <div className="my-3">
                            <a className="btn bg-white" href="https://medium.com/@maheshlode55/what-is-blockchain-f4eeaa79572a" >Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center" >
                        <img className="img-fluid" id="teamImage" src={Team} alt="about" width="300" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;