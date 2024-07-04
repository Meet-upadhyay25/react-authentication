import React, { useState } from "react";
import { eye } from "../../../assets";
import useSignIn from "../../../hooks/useSignIn";
import useSignUp from "../../../hooks/useSignUp";

const Auth = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: "ADMIN",
  });
  const [signup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null)


  const { signIn: handleSignIn } = useSignIn();
  const { signUp: handleSignUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signup) {
      await handleSignUp({
        email: user.email,
        password: user.password,
        username: user.username,
      });
      setMessage("User register succesfully! Please Login")
      setUser({ username: "", email: "", password: "" });
    } else {
      await handleSignIn({
        username: user.username,
        password: user.password,
      }); 
      setUser({ username: "", password: "" });
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      {signup && (
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
      )}
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Username
        </label>
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="reactjavascript"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type={showPassword ? "text" : "password"}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <img
          className="w-5 cursor-pointer"
          alt="eye"
          src={eye}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <div className="mb-5">
        {signup ? (
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Already User ?
            <span
              className="underline cursor-pointer"
              onClick={() => setSignup(false)}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            New User ?
            <span
              className="underline cursor-pointer"
              onClick={() => setSignup(true)}
            >
              Register
            </span>
          </p>
        )}
      </div>
      <div>
        {message}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {signup ? "Signup" : "Signin"}
      </button>
    </form>
  );
};

export default Auth;
