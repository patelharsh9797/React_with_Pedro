import React, { useState, useEffect } from "react";
import Axios from "axios";

const FetchApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  //   const [fact, setFact] = useState("");
  //   const [inputName, setInputName] = useState("");
  //   const [predictAge, setPredictAge] = useState({});
  const [excuse, setExcuse] = useState(null);

  //   useEffect(() => {
  //     Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setFact(res.data.fact);
  //     });
  //   }, []);

  const generateHandler = (name) => {
    setIsLoading(true);

    // Axios.get("https://catfact.ninja/fact").then((res) => {
    //   setFact(res.data.fact);
    //   setIsLoading(false);
    // });

    if (name) {
      Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        //   setFact(res.data.fact);
        setPredictAge(res.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
      alert("Enter First Name");
    }
  };

  const excuseGenerate = (type) => {
    setIsLoading(true);
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then(
      (res) => {
        setExcuse(res.data[0]);
        setIsLoading(false);
      }
    );
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Fist Name Only"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={() => generateHandler(inputName)} disabled={isLoading}>
        {!isLoading ? "Predict Age" : "Predicting"}
      </button> */}
      {/* {fact && <h2>{fact}</h2>} */}
      {/* <h2>Name : {predictAge.name}</h2>
      <h2>Your Age : {predictAge.age}</h2>
      <h2>Count : {predictAge.count}</h2> */}

      <h1 className="gradText">Excuse Generator</h1>
      <p>Click on any button to Excuse like a Pro 😎</p>

      <button onClick={() => excuseGenerate("office")}>Office</button>
      <button onClick={() => excuseGenerate("family")}>Family</button>
      <button onClick={() => excuseGenerate("children")}>Children</button>
      <button onClick={() => excuseGenerate("college")}>college</button>
      <button onClick={() => excuseGenerate("party")}>Party</button>
      <button onClick={() => excuseGenerate("funny")}>Funny</button>
      <button onClick={() => excuseGenerate("unbelievable")}>
        Unbelievable
      </button>
      <button onClick={() => excuseGenerate("developers")}>Developers</button>
      <button onClick={() => excuseGenerate("gaming")}>Gaming</button>

      <div className="showExcuse">
        {!excuse && !isLoading ? (
          <h2>Your Excuse Will be show Here</h2>
        ) : (
          <>
            <h2>
              {isLoading ? "Making Excuse for you..." : `${excuse.category} :`}
            </h2>
            {!isLoading && <h2>{excuse.excuse}</h2>}
          </>
        )}
      </div>
    </div>
  );
};

export default FetchApi;
