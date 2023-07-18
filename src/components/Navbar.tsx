import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

interface Props {}

const Navbar: React.FunctionComponent<Props> = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenuHandler = () => {
    setToggle((prevToggleState) => !prevToggleState);
  };

  return (
    <nav className="w-full py-6 justify-between items-center flex navbar">
      {/* image logo */}
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />

      {/* nav menu items */}
      <ul className="list-none items-center justify-end flex-1 hidden sm:flex">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* for small devices */}
      <div className="flex flex-1 justify-end items-center   sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="navbar-menu-icon"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={toggleMenuHandler}
        />

        <div
          className={` p-6  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar ${
            toggle ? "flex" : "hidden"
          }`}
        >
          <ul className="list-none w-full items-end flex flex-col">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins w-full text-right font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
