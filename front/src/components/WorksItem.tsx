import React from "react";
import { Link } from "react-router-dom";
import { useWorkItem } from "../utils/firebase/hooks/useItem";
export const Worksitem: React.FC<{ doc: string }> = (props) => {
  const { doc } = props;
  const { workItem } = useWorkItem(doc);
  const findMain =
    workItem &&
    workItem.images.find((item: { name: string }) => item.name === "main");
  const techNologies = workItem && workItem.technologies;

  return (
    <>
      {workItem ? (
        <div className="works-item">
          <div className="works-item-thumb">
            <img src={findMain.image_url} alt="main thumbnail image" />
          </div>
          <h3 className="works-item-title">{workItem.title}</h3>
          <button type="button" className="btn view-project-btn">
            View project
          </button>
          <div className="work-item-details"></div>
          <div className="description">
            <p>{workItem.description}</p>
          </div>
          <ul className="general">
            <li>
              Created -<span>{workItem.created_at}</span>
            </li>
            <li>
              Technologies used -
              <span>
                {techNologies &&
                  techNologies.map((item: string) => (
                    <span key={item}>{item} ,</span>
                  ))}
              </span>
            </li>
            <li>
              Github -
              <span>
                <a href={workItem.github} target="_blank">
                  view project on github
                </a>
              </span>
            </li>
            {workItem.page_url && (
              <li>
                View The page Online -
                <span>
                  <a href={workItem.page_url} target="_blank">
                    click to visit the page
                  </a>
                </span>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
