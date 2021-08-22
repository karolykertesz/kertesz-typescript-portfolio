import react, { useState, useEffect } from "react";
import firebase from "firebase";
import { InitApp } from "../../firebase";
import { Works } from "../../../interfaces/works.interface";
InitApp();
export const useWorkItem = (id: string) => {
  const [workItem, setWorkitem] = useState<Works | {}>();
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
  }, []);
  return { workItem };
};
