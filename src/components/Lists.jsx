import React from "react";

const Lists = () => {
  //   const names = ["Harsh", "Yash", "Prince", "Shivani", "ADSH"];
  //   const users = [
  //     { name: "Harsh", age: 24 },
  //     { name: "Yash", age: 22 },
  //     { name: "Prince", age: 21 },
  //     { name: "Shivani", age: 24 },
  //   ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div>
      {/* <h2>{names[3]}</h2> */}
      {/* {names.map((name, key) => (
        <h2 key={key}>{name}</h2>
      ))} */}

      {/* {users.map((user, key) => (
        <User key={key} name={user.name} age={user.age} />
      ))} */}

      {planets.map(
        (planet, key) => planet.isGasPlanet && <h2 key={key}>{planet.name}</h2>
      )}
    </div>
  );
};

// User Component
const User = ({ name, age }) => {
  return (
    <div>
      {name} - {age}
    </div>
  );
};
export default Lists;
