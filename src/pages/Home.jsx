import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import sword from "../assets/master-sword.png";
import TabIcon from "../components/TabIcon";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TabIcon icon={sword} title="Home" />

      <Nav />

      <Landing />

      <Footer />
    </>
  );
}

export default Home;
