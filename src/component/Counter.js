import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1\);
    console.log("count is" + count);
  }

  return (
    <div>
      <p>The value of count is:{count} </p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default Counter;
