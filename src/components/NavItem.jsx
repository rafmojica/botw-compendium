import React from "react";
import { Link } from "react-router-dom";

function NavItem({ link, icon, title }) {
  return (
    <>
      <Link to={link}>
        <li
          className="flex hover:cursor-pointer text-[#bfa454] bg-[#5c7346] py-2 px-4
     rounded-full h-12"
        >
          <span className="hidden items-center sm:flex">
            <img
              src={icon}
              className="h-10"
              alt=""
            />
          </span>
          <span className="flex items-center sm:ml-2">{title}</span>
        </li>
      </Link>
    </>
  );
}

export default NavItem;
