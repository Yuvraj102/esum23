import { useEffect, useState } from "react";

import { close, menu, logo, ecell, ecellhd } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    // console.log(navLinks);
  }, []);
  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar"
      style={{ position: "relative", zIndex: "100" }}
    >
      <img src={ecellhd} alt="E-Summit" className="h-[100px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Home" ? "text-white" : "text-dimWhite"
          } ${0 === 4 - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("Home")}
        >
          <a href={`/`}>{"Home"}</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "About Us" ? "text-white" : "text-dimWhite"
          } ${1 === 4 - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("About Us")}
        >
          <a href={`/#about-us`}>{"About Us"}</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Events" ? "text-white" : "text-dimWhite"
          } ${2 === 4 - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("Events")}
        >
          <a href={`/#events`}>{"Events"}</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Register Now" ? "text-white" : "text-dimWhite"
          } ${3 === 4 - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("Register")}
        >
          <a href={`/register`}>{"Register Now"}</a>
        </li>
        {/*{
          navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            
            <Link to="/register">About Us</Link>
          </li>
        ))
        }*/}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Home" ? "text-white" : "text-dimWhite"
              } ${0 === 4 - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive("Home")}
            >
              <a href={`/`}>{"Home"}</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "About Us" ? "text-white" : "text-dimWhite"
              } ${1 === 4 - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive("About Us")}
            >
              <a href={`/#about-us`}>{"About Us"}</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Events" ? "text-white" : "text-dimWhite"
              } ${2 === 4 - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive("Events")}
            >
              <a href={`/#events`}>{"Events"}</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Register" ? "text-white" : "text-dimWhite"
              } ${3 === 4 - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive("Register")}
            >
              <a href={`/register`}>{"Register Now"}</a>
            </li>
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {console.log(navLinks)}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
