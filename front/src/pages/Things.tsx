import React, { Fragment } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { setHeader } from "../utils/reducers/model.reducer";
import { useImages } from "../utils/firebase/hooks/useImages";
import { Image } from "../components/image";

export const Things: React.FC = () => {
  const state = useAppSelector((state) => state.model.isHeader);
  const dispatch = useAppDispatch();
  const toggleHeader = () => {
    dispatch(setHeader());
  };
  const { id } = useParams<any>();
  const { images } = useImages(id);
  const dbImages = images && images;
  const route = "Things";
  return (
    <Fragment>
      <Header toggleHeader={toggleHeader} route={route} state={state} />
      <section>
        <div className="image-grid">
          {dbImages !== undefined &&
            dbImages.map((image: { name: string; image_url: string }) => (
              <div key={image.image_url}>
                <Image url={image.image_url} name={image.name} />
              </div>
            ))}
        </div>
      </section>
    </Fragment>
  );
};
