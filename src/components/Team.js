import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Team() {
  return (
    <div>
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/wipro.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Mohammed waseem</h4>
                    <span>Frontend developer</span>
                    <p>
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <div className="social">
                      <a href="">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="https://www.instagram.com/waseem_mohd2831">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/bilal.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Mohd Bilal Ahmed</h4>
                    <span>Frontend developer</span>
                    <p>
                      Aut maiores voluptates amet et quis praesentium qui senda
                      para
                    </p>
                    <div className="social">
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
              <div
                className="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay={300}
              ></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Team
