import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { AuthContext } from "../context/ContextProvider";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    userType: "Admin",
  });
  const typesOBJ = {
    Admin: 0,
    Distributor: 2,
    SubDistributor: 6,
    Dealer: 1,
    SubDealer: 5,
    Customer: 3,
    Employee: 4,
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("username", formDetails.email);
    newFormData.append("password", formDetails.password);
    newFormData.append("user_type", typesOBJ[formDetails.userType]);
    try {
      const { data } = await axios.post(
        "https://api.ecotrack.co.in/login",
        newFormData
      );
      console.log(data);
      setUser(data);
      setFormDetails({
        email: "",
        password: "",
        userType: "",
      });
      navigate("/");
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  };
  useEffect(() => {
    isError &&
      setTimeout(() => {
        setIsError(false);
        console.log("helo");
      }, 5000);
  }, [isError]);
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-6 dark:bg-slate-900 bg-white relative text-slate-900 dark:text-slate-100">
      {isError && <Toast />}
      <form className="w-80 space-y-4" onSubmit={handleSubmit}>
        {/* email */}
        <h3 className="text-center text-4xl font-semibold">Login</h3>
        <div className="w-full flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formDetails.email}
            name="email"
            required
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="py-2 px-4 rounded-md outline-sky-500 border dark:bg-slate-800 dark:border-white/10"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formDetails.password}
            name="password"
            required
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="py-2 px-4 rounded-md outline-sky-500 border dark:bg-slate-800 dark:border-white/10"
          />
        </div>
        {/* select */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Select user type</label>
          <select
            className="border py-2 px-4 rounded-md outline-sky-500 text-sm font-medium dark:bg-slate-800 dark:border-white/10"
            value={formDetails.userType}
            name="userType"
            onChange={(e) =>
              setFormDetails({
                ...formDetails,
                [e.target.name]: e.target.value,
              })
            }
          >
            {Object.keys(typesOBJ).map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* button */}
        <button className="bg-sky-500 w-full py-2 px-4 rounded-md font-semibold text-white dark:text-slate-900 hover:bg-sky-600 transition-colors">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;

const Toast = () => {
  return (
    <div className="absolute flex gap-4 py-2 px-4 bg-red-500 rounded-md text-red-100 top-0 my-6 items-center">
      <span className="">Error accured, Please try again later.</span>
      <BiErrorCircle size={20} />
    </div>
  );
};
