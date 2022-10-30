import React from "react";

function TechStack({ img, language }) {
  return (
    <>
        <figure
          className="flex-initial group w-1/4 p-4 relative
            flex flex-col justify-center items-center
            sm:w-1/5"
        >
          <img
            className="w-full 
            group-hover:scale-75 group-hover:opacity-80 transition duration-300"
            alt=""
            src={img}
          />
          <span
            className="font-normal absolute -bottom-4 scale-0 group-hover:scale-100
              transition duration-300 sm:text-base md:text-lg"
          >
            {language}
          </span>
        </figure>
    </>
  );
}

export default TechStack;
