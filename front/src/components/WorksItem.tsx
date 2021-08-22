import react from "react";
import { Works } from "../interfaces/works.interface";
import { useWorkItem } from "../utils/firebase/hooks/useItem";
export const Worksitem: React.FC<{ doc: string }> = (props) => {
  const { doc } = props;
  const { workItem } = useWorkItem(doc);
  console.log(workItem);
  return <>{workItem ? <div></div> : <div></div>}</>;
};
