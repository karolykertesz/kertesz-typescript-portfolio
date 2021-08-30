import firebase from "firebase";
export const handleChange = (e: any): any => {
  let selected: [] = e.target.files[0];
  // console.log(selected);
  return putData(selected);
  // console.log(selected.substr(0, selected.length - 4));
};
const putData = async (item: any) => {
  const dataref = firebase.firestore().collection("works").doc("rn-food");
  const storageRef = firebase.storage().ref("rn-food");
  const storageChild = storageRef.child(item.name);
  await storageChild.put(item);
  const fileUrl = await storageChild.getDownloadURL();
  return dataref
    .update({
      images: firebase.firestore.FieldValue.arrayUnion({
        image_url: fileUrl,
        name: item.name.substr(0, item.name.length - 4),
      }),
    })
    .then(() => console.log("done"));
};
