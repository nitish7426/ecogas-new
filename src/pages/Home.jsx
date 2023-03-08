import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/ContextProvider";
import Spinner from "../components/Spinner";
import { pages } from "../constants";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const keyValues = {
    fitment: pages[0],
    "allotted-stocks": pages[1],
    "avail-stocks": pages[2],
    dist: pages[3],
    "sub-distributor": pages[4],
    dealer: pages[5],
    "sub-dealer": pages[6],
    customer: pages[7],
    employee: pages[8],
  };
  const getDashboard = async () => {
    let options = {
      method: "GET",
      url: "https://api.ecotrack.co.in/dashboard",
      headers: {
        "x-access-token": user.token,
      },
    };
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  };
  const { data, isLoading, isError } = useQuery(["dashboard"], getDashboard);
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        Sorry something went wrong.
      </div>
    );
  }
  return (
    <div>
      {Object.keys(data).map((value, i) => (
        <Link key={i} to={keyValues[value].to}>
          <div className="capitalize">{keyValues[value].text}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
