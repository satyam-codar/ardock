import React from "react";
import Contact from "./home_comp/Contact";
import Homeaccor from "./home_comp/Homeaccor";
import CustomizedAccordions from "./home_comp/Homeaccordian";
// import Homeaccordian from "./home_comp/Homeaccordian";
import Homecourse from "./home_comp/Homecourse";
import Homeplan from "./home_comp/Homeplan";
import Homeseccomp from "./home_comp/Homeseccomp";
import Homesmalldes from "./home_comp/Homesmalldes";
import Home_first from "./home_comp/Home_first";
// import Home_second from "./home_comp/Home_second";
// import Parentscorner from "./home_comp/Parentscorner";
import Whyus from "./home_comp/Whyus";

import "../Scrollkey/Scrollkey.css"

function Home() {
  
  return (
    <>
      <Home_first/>
      <Homeseccomp/>
      <Whyus/>
      <Homecourse/>
      <Homesmalldes/>
      <Homeplan/>
      <Homeaccor/>
      {/* <CustomizedAccordions/> */}
      {/* <Homeaccordian/> */}
      {/* <Parentscorner/> */}
      <Contact/>
    </>
  );
}

export default Home;
