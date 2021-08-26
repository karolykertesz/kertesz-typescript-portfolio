import React, { useState } from "react";
import { useWorkItem } from "../utils/firebase/hooks/useItem";
import { addModal, setOverlay } from "../utils/reducers/model.reducer";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { PopItem } from "./PopItem";
type openItem = undefined | string;

export const Worksitem: React.FC<{ doc: string }> = (props) => {
  const { doc } = props;
  const { workItem } = useWorkItem(doc);
  const [isOpen, setisopen] = useState<any>(undefined);
  const value = useAppSelector((state) => state.model.isOpen);
  const dispatch = useAppDispatch();

  const findMain =
    workItem &&
    workItem.images.find((item: { name: string }) => item.name === "main");
  const techNologies = workItem && workItem.technologies;
  const closeModal = () => {
    setisopen(undefined);
    resetOverLay();
    return dispatch(addModal(false));
  };
  const addId = () => {
    setisopen(doc);
    return dispatch(addModal(true));
  };
  const resetOverLay = () => {
    dispatch(setOverlay(true));
    return setTimeout(() => {
      dispatch(setOverlay(false));
    }, 500);
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
            onClick={() => addId()}
          >
            View project Details
          </button>
          {value && isOpen ? (
            <PopItem
              isOpen={isOpen}
              value={value}
              closeModal={closeModal}
              doc={doc}
            />
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
