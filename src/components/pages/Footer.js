import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    </ul>
                </div>

                <div className="col-sm-4">
                  <h6>Doc-Chain</h6>
                  <p>
                    The Doc-Chain platform is leading Document verification platform designed to bring efficiency and security to your operations
                  </p>
                 
                </div>

                <div className="col-sm-4">
                  <h6>Follow Us</h6>
                  <div className="row">
                    <div className="col-sm-4">
                    <i className="fab fa-facebook fontawesome-style"></i>
                      
                    </div>
                
                    <div className="col-sm-4">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-sm-4">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 Doc-Chain. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;