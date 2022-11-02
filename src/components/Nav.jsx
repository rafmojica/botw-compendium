import React from "react";
import NavItem from "./NavItem";
import logo from "../assets/pngkey.com-nintendo-logo-png-235056.png";
import sword from "../assets/master-sword.png";
import envelope from "../assets/envelope.png";
import sheikahSlate from "../assets/sheikah slate.png";

function Nav() {
  return (
    <>
      <nav>
        <ul
          className="flex flex-col justify-between font-bold text-lg items-center space-x-0 p-3 h-44
        sm:flex-row sm:space-x-6 sm:p-4 bg-[#455946] sm:h-full sm:justify-start"
        >
          <li>
            <img
              src="https://i.pinimg.com/originals/36/a4/81/36a481508f58a23ce8f3ed78d542a710.png"
              className="hidden w-full h-24 sm:block"
              alt=""
            />
            <figure className="block sm:hidden">
              <img src={logo} className="w-[122.16px] h-24" alt="" />
            </figure>
          </li>
          <div className="flex justify-evenly gap-2 sm:justify-between">
            <NavItem link="/" icon={sword} title="Home" />
            <NavItem link="/about" icon={envelope} title="About" />
            <NavItem link="/compendium" icon={sheikahSlate} title="Compendium" />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
