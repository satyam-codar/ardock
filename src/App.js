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
// import ScrollToTop from "./Components/Extracomp/ScrollToTop";
// import ScrollToTop from "./Components/Extracomp/ScrollToTop";

import { Helmet, HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <HelmetProvider>
      <div className="scrollbar scrollbar-night-fade">
        <Router>
          <Navbar />
          {/* <ScrollToTop> */}
              <Switch>
                {/* <UseEffectScroll> */}
                <Route exact path="/" component={Home} />
                <Route path="/About" component={Aboutus} />
                <Route path="/ourteam" component={Ourteam} />
                <Route path="/Courses" component={Courses} />
                <Route path="/Indipage" component={Indipage} />
                <Route path="/Contactus" component={Contactus} />
                {/* <Route path="/Gallerypage" component={Gallerypage} />
          <Route path="/Contactus" component={Contactus} /> */}
                {/* <Route exact path="/Login" component={Login} /> */}
                {/* <Route path="/Login" component={Login} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Logout" component={Logout} /> */}
                {/* </UseEffectScroll> */}
              </Switch>
            <Footer />
          {/* </ScrollToTop> */}
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
