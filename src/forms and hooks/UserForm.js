import React, { useRef, useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);

  function handleSumbit(event) {
    event.preventDefault();
    // console.log("sumbit clicked");
    // console.log(nameInputRef.current); // byt his we will get <input type="text" id="nameInput">
    const nameInputValue = nameInputRef.current.value;
    const fruitValue = fruitSelectRef.current.value;
    alert(nameInputValue + fruitValue);
  }

  function handleChange(e) {
    console.log(e.target.value);
    SVGComponentTransferFunctionElement(e.target.value);
  }
  return (
    <form style={{ padding: "20px", margine: "20px" }}>
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={(event) => setName(event.target.value)} /> */}
      <input type="text" id="nameInput" ref={nameInputRef} />
      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <button onClick={handleSumbit}>Submit</button>
    </form>
  );
}

export default UserForm;
