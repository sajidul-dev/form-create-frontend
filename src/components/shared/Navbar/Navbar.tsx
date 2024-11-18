import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="relative container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyApp</div>

        {/* Hamburger Menu Button for Small Devices */}
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
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 px-4 md:px-0 py-4 md:py-0">
            <li>
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
            </li>
            <li>
              <a
                href="#task1"
                className="block px-4 py-2 hover:bg-blue-500 rounded-md"
              >
                Task1
              </a>
            </li>
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
