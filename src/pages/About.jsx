import React from "react";
import Nav from "../components/Nav";
import TechStack from "../components/TechStack";
import envelope from "../assets/envelope.png";
import TabIcon from "../components/TabIcon";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <TabIcon icon={envelope} title="About" />

      <Nav />
      <section className="container mx-auto mt-4 px-4 md:mt-6 lg:mt-8">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          The Legend of Zelda: Breath of the Wild Compendium
        </h1>
        <p className="mt-4 text-justify sm:text-lg md:text-xl lg:text-2xl">
          I am in <span className="text-[#5c7346] font-bold">no way</span>{" "}
          affiliated with{" "}
          <a
            href="https://www.nintendo.com/"
            target="_blank"
            rel="noreferrer"
            className="transition duration-200 ease-linear hover:text-[#fe0016]"
          >
            Nintendo
          </a>{" "}
          or any other company. I am simply an individual improving my web
          development skills by building websites that fetch data from a public
          API.
        </p>
        <p className="mt-4 sm:text-lg md:text-xl lg:text-2xl">
          The API that I am using is also{" "}
          <span className="text-[#5c7346] font-bold">not mine</span>. It is from
          GitHub user{" "}
          <a
            href="https://github.com/gadhagod/Hyrule-Compendium-API"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            gadhagod
          </a>
          .
        </p>
      </section>
      <section className="container mx-auto mt-4 px-4 md:mt-6 lg:mt-8">
        <h1
          className="font-bold text-center text-xl 
        sm:text-left sm:text-2xl md:text-3xl"
        >
          Tech Stack:
        </h1>
        <div
          className="flex flex-wrap justify-center mx-auto max-w-md gap-y-3
        sm:ml-0"
        >
          <TechStack
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRUGXR_pLaNtbB7Uw9fKjJBWu42VCTQHy-3pAvBp1vC9yiVdH602-e7mRrLDCkKyojKg&usqp=CAU"
            language="HTML"
          />
          <TechStack
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            language="CSS"
          />
          <TechStack
            img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            language="JavaScript"
          />
          <TechStack
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            language="React"
          />
          <TechStack
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            language="Tailwind"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
