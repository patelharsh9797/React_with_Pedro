import React from "react";
import PropTypes from "prop-types";

const TypeSafety = () => {
  return (
    <div>
      <h1>React Type Safety</h1>
      <Person
        name="Harsh Patel"
        email="email_hi_he@gmail.com"
        // age={"Kaya karega janke"}
        age={69}
        // isMarried={"single hu bhai :)"}
        isMarried={false}
        friends={[9, 1, 5]}
      />
    </div>
  );
};

const Person = (props) => {
  return (
    <>
      <h2>Name : {props.name}</h2>
      <h2>Email : {props.email}</h2>
      <h2>Age : {props.age}</h2>
      <h2>
        isMarried :{" "}
        {!props.isMarried ? "Single hi huu bhai" : "Ha bhai ho gayi heee"}
      </h2>
      <h2>
        friends :{" "}
        {props.friends.map((fri) => (
          <span key={fri}>{fri} </span>
        ))}
      </h2>
    </>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
export default TypeSafety;
