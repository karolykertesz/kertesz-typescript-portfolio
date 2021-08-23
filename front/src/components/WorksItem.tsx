import React, { useState } from "react";
import { useWorkItem } from "../utils/firebase/hooks/useItem";
import { addModal } from "../utils/reducers/model.reducer";
import { useAppDispatch } from "../utils/redux/hooks";
export const Worksitem: React.FC<{ doc: string }> = (props) => {
  const { doc } = props;
  const { workItem } = useWorkItem(doc);
  const [isOpen, setisopen] = useState(false);
  const dispatch = useAppDispatch();
  const hendleclick = () => {
    dispatch(addModal());
    setisopen(!isOpen);
  };
  const findMain =
    workItem &&
    workItem.images.find((item: { name: string }) => item.name === "main");
  const techNologies = workItem && workItem.technologies;
  const closeModal = () => {
    if (isOpen) {
      return hendleclick();
    }
  };
  return (
    <>
      {workItem ? (
        <div className="works-item">
          <div className="works-item-thumb">
            <img src={findMain.image_url} alt="main thumbnail image" />
          </div>
          <h3 className="works-item-title">{workItem.title}</h3>
          <button
            type="button"
            className="btn view-project-btn"
            onClick={hendleclick}
          >
            View project Details
          </button>
          <div className="work-item-details">
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
          {workItem && (
            <div
              className={!isOpen ? "popup" : "popup open"}
              onClick={closeModal}
            >
              <div className="pop-inner">
                <div className="pop-content">
                  <div className="pop-header">
                    <button
                      type="button"
                      className="btn pp-close"
                      onClick={hendleclick}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                    <div className="pop-thumb">
                      <img
                        src={findMain.image_url}
                        alt="main thumbnail image"
                      />
                    </div>
                    <h3>{workItem.title}</h3>
                  </div>
                  <div className="pop-body">
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
                          <a
                            href={workItem.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            view project on github
                          </a>
                        </span>
                      </li>
                      {workItem.page_url && (
                        <li>
                          View The page Online -
                          <span>
                            <a
                              href={workItem.page_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              click to visit the page
                            </a>
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
