import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setNmae] = useState("");

  useEffect(() => {
    console.log(counter, "counter updated");
  }, [counter, name]);
  //here whenever counter or name will be updated then the fun inside useEffect will be called

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
