import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
import { Circles } from "../components/Uicircles";
const imgUrl = require("./../assets/kk.jpg");
export const Home: React.FC = () => {
  const state = useAppSelector((state) => state.model.isHeader);
  const over = useAppSelector((state) => state.model.overlay);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };
  const OverLay = () => {
    return <div className={!over ? "overlay" : "overlay active"}></div>;
  };
  const route = "Home";
  return (
    <Fragment>
      <Header toggleHeader={toggleHeader} state={state} route={route} />
      <Circles />
      <section
        className={
          !state
            ? "home-section items-center active "
            : "home-section items-center active fade-out"
        }
        id="home"
      >
        <div className="container">
          <div className="row items-center">
            <div className="home-text">
              <p>Hi ,I'm</p>
              <h1>Karoly Kertesz</h1>
              <h2>
                a web developer with a passion for everything front-end. Welcome
                to my corner of the internet. I'm glad you're here!
              </h2>
              <Link to="/about" className="btn">
                more about me
              </Link>
              <Link to="/projects" className="btn link-item">
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
    </Fragment>
  );
};
