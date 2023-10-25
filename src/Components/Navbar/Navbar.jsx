import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#dfd0ed" }}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center">
            <img src={logo} class="h-12 mr-3" alt="Logo" />
          </a>

          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto " id="navbar-solid-bg">
          <ul class="flex items-center flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent py-2">
  <li>
    <Link style={{ color: "#2d2a5a", textTransform: "uppercase" }} href="#">
      Services
    </Link>
  </li>
  <hr class="border-l-2 border-purple-300 hidden md:block h-10" />

  <li>
    <Link style={{ color: "#2d2a5a", textTransform: "uppercase" }} href="#">
      Solutions
    </Link>
  </li>

  <li>
    <Link
      className="px-4 py-3"
      style={{
        alignItems: "center",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        backgroundColor: "#7638b5",
        textTransform: "uppercase",
        borderRadius: "3.75rem",
        color: "#fff",
        display: "flex",
        fontFamily: "Manrope, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 500,
        justifyContent: "center",
        boxShadow: "inset -10px 0 10px 0 #9c70cb", 
        maxWidth: "17.5rem",
      }}
      href="#"
    >
      Free Consult
    </Link>
  </li>
</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
