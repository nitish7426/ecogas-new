import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/ContextProvider";
import {
  AllotedStockes,
  AvailableStockes,
  Customer,
  Dealer,
  Distributor,
  Employee,
  Fitment,
  Home,
  Layout,
  Login,
  ManualPayment,
  NotFound,
  Orders,
  Products,
  Sim,
  State,
  SubDealer,
  SubDistributor,
} from "./pages";

const ProtectedLogin = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedLogin>
              <Layout />
            </ProtectedLogin>
          }
        >
          <Route index element={<Home />} />
          <Route path="/fitment" element={<Fitment />} />
          <Route path="/alloted_stocks" element={<AllotedStockes />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/products" element={<Products />} />
          <Route path="/available_stocks" element={<AvailableStockes />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/sub_distributor" element={<SubDistributor />} />
          <Route path="/sub_dealer" element={<SubDealer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sim" element={<Sim />} />
          <Route path="/manual_payment" element={<ManualPayment />} />
          <Route path="/state" element={<State />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
