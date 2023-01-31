import React, { useState } from "react";
import Cat from "../components/Cat";
import { useToggle } from "../hooks/useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const CustomHooks = () => {
  const clientConfig = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  };
  const client = new QueryClient(clientConfig);

  // const [isVisible, toggle] = useToggle(false);
  const { state: isVisible, toggle } = useToggle(false);
  // const [isVisible2, toggle2] = useToggle(false);

  const {
    state: counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
  } = useCount(0);

  return (
    <QueryClientProvider client={client}>
      <h1>Custom Hook</h1>
      {/* <button onClick={toggle}>{!isVisible ? "Show" : "Hide"}</button> */}
      {/* <button onClick={toggle2}>{!isVisible2 ? "Show 2" : "Hide 2"}</button> */}
      {/* {isVisible && <h2>Hidden Messages</h2>} */}
      {/* {isVisible2 && <h2>Another Hidden Messages</h2>} */}

      {/* <Cat /> */}

      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </QueryClientProvider>
  );
};

const useCount = (init = 0) => {
  const [state, setState] = useState(init);

  const incrementCounter = () => {
    setState(state + 1);
  };

  const decrementCounter = () => {
    setState(state - 1);
  };
  const resetCounter = () => {
    setState(init);
  };

  return { state, incrementCounter, decrementCounter, resetCounter };
};

export default CustomHooks;
