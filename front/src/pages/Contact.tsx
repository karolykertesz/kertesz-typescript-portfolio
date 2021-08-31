import React, { useRef, Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader, setRecapcha } from "../utils/reducers/model.reducer";
import { Header } from "../components/Header";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader } from "../components/Loader";
import { constraints } from "../helpers/validation";
const validate = require("validate.js");

type Error = string | {};

export const Contact: React.FC = () => {
  const state = useAppSelector((state) => state.model.isHeader);
  const over = useAppSelector((state) => state.model.overlay);
  const googleRecapcha = useAppSelector((state) => state.model.recapcha);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };
  const route = "Contact";

  const reChange = (value: string | null) => {
    if (value && typeof value === "string" && value.length > 300) {
      dispatch(setRecapcha(true));
    }
  };
  const site: string = process.env.REACT_APP_GOOGLE_FRONT_RECAPCHA as string;
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const formSubmit = async (e: React.FormEvent) => {
    const name = nameRef.current!.value;
    const text = textRef.current!.value;
    const email = emailRef.current!.value;
    const subject = subjectRef.current!.value;

    e.preventDefault();
    setError("");
    setLoading(true);
    if (!googleRecapcha) {
      setLoading(false);
      return setError("Please recheck recapcha!!");
    }
    if (
      !nameRef.current ||
      !emailRef.current ||
      !textRef.current ||
      !subjectRef.current
    ) {
      setLoading(false);
      setError("I'm sorry,missing some input data!!");
      return;
    }
    const valid = await validate({ name, email, text, subject }, constraints);
    if (valid !== undefined) {
      setLoading(false);
      setError("I'm sorry invalid Characters ");
      return;
    }
    const message = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        subject,
        text,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const status = await message.status;
    if (status === 200 || status === 201) {
      setLoading(false);
      return setCompleted(true);
    } else {
      setLoading(false);
      return setError("Not complited!");
    }
  };

  const OverLay = () => {
    return <div className={!over ? "overlay" : "overlay active"}></div>;
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <Header state={state} toggleHeader={toggleHeader} route={route} />
      <OverLay />
      <section className="contact-section sec-padding" id="contact">
        <div className={!state ? "container" : "container headerOpen"}>
          <div className="row">
            <div className="section-title">
              <h2>Thanks for taking the time to reach out!</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-form">
              {!loading ? (
                <form onSubmit={formSubmit}>
                  <div className="row">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        className="input-control"
                        ref={nameRef}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="Email"
                        placeholder="Email"
                        required
                        className="input-control"
                        ref={emailRef}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input-control"
                        required
                        ref={subjectRef}
                      />
                    </div>
                    <div className="input-group">
                      <textarea
                        placeholder="Message me"
                        className="input-control"
                        required
                        id="text-area"
                        ref={textRef}
                      ></textarea>
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <Loader />
              )}
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <h3>Email</h3>
                <p>karoly.kertesz11@gmail.com</p>
              </div>
              <div className="contact-info-item">
                <h3>And here,as well </h3>
                <div className="contact-info-item-links">
                  <a
                    href="https://github.com/karolykertesz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karolykertesz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={state ? "capcha active" : "capcha"}>
          <ReCAPTCHA sitekey={site} size="normal" onChange={reChange} />
        </div>
        <div className="error">{error && <p>{error}</p>}</div>
        <div className="completed">
          <p>{completed && "Thank You, Your Email Has Been sent!"}</p>
        </div>
      </section>
    </Fragment>
  );
};
