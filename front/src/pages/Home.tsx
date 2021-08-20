import React from "react";
const imgUrl = require("./../assets/kk.jpg");
export const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="home-text">
            <p>Hi ,I'm</p>
            <h1>Karoly Kertesz</h1>
            <h2>Full Stack Web Developer Budapest</h2>
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
