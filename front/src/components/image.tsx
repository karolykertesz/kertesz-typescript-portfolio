import React from "react";
interface Props {
  url: string | undefined;
  name: string | undefined;
}
export const Image: React.FC<Props> = (props) => {
  const { url, name } = props;
  return (
    <div className="img-wrap">
      <img alt={name} src={url} />
    </div>
  );
};
