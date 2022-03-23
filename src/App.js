// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Footer from "./Components/Footer/Footer";
import Contactus from "./Components/Pages/Contactus";

import "./Components/Scrollkey/Scrollkey.css";
import Ourteam from "./Components/Pages/Ourteam";
import Courses from "./Components/Pages/Courses";
import Indipage from "./Components/Pages/Indipage";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Guitar from "./Components/Pages/Invidual_course_pages/Guitar";
import Singing from "./Components/Pages/Invidual_course_pages/Singing";

// import { SmoothProvider } from 'react-smooth-scrolling'



function App() {
  return (
    <HelmetProvider>
      <div className="scrollbar scrollbar-night-fade">
      {/* <SmoothProvider ease={0.3}> */}
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={Aboutus} />
            <Route path="/ourteam" component={Ourteam} />
            <Route path="/Courses" component={Courses} />
            <Route path="/Indipage" component={Indipage} />
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Guitar" component={Guitar} />
            <Route path="/Singing" component={Singing} />
          </Switch>
          <Footer />
        </Router>
      {/* </SmoothProvider> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
