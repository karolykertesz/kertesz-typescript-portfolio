import React from "react";
import { EducationItemInterface } from "../interfaces/about.interface";
export const EducationItem: React.FC<EducationItemInterface> = (props) => {
  const { date, school } = props;
  return (
    <div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="date">{date}</span>
          <h4>{school}</h4>
        </div>
      </div>
    </div>
  );
};
