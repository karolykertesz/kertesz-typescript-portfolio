import React, { useRef, useReducer } from "react";

export const Contact: React.FC = () => {
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Thanks for taking the time to reach out!</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form onSubmit={() => {}}>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="input-control"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="Email"
                    placeholder="Email"
                    required
                    className="input-control"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Message me"
                    className="input-control"
                    required
                    id="text-area"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>karoly.kertesz11@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>And here,as well </h3>
              <div className="contact-info-item-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
