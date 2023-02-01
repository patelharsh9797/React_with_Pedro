import React, { useState } from "react";
import { useGetCat } from "../hooks/useGetCat";

const Cat = () => {
  const [OBJECT, setOBJECT] = useState(null);
  const {
    data: catData,
    isCatLoading,
    refetchData,
    isCatReFetching,
  } = useGetCat();

  const updateObj = () => {
    // setOBJECT((prev) => ({ ...prev, itemPrev: "added with previuis" }));
    setOBJECT((prev) => ({ ...prev, itemAdded: "Added kar diya" }));
  };
  return (
    <div>
      <button onClick={refetchData}>
        {!(isCatLoading || isCatReFetching) ? "More Cat" : "Loading Cat"}
      </button>
      <button onClick={updateObj}>Add item to object</button>
      <h2>{catData?.fact}</h2>
    </div>
  );
};

export default Cat;
