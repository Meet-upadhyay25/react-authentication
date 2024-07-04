import React from "react";
import { logo } from "../../assets";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const { logout, message } = useLogout();
  const handleLogout = async() => {
    await logout();
  };
  return (
    <header className="flex items-center p-6 pl-20 justify-around">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <span>Authentication</span>
      </div>
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;
