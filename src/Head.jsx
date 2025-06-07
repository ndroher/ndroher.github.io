import React from "react";
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + "Leandro —  Web Developer";
  }, [props]);
  return <></>;
};
export default Head;
