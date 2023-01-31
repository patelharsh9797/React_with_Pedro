import React, { useState } from "react";
import { useToggle } from "../hooks/useToggle";

const CustomHooks = () => {
  // const [isVisible, toggle] = useToggle(false);
  const { state: isVisible, toggle } = useToggle(false);
  // const [isVisible2, toggle2] = useToggle(false);

  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggle}>{!isVisible ? "Show" : "Hide"}</button>
      {/* <button onClick={toggle2}>{!isVisible2 ? "Show 2" : "Hide 2"}</button> */}
      {isVisible && <h2>Hidden Messages</h2>}
      {/* {isVisible2 && <h2>Another Hidden Messages</h2>} */}
    </div>
  );
};

export default CustomHooks;
