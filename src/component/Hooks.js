import React, { useEffect, useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  let normalCounter = 0;

  useEffect(() => {
    console.log("state counter", counter);
    console.log("normal counter", normalCounter);
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default Hooks;
