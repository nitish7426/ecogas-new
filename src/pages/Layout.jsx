import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Siderbar from "../components/Siderbar";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex transition-colors flex-col px-4">
      <Siderbar sidebar={sidebar} setSidebar={setSidebar} />
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <Outlet />
    </main>
  );
};

export default Layout;
