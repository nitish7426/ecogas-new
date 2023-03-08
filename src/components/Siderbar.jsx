import React, { useContext } from "react";
import { BiHomeAlt, BiWrench } from "react-icons/bi";
import { BsBox, BsTruck, BsSim } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TbBuildingEstate } from "react-icons/tb";
import { FaRegHandshake, FaRegMoneyBillAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { AuthContext } from "../context/ContextProvider";

const Siderbar = ({ sidebar, setSidebar }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const pages = [
    {
      text: "fitment",
      to: "/fitment",
      icon: <BiWrench size={20} />,
    },
    {
      text: "alloted stocks",
      to: "/alloted_stocks",
      icon: <HiOutlineSquare2Stack size={20} />,
    },
    {
      text: "available stocks",
      to: "/available_stocks",
      icon: <BsBox size={20} />,
    },
    {
      text: "distributor",
      to: "/distributor",
      icon: <BsTruck size={20} />,
    },
    {
      text: "sub distributor",
      to: "/sub_distributor",
      icon: <BsTruck size={20} />,
    },
    {
      text: "dealer",
      to: "/dealer",
      icon: <FaRegHandshake size={20} />,
    },
    {
      text: "sub dealer",
      to: "/sub_dealer",
      icon: <FaRegHandshake size={20} />,
    },
    {
      text: "customer",
      to: "/customer",
      icon: <FiUsers size={20} />,
    },
    {
      text: "employee",
      to: "/employee",
      icon: <SlUser size={20} />,
    },
    {
      text: "sim",
      to: "/sim",
      icon: <BsSim size={20} />,
    },
    {
      text: "state",
      to: "/state",
      icon: <TbBuildingEstate size={20} />,
    },
    {
      text: "orders",
      to: "/orders",
      icon: <BsTruck size={20} />,
    },
    {
      text: "products",
      to: "/products",
      icon: <BsBox size={20} />,
    },
    {
      text: "manual payment",
      to: "/manual_payment",
      icon: <FaRegMoneyBillAlt size={20} />,
    },
  ];
  return (
    sidebar && (
      <div
        className="absolute h-screen w-full left-0 bg-black/50"
        onClick={() => setSidebar(!sidebar)}
      >
        <aside
          className="h-screen dark:bg-slate-800 bg-neutral-100 text-black max-w-fit px-6 pt-6 pb-12 space-y-6 overflow-y-auto dark:text-slate-100 absolute"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-bold text-center w-full">Ecogas</h3>
          <div className="flex flex-col gap-2">
            <span className="capitalize font-semibold">dashboard</span>
            <NavLink
              className="flex items-center gap-4 font-medium px-4 py-2 rounded-lg  dark:text-neutral-100 hover:bg-neutral-200  transition-colors dark:hover:bg-slate-700"
              to="/"
            >
              <BiHomeAlt size={25} /> Home
            </NavLink>
          </div>

          <div className="flex flex-col gap-2">
            <span className="capitalize font-semibold">Pages</span>
            {pages.map((value, i) => (
              <NavLink
                className="flex items-center gap-4 font-medium  pl-4 pr-8 py-2 rounded-lg capitalize dark:text-slate-100 hover:bg-slate-200  transition-colors dark:hover:bg-slate-700 whitespace-nowrap"
                key={i}
                to={value.to}
              >
                {value.icon} {value.text}
              </NavLink>
            ))}
          </div>
        </aside>
      </div>
    )
  );
};

export default Siderbar;
