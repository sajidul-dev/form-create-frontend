import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="side-bar bg-blue-600 rounded-lg text-white shadow-lg w-20 lg:w-[88px] xl:w-24 ml-2 my-2 fixed flex justify-center content-between">
      <div className=" h-full relative container mx-auto py-3 flex flex-col">
        <div className="flex justify-center items-center mt-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static bg-blue-700 md:bg-transparent w-full md:w-auto top-full left-0 md:top-auto md:left-auto z-50`}
        >
          <ul className="flex flex-col ">
            {/* <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "block px-4 py-2 bg-blue-500 rounded-md"
                    : "block px-4 py-2"
                }
              >
                Home
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/report"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "block px-4 py-2 bg-blue-500 rounded-md"
                    : "block px-4 py-2"
                }
              >
                Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "block px-4 py-2 bg-blue-500 rounded-md"
                    : "block px-4 py-2"
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="relative">
          {isOpen && (
            <div className="flex flex-col items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Task1
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Task2
              </a>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
