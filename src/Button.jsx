import React from "react";

const Button = (props) => {
  return <button {...props} />;
};

export default React.memo(Button);