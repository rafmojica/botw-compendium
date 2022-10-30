import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import sword from "../assets/master-sword.png";
import TabIcon from "../components/TabIcon";

function Home() {
  return (
    <>
      <TabIcon icon={sword} title="Home" />

      <Nav />

      <Landing />
    </>
  );
}

export default Home;
