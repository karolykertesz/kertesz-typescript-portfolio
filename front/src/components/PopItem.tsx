import React from "react";
import { useWorkItem } from "../utils/firebase/hooks/useItem";
interface Props {
  isOpen: string | undefined;
  value: boolean | undefined;
  closeModal: () => void;
}
export const PopItem: React.FC<Props> = (props) => {
  const { isOpen, value, closeModal } = props;
  const { workItem } = useWorkItem(isOpen);
  const findMain =
    workItem &&
    workItem.images.find((item: { name: string }) => item.name === "main");
  const techNologies = workItem && workItem.technologies;
  return (
    <div>
      {workItem ? (
        <div className={!value ? "popup" : "popup open"} onClick={closeModal}>
          <div className="pop-inner">
            <div className="pop-content">
              <div className="pop-header">
                <button
                  type="button"
                  className="btn pp-close"
                  onClick={closeModal}
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="pop-thumb">
                  <img src={findMain.image_url} alt="main thumbnail image" />
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
      ) : (
        <div></div>
      )}
    </div>
  );
};
