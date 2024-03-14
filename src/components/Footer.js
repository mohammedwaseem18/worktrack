import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>

<footer id="footer">
      
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3> mohammed waseem</h3>
              <p>
              
                <strong>Phone:</strong> 8712351094
                <br />
                <strong>Email:</strong> mohdwaseem2831@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Bilal Ahmed</h3>
              <p>
              
                <strong>Phone:</strong> 9652610281
                <br />
                <strong>Email:</strong> mohdwaseem2831@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Team</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Contact</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Login/Signup</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Web Development</a>
                </li>
              
               
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
               Follow us on
              </p>
              <div className="social-links mt-3">
              <a href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
               Follow us on
              </p>
              <div className="social-links mt-3">
              <a href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix ">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span></span>
          </strong>
          . All Rights Reserved
        </div>
     
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
