import React, { useContext, useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { accessgrant, depType, pages, typesOBJ } from "../constants";
import { AuthContext } from "../context/ContextProvider";

const Siderbar = ({ sidebar, setSidebar }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [authorizedLinks, setAuthorizedLinks] = useState([]);

  useEffect(() => {
    if (user.user_type == "Employee") {
      setAuthorizedLinks(typesOBJ[depType[user.department]]);
    } else {
      setAuthorizedLinks(accessgrant[user.user_type]);
    }
  }, [user.user_type]);
  return (
    sidebar && (
      <>
        <div
          className="absolute inset-0 bg-black/50 md:hidden"
          onClick={() => setSidebar(false)}
        ></div>
        <aside
          className="h-screen dark:bg-slate-800 bg-slate-100 text-black max-w-fit px-6 pt-6 pb-12 space-y-6 overflow-y-auto dark:text-slate-100 absolute left-0 md:relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-bold text-center w-full">Ecogas</h3>
          <div className="flex flex-col gap-2">
            <span className="capitalize font-semibold">dashboard</span>
            <NavLink
              className="flex items-center gap-4 font-medium px-4 py-2 rounded-lg  dark:text-slate-100 hover:bg-slate-200  transition-colors dark:hover:bg-slate-700"
              to="/"
            >
              <BiHomeAlt size={25} /> Home
            </NavLink>
          </div>

          <div className="flex flex-col gap-2">
            <span className="capitalize font-semibold">Pages</span>
            {pages.map(
              (value, i) =>
                authorizedLinks.includes(value.text) && (
                  <NavLink
                    className="flex items-center gap-4 font-medium  pl-4 pr-8 py-2 rounded-lg capitalize dark:text-slate-100 hover:bg-slate-200  transition-colors dark:hover:bg-slate-700 whitespace-nowrap"
                    key={i}
                    to={value.to}
                  >
                    {value.icon} {value.text}
                  </NavLink>
                )
            )}
          </div>
        </aside>
      </>
    )
  );
};

export default Siderbar;
