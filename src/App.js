import React from "react";

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 5
    }
  ];
  return (
    <div>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hello, I'm {props.name} and {props.age} years old.
    </div>
  );
};

export default App;
