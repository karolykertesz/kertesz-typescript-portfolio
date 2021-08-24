import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="contact-section sec-padding">
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
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
