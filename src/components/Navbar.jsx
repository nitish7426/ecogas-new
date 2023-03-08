import React from "react";
import DarkMode from "../components/DarkMode";
import { HiBars3BottomLeft } from "react-icons/hi2";
const Navbar = ({ setSidebar, sidebar }) => {
  return (
    <nav className="flex items-center">
      <button onClick={() => setSidebar(!sidebar)}>
        <HiBars3BottomLeft size={25} />
      </button>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
