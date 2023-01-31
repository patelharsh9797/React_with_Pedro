import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    isFetching: isCatReFetching,
  } = useQuery(["CAT"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = async () => {
    await refetch();
    alert("Data ReFetched");
  };

  return { data, isCatLoading, refetchData, isCatReFetching };
};
