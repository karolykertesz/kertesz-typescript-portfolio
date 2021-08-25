import React, { useRef, useReducer, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
import { Header } from "../components/Header";
export const Contact: React.FC = () => {
  const state = useAppSelector((state) => state.model.isHeader);
  const over = useAppSelector((state) => state.model.overlay);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };
  const route = "Contact";
  const OverLay = () => {
    return <div className={!over ? "overlay" : "overlay active"}></div>;
  };
  return (
    <Fragment>
      <Header state={state} toggleHeader={toggleHeader} route={route} />
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
    </Fragment>
  );
};
