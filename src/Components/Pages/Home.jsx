import React from "react";
import Contact from "./home_comp/Contact";
import Homeaccor from "./home_comp/Homeaccor";
// import CustomizedAccordions from "./home_comp/Homeaccordian";
// import Homeaccordian from "./home_comp/Homeaccordian";
import Homecourse from "./home_comp/Homecourse";
import Homeplan from "./home_comp/Homeplan";
import Homeseccomp from "./home_comp/Homeseccomp";
import Homesmalldes from "./home_comp/Homesmalldes";
import Home_first from "./home_comp/Home_first";
import Whyus from "./home_comp/Whyus";

import "../Scrollkey/Scrollkey.css"
import Subscribe from "./Aboutuscomp/Subscribe";

// import { SmoothProvider } from 'react-smooth-scrolling'
// import { UseEffectScroll } from 'react-use-smooth-scroll'
// import 'react-use-smooth-scroll/dist/index.css'


function Home() {

  return (
    <>
    {/* <SmoothProvider skew={true} ease={0.1}> */ }
    {/* <UseEffectScroll > */}
        <Home_first />
        <Homeseccomp />
        <Whyus />
        <Homecourse />
        <Homesmalldes />
        <Homeplan />
        <Homeaccor />
        <Subscribe/>
        <Contact />
      {/* </UseEffectScroll > */}
    {/* </SmoothProvider> */ }
    </>
  );
}

export default Home;
