import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {!showText ? "SHOW" : "HIDE"}
      </button>
      {showText && <Text />}
    </div>
  );
};

// custom component

const Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text && <h1>{text} </h1>}
    </div>
  );
};

export default LifeCycle;
