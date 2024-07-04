import React from "react";
import { logo } from "../../assets";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const { logout } = useLogout();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className="flex items-center p-6 pl-20 justify-around shadow-xl">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <span>Authentication</span>
      </div>
      {isAuthenticated && (
        <div className="flex items-center gap-5">
          {/* <div class="relative">
            <img
              class="w-10 h-10 rounded-full"
              src={user.avatar.url}
              alt=""
            />
            <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div> */}
          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
