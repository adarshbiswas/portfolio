import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar absolute z-10 bg-transparent flex justify-between items-center w-full px-8 pt-6">
      <Link to="/">
        <h2 className="text-5xl font-[Odesty]">Adarsh</h2>
      </Link>
      <div className="nav_items flex gap-12 mr-10">
        <ul className="nav_items_menu flex gap-6 text-lg font-bold">
          <a href="#about">
            <li>About</li>
          </a>

          <a href="#projects">
            <li>Projects</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>

          <a href="#blog">
            <li>Blog</li>
          </a>
        </ul>
        <img
          className="h-9 cursor-pointer hover:scale-105 "
          src={assets.light}
          alt="light mode icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
