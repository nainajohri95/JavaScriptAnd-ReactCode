import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link
              to="/about"
              state={{ myKey: "important data", luckyNumber: 12 }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
