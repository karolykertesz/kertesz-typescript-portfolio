import React from "react";
import firebase from "firebase";
import { useIds } from "../utils/firebase/hooks/useIds";
import { Worksitem } from "../components/WorksItem";
export const Works: React.FC = () => {
  const { docs } = useIds();

  return (
    <section className="works-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Recent works</h2>
          </div>
        </div>
        <div className="row">
          {docs &&
            docs.map((item) => (
              <div key={item}>
                <Worksitem doc={item} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
