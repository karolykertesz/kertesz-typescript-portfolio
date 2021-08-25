import React, { Fragment } from "react";
import firebase from "firebase";
import { useIds } from "../utils/firebase/hooks/useIds";
import { Worksitem } from "../components/WorksItem";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
import { Header } from "../components/Header";
export const Works: React.FC = () => {
  const { docs } = useIds();
  const state = useAppSelector((state) => state.model.isHeader);
  const over = useAppSelector((state) => state.model.overlay);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };

  const OverLay = () => {
    return <div className={!over ? "overlay" : "overlay active"}></div>;
  };
  const route = "Portfolio";
  return (
    <Fragment>
      <Header state={state} toggleHeader={toggleHeader} route={route} />
      <OverLay />
      <section className="works-section sec-padding" id="works">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Recent works</h2>
            </div>
          </div>
          <div className="row works-row">
            {docs && docs.map((item) => <Worksitem doc={item} />)}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
