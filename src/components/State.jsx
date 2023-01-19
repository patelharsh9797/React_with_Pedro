import { useState } from "react";

const State = () => {
  // const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  //   const [isHide, setIsHide] = useState(true);
  return (
    <>
      {/* 
      <input
        type="text"
        name="input"
        id="input"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>inputValue : {input}</p> */}

      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Set To Zero</button>

      {/* <button onClick={() => setIsHide(!isHide)}>
        {!isHide ? "HIDE" : "SHOW"}
      </button>
      <p style={{ color: !isHide ? "Green" : "" }}>
        This is not hidden anymore!
      </p> */}
    </>
  );
};

export default State;
