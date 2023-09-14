import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function Pricing() {
  const location = useLocation();
  return (
    <div>
      Pricing
      <Outlet />
      {/* outlet is use to tellparent that where to render its child element */}
    </div>
  );
}

export default Pricing;
