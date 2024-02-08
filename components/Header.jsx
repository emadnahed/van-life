import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/host">Host</Link>
      </nav>
    </header>
  );
}

// Header is now a seperate component as to enhance the process of nested routing and shared UI