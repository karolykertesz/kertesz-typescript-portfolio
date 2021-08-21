import React from "react";
import { Skills } from "../helpers/data";
const imgUrl = require("./../assets/kk.jpg");

export const About: React.FC = () => {
  return (
    <section className="section-about sec-padding">
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              omnis ad provident soluta rem optio facere architecto placeat
              dolores deleniti nobis maxime eaque odit, fugiat recusandae
              adipisci nulla qui obcaecati facilis voluptatibus cumque magnam.
              Deserunt consequatur unde iusto dolorum animi officiis beatae
              veniam dicta laborum veritatis, ullam repellendus illum sequi.
            </p>
            <div className="skills">
              {Skills.map((skill: string) => (
                <div key={skill} className="skills-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
