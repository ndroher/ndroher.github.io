import React from "react";
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + "Leandro — Front-end Web Developer";
  }, [props]);
  return <></>;
};
export default Head;
