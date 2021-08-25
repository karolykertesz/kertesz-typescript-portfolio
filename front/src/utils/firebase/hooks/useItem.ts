import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { InitApp } from "../../firebase";
InitApp();
export const useWorkItem = (id: string | undefined) => {
  const [workItem, setWorkitem] = useState<any>();
  useEffect(() => {
    const dataItem = firebase
      .firestore()
      .collection("works")
      .doc(id)
      .onSnapshot((snap) => {
        const data = snap.data();
        setWorkitem(data);
      });
    return () => dataItem();
  }, [id]);
  return { workItem };
};
