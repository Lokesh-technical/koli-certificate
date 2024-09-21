import React, { useState } from "react";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import { getCookie } from "cookies-next";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const userDetail = useSelector((state) => state?.auth?.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h2 className="text-[24px] font-semibold text-gray-900 dark:text-gray-100">
        Welcome Back
      </h2>

      <div className="flex items-center gap-4">
        {/* Theme Changer */}
        <ThemeChanger />

        {/* Profile Dropdown */}
        <div className="relative">
          <CgProfile
            size={40}
            color="#6b21a8"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={handleProfileClick}
          />

          {/* Dropdown below the profile icon */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50 animate-fade-in">
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-100">
                  Role: {userDetail?.role || "User"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {userDetail?.email || "No email"}
                </p>
              </div>
              <div className="border-t dark:border-gray-700"></div>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
