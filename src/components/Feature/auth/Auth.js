import React, { useState } from "react";

const Auth = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: "ADMIN",
  });
  const [signup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUser = (e) => {
    e.preventDefault();
  };

  return (
    <form class="max-w-sm mx-auto">
      {signup && (
        <div class="mb-5">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Username
          </label>
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            id="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="reactjavascript"
            required
          />
        </div>
      )}
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
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
      <button
        onClick={(e) => handleUser(e)}
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {signup ? "Signup" : "Signin"}
      </button>
    </form>
  );
};

export default Auth;
