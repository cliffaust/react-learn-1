import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    class: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const results = () => {
    console.log(user);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInput}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={user.age}
        name="age"
        onChange={handleInput}
        placeholder="Enter your age"
      />
      <input
        type="text"
        value={user.class}
        name="class"
        onChange={handleInput}
        placeholder="Enter your class"
      />
      <button onClick={results}>Send</button>
    </div>
  );
}
