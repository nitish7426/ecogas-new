import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { AuthContext } from "../context/ContextProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    user_type: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Required"),
    password: yup.string().min("4").required("Required"),
    user_type: yup.string().notOneOf(["Select user type"], "Select user type"),
  });
  const typesOBJ = {
    "Select user type": "",
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
    const newFormData = new FormData();
    newFormData.append("username", e.email);
    newFormData.append("password", e.password);
    newFormData.append("user_type", typesOBJ[e.user_type]);
    try {
      const { data } = await axios.post(
        "https://api.ecotrack.co.in/login",
        newFormData
      );
      console.log(data);
      setUser(data);
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
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg dark:bg-slate-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-slate-600 dark:text-slate-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-slate-500 dark:text-slate-400">
            Login or create account
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="w-full mt-4">
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full mt-4">
                <InputField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="w-full mt-4">
                <Field
                  className="input dark:text-slate-100"
                  name="user_type"
                  as="select"
                >
                  {Object.keys(typesOBJ).map((value, i) => (
                    <option key={i} value={value}>
                      {value}
                    </option>
                  ))}
                </Field>
                <p className="text-xs text-red-600 mt-1 ml-2">
                  <ErrorMessage name="user_type" />
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="text-sm text-slate-600 dark:text-slate-200 hover:text-slate-500"
                >
                  Forget Password?
                </a>

                <button className="button">Sign In</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;

const Toast = () => {
  return (
    <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 absolute top-0 m-4">
      <div className="flex items-center justify-center w-12 bg-red-500 text-white">
        <BiErrorCircle size={25} />
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-red-500 dark:text-red-400">
            Error
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Error make sure your credentials are right!
          </p>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ name, type, placeholder }) => {
  return (
    <>
      <Field
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <p className="text-xs font-medium ml-2 mt-1 text-red-600">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};
