import React from "react";
import Contact from "./home_comp/Contact";
import Home_first from "./home_comp/Home_first";
import Home_second from "./home_comp/Home_second";
import Parentscorner from "./home_comp/Parentscorner";
import Whyus from "./home_comp/Whyus";

function Home() {
  return (
    <>
      <Home_first/>
      <Home_second/>
      <Whyus/>
      <Parentscorner/>
      <Contact/>
    </>
  );
}

export default Home;
