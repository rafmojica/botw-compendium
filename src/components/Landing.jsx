import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import link from "../assets/link.png";

function Landing() {
  return (
    <>
      <div
        className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 
      sm:w-full sm:max-w-6xl"
      >
        <div
          className="flex flex-col items-center gap-6
      sm:flex-row sm:items-center sm:justify-center sm:gap-0"
        >
          <div
            className="flex flex-col items-center p-6 gap-4 
        sm:items-start"
          >
            <h1
              className="text-center text-3xl font-bold 
      sm:text-left sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Browse through the <br />
              <span className="text-[#bfa454]">Hyrule Compendium</span>
            </h1>
            <p className="text-left sm:max-w-xl sm:text-2xl md:text-left lg:text-justify">
              Free access to the best collection of creatures, equipment,
              materials, monsters and treasure all in one place for you to view!
            </p>
            <Link to="/compendium">
              <Button
                className="!bg-[#5c7346] !text-[#fffff0] !normal-case 
      !font-['Poppins'] !font-bold !px-7 !py-3 !text-base !rounded-full"
                variant="contained"
              >
                Start Browsing
              </Button>
            </Link>
          </div>
          <div
            className="flex justify-center w-96
        sm:justify-start sm:flex"
          >
            <img className="w-2/3 sm:w-full" src={link} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
