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
      <section className="section-about sec-padding" id="about">
        <div className="container">
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi omnis ad provident soluta rem optio facere architecto
                placeat dolores deleniti nobis maxime eaque odit, fugiat
                recusandae adipisci nulla qui obcaecati facilis voluptatibus
                cumque magnam. Deserunt consequatur unde iusto dolorum animi
                officiis beatae veniam dicta laborum veritatis, ullam
                repellendus illum sequi.
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
