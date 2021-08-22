import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { InitApp } from "../../firebase";
InitApp();
export const useIds = () => {
  const [docs, setDocs] = useState<string[]>();
  useEffect(() => {
    const getDock = firebase
      .firestore()
      .collection("works")
      .onSnapshot((doc) => {
        const docArr: string[] = [];
        const ids = doc.docs.forEach((d) => {
          docArr.push(d.id);
        });
        setDocs(docArr);
      });
    return () => getDock();
  }, []);
  return { docs };
};
