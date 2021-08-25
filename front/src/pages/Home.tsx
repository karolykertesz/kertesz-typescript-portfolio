import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
const imgUrl = require("./../assets/kk.jpg");
export const Home: React.FC = () => {
  // const [isHeader, setHeader] = useState(false);
  const state = useAppSelector((state) => state.model.isHeader);
  console.log(state);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };
  return (
    <Fragment>
      <Header toggleHeader={toggleHeader} state={state} />
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
              <h2>Full Stack Web Developer From Budapest</h2>
              <Link to="/about" className="btn link-item">
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
