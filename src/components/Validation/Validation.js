import React from "react";

const Validation = ({ textLength }) => (
  <div>{textLength < 5 ? "Text too short " : "Text long enough"}</div>
);

export default Validation;
