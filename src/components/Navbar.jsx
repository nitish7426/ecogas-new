import React, { useContext } from "react";
import DarkMode from "../components/DarkMode";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../context/ContextProvider";
import avatar1 from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.jpg";

const Navbar = ({ setSidebar, sidebar }) => {
  const avatars = [avatar1, avatar2, avatar3, avatar4];
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="flex items-center justify-between h-16 px-4 py-2 w-full">
      <button onClick={() => setSidebar(!sidebar)}>
        <HiBars3BottomLeft size={25} />
      </button>

      <DarkMode />
      <button
        className="flex items-center gap-2 py-2 px-4 dark:text-slate-100 hover:bg-slate-100  transition-colors dark:hover:bg-slate-800 rounded-md font-medium"
        onClick={logout}
      >
        <img
          className="h-8 w-8 bg-slate-500 rounded-full"
          src={avatar1}
          alt=""
        />
        Hii, {user.name}
      </button>
    </nav>
  );
};

export default Navbar;
