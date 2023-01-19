import React from "react";

const Conditional_Rendering = ({ isGreen }) => {
  console.log(isGreen);
  return (
    <div>
      <h1 style={{ color: isGreen ? "green" : "" }}>Green Text</h1>
      <h2>{isGreen ? "Green" : "Not a Green"}</h2>
      {isGreen && <h2>Green hi he</h2>}
    </div>
  );
};

export default Conditional_Rendering;
