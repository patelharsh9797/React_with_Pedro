import React from "react";
import { Routes, Route } from "react-router-dom";

// TODO React Query
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Axios from "axios";

import NavBar from "../components/NavBar";

// TODO: Main Component
const ReactQuery = () => {
  const clientConfig = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  };
  const client = new QueryClient(clientConfig);

  return (
    <QueryClientProvider client={client}>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </QueryClientProvider>
  );
};

// TODO Custom Components
const Home = () => {
  const { data, isInitialLoading, isError, error, refetch, isRefetching } =
    useQuery(["CAT"], async () => {
      return await Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data)
        .catch((err) => err.response.data);
    });

  // if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>{JSON.stringify(error.message)}</h1>;

  return (
    <>
      <h1>Home</h1>
      {!(isInitialLoading || isRefetching) ? (
        <h2>{data?.fact || data?.message}</h2>
      ) : (
        <h2>Loading...</h2>
      )}
      <button onClick={refetch}>Update</button>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <h1>Profile Page</h1>
      {/* <ChangeUser /> */}
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  );
};

// const ChangeUser = () => {

//   return (
//     <div>
//       <input
//         type="text"
//         name="userName"
//         id="userName"
//         // onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={() => setUsername(userName.value)}>Change User</button>
//     </div>
//   );
// };
export default ReactQuery;
