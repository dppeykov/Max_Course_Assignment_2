import React from "react";

const Char = ({ character, deleteChar }) => (
  <div
    style={{
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black"
    }}
    onClick={deleteChar}
  >
    {character}
  </div>
);

export default Char;
