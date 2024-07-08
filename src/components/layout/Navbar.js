import React from "react";
import { logo } from "../../assets";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const user = useSelector(store => store.user.user);  
  const { logout } = useLogout();
  
  const handleLogout = async () => {
    await logout(); 
  };

  return (
    <header className="flex flex-wrap items-center p-6 md:pl-20 justify-between md:justify-around shadow-xl">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-sm md:text-lg">Authentication</span>
      </div>
      {isAuthenticated && (
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              src={user.avatar.url}
              alt=""
            />
            <span className="top-0 left-6 md:left-7 absolute w-2.5 md:w-3.5 h-2.5 md:h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            <div className="text-sm md:text-base">{user.username}</div>
          </div>
          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm px-3 md:px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
