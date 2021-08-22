import React from "react";
import { Link } from "react-router-dom";
const imgUrl = require("./../assets/kk.jpg");
export const Home: React.FC = () => {
  return (
    <section className="home-section items-center">
      <div className="container">
        <div className="row items-center">
          <div className="home-text">
            <p>Hi ,I'm</p>
            <h1>Karoly Kertesz</h1>
            <h2>Full Stack Web Developer From Budapest</h2>
            <Link to="/about" className="btn">
              more about me
            </Link>
            <Link to="/projects" className="btn">
              A FEW ACCOMPLISHMENTS
            </Link>
          </div>
          <div className="home-image">
            <div className="home-image-box">
              <img src={imgUrl.default} alt="kertesz karoly" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
