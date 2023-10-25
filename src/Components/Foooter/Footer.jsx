import React from 'react'
import logo  from  '../../Images/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="bg-image-wrap">
      <div class="mx-auto w-full pt-9 max-w-screen-xl">
        <div class="flex justify-center m-auto my-6">
          <img src={logo} class="h-12 mr-3" alt="Logo" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Information
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/about" class="hover:underline">
                  About
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/careers" class="hover:underline">
                  Careers
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/brand-center" class="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/blog" class="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/" class="hover:underline">
                  Home
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/services" class="hover:underline">
                  Services
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/solution" class="hover:underline">
                  Solution
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/free-consult" class="hover:underline">
                  Free Consult
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/contact-us" class="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal Info
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/privacy-policy" class="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/terms-conditions" class="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Subscribe to our Newsletter
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/newsletter" class="hover:underline">
                  Sign up to receive updates, access exclusive offers, and more
                </Link>
              </li>
              <div
                style={{
                  display: "flex",
                  maxWidth: "40rem",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  className="px-4 py-3"
                  style={{
                    borderRadius: "5rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    border: "none",
                    padding: "10px",
                    fontSize: "1rem",
                    fontFamily: "Manrope, sans-serif",
                    width: "100%", // Set a specific width (or any other desired width value)
                    outline: "none",
                  }}
                />
                <button
                  className="px-8 py-3"
                  style={{
                    backgroundColor: "#7638b5",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "3.75rem",
                    position: "absolute",
                    right: "1px",
                    top: "1px",
                    bottom: "1px",
                  }}
                  href="#"
                >
                  Send
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-4 py-6 m-auto md:flex md:items-center md:justify-center">
        <span class="text-sm text-gray-500 text-center">
          Copyright© 2023 All Rights Reserved.
        </span>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
