import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return <div>About</div>;
}

export default About;
