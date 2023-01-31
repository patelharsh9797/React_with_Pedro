import React from "react";
import { useGetCat } from "../hooks/useGetCat";

const Cat = () => {
  const {
    data: catData,
    isCatLoading,
    refetchData,
    isCatReFetching,
  } = useGetCat();

  return (
    <div>
      <button onClick={refetchData}>
        {!(isCatLoading || isCatReFetching) ? "More Cat" : "Loading Cat"}
      </button>
      <h2>{catData?.fact}</h2>
    </div>
  );
};

export default Cat;
