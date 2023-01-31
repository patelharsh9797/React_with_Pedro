import React, { useState } from "react";

export const useToggle = (initVal = false) => {
  const [state, setState] = useState(initVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  //   return [state, toggle];
  return { state, toggle };
};
