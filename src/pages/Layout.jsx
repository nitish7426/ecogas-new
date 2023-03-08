import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Siderbar from "../components/Siderbar";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.innerWidth > 900 && setSidebar(true);
  }, []);
  return (
    <main className="h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex transition-colors">
      <Siderbar sidebar={sidebar} setSidebar={setSidebar} />
      <section className="flex-1">
        <Navbar setSidebar={setSidebar} sidebar={sidebar} />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
