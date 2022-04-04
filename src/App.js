// import logo from './logo.svg';
import "./App.css";
// import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import ScrollToTop from "./Components/Extracomp/ScrollToTop";
import Whatsapp from "./Components/Extracomp/whatsup/whatsapp";

import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/Components/Extracomp/firebase-auth/contexts/AuthContext";
import PrivateRoute from "../src/Components/Extracomp/firebase-auth/components/PrivateRoute";
import Dashboard from "../src/Components/Extracomp/firebase-auth/components/Dashboard";
import UpdateProfile from "../src/Components/Extracomp/firebase-auth/components/UpdateProfile";
import Signup from "../src/Components/Extracomp/firebase-auth/components/Signup";
import LoginAuth from "../src/Components/Extracomp/firebase-auth/components/Login";
import ForgotPassword from "../src/Components/Extracomp/firebase-auth/components/ForgotPassword";
// import { SmoothProvider } from 'react-smooth-scrolling'

function App() {
  return (
    <HelmetProvider>
      <div className="scrollbar scrollbar-night-fade">
        {/* <SmoothProvider ease={0.3}> */}
        <Router>
          <AuthProvider>
            <Navbar />
            <Whatsapp />
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={Aboutus} />
              <Route path="/ourteam" component={Ourteam} />
              <Route path="/Courses" component={Courses} />
              <Route path="/Indipage" component={Indipage} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/Guitar" component={Guitar} />
              <Route path="/Singing" component={Singing} />

              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-50">
                  {/* < PrivateRoute></PrivateRoute> */}
                  <PrivateRoute exact path="/profile" component={Dashboard} />
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={LoginAuth} />
                  <Route path="/Dashboard" component={Dashboard} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </div>
              </Container>
            </Switch>
            <Footer />
          </AuthProvider>
        </Router>
        {/* </SmoothProvider> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
