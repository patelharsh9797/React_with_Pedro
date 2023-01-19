import React from "react";

const Lists = () => {
  //   const names = ["Harsh", "Yash", "Prince", "Shivani", "ADSH"];
  const users = [
    { name: "Harsh", age: 24 },
    { name: "Yash", age: 22 },
    { name: "Prince", age: 21 },
    { name: "Shivani", age: 24 },
  ];

  return (
    <div>
      {/* <h2>{names[3]}</h2> */}
      {/* {names.map((name, key) => (
        <h2 key={key}>{name}</h2>
      ))} */}

      {users.map((user, key) => (
        <User key={key} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

const User = ({ name, age }) => {
  return (
    <div>
      {name} - {age}
    </div>
  );
};
export default Lists;
