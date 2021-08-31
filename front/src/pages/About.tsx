import React, { useState, Fragment } from "react";
import { Skills, education } from "../helpers/data";
import { EducationItem } from "../components/EducationItem";
import { Experiance } from "../components/Experiance";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
import { Header } from "../components/Header";

const imgUrl = require("./../assets/kk.jpg");

export const About: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const selecvalue = () => {
    setSelected(!selected);
  };
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.model.isHeader);
  const over = useAppSelector((state) => state.model.overlay);

  const toggleHeader = () => {
    dispatch(setHeader());
  };
  const OverLay = () => {
    return <div className={!over ? "overlay" : "overlay active"}></div>;
  };
  const route = "About";
  return (
    <Fragment>
      <Header state={state} route={route} toggleHeader={toggleHeader} />
      <OverLay />
      <section className="section-about sec-padding" id="about">
        <div className={state ? "container headerOpen" : "container"}>
          <div className="row">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="image-box">
              <div className="about-img">
                <img src={imgUrl.default} alt="kertesz karoly" />
              </div>
            </div>
            <div className="about-text">
              <h3>My Story</h3>
              <p>
                I've always loved technology. From a young age, technology has
                interested me.I always loved learning new skills, technologies
                and computers always inspired me. With React it was the love at
                first sight. I truly enjoy and i'm 'very passionate about design
                and develop beautiful websites which focus on providing the best
                experience for everyone using them.
              </p>
              <h3>Skills</h3>
              <div className="skills">
                {Skills.map((skill: string) => (
                  <div key={skill} className="skills-item">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="about-tabs">
                <button
                  className={!selected ? "tab-item active" : "tab-item"}
                  data-target="#education"
                  onClick={() => selecvalue()}
                  disabled={!selected && true}
                >
                  education
                </button>
                <button
                  className={selected ? "tab-item active" : "tab-item"}
                  data-target="#experience"
                  onClick={() => selecvalue()}
                  disabled={selected && true}
                >
                  experience
                </button>
              </div>

              <div
                className={!selected ? "tab-content active" : "tab-content"}
                id="education"
              >
                {education.map((item) => (
                  <EducationItem date={item.date} school={item.school} />
                ))}
              </div>

              <div className={selected ? "tab-content active" : "tab-content"}>
                <Experiance />
              </div>
              <Link to="/contact" className="btn link-item">
                contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
