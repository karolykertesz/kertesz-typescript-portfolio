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
  const filtertedImages =
    dbImages &&
    dbImages.filter(
      (item: { name: string; images_url: string }) => item.name !== "main"
    );

  const route = "Things";
  return (
    <Fragment>
      <Header toggleHeader={toggleHeader} route={route} state={state} />
      <section>
        <h2 className="title-h2">{id} gallery</h2>
        <div className="row">
          <div
            className={
              filtertedImages && filtertedImages.length <= 3
                ? `column-${filtertedImages.length}`
                : "cont"
            }
          >
            {dbImages !== undefined &&
              filtertedImages.map(
                (image: { name: string; image_url: string }, indx: number) => (
                  <div
                    key={image.image_url}
                    // style={{ ["--i" as any]: indx + 1 }}
                    className="image"
                  >
                    <img src={image.image_url} alt={id + image.name} />
                    <h1>{image.name}</h1>
                  </div>
                )
              )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
