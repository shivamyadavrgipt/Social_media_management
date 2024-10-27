import React from "react";
import "./Newsletter.css";
import Navbar from "../components/Navbar";

const Newsletter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="news-main">
        <div className="container mx-auto px-16 relative z-10">
          <div className="newsletter-wrapper">
            <section className="newsletter-section">
              <div className="newsletter-content">
                <h2>Stay Updated with Our Latest News</h2>
                <p>
                  Subscribe to our newsletter to receive exclusive updates,
                  promotions, and tips.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button type="submit" className="subscribe-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
