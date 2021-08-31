import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { InitApp } from "../../firebase";
InitApp();

export const useImages = (id: string | undefined) => {
  const [images, setImages] = useState<any>();
  const [type, setType] = useState<any>();
  useEffect(() => {
    const imageRef = firebase
      .firestore()
      .collection("works")
      .doc(id)
      .onSnapshot((snap) => {
        const data = snap.data();
        const gallery = data?.images;
        const dataType = data?.type;
        setImages(gallery);
        setType(dataType);
      });
  }, [id]);
  return {
    images,
    type,
  };
};
