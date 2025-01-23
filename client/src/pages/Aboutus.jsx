import React from "react";
import "../styles/about.scss"; // Import the CSS file  
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div>
      {/* About Us Section */}
      <div className="bg-white py-5 about-section">
        <div className="container-lg py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1 about-title">
              <h1 className="font-weight-light">About Us</h1>
              <p className="font-italic text-muted mb-4">
                Welcome to our hotel booking software. Our team is full of wanderers who love traveling just like you. We offer the best stays at unbeatable prices.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt="About Us"
                className="img-fluid mb-4 mb-lg-0 about-img"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt="Our Vision"
                className="img-fluid mb-4 mb-lg-0 about-img"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="font-weight-light">Our Vision</h1>
              <p className="font-italic text-muted mb-4">
                At AlloCasa, we envision a world where anyone, from any corner of the globe, can find the best stays, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our Team</h2>
              <p className="font-italic text-muted">
                Collaboration is at the heart of our team's success. Together, we tackle challenges and celebrate victories as one cohesive unit.
              </p>
            </div>
          </div>
          <div className="row text-center">
            {[
              { name: "Varun Unjiya", image: "vlogo1.jpg", role: "CEO - Founder" },
              { name: "Bhavy Vora", image: "blogo.jpg", role: "CEO - Founder" },
              { name: "Nikhil Vaja", image: "nlogo.jpg", role: "CEO - Founder" },
              { name: "Akshit Thumar", image: "alogo.png", role: "CEO - Founder" },
            ].map((member, index) => (
              <div className="col-xl-3 col-sm-6 mb-5" key={index}>
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">{member.name}</h5>
                  <span className="small text-uppercase text-muted">{member.role}</span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#facebook" className="social-link" aria-label="Facebook">
                        <BsFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#twitter" className="social-link" aria-label="Twitter">
                        <BsTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#instagram" className="social-link" aria-label="Instagram">
                        <BsInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                        <BsLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-light py-5">
        <div className="container text-center">
          <p className="font-italic text-muted mb-0">
            © {new Date().getFullYear()} Copyright:{" "}
            <Link className="text-reset fw-bold" to="/" style={{ textDecoration: "none" }}>
              AlloCasa.com
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
