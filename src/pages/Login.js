import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate(); //Hook

  function handleSubmit(e) {
    e.preventDefault();

    if (name == "Naina") {
      navigate("/user/Naina");
    } else {
      navigate("/about");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}

export default Login;
