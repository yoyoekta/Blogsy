import Link from "next/link";
import React from "react";
import DarkMode from "../darkmode/DarkMode";

const Navbar = () => {
  const primary = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <nav className="min-w-screen dark:bg-gray-800 dark:text-white bg-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex space-x-4">
                <DarkMode />
                {primary.map((item, index) => (
                  <Link href={item.url} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
