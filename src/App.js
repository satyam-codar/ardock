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
import ScrollToTop from "./Components/Extracomp/ScrollToTop";
// import ScrollToTop from "./Components/Extracomp/ScrollToTop";

// Auth
import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/Components/firebase-auth/contexts/AuthContext";
import PrivateRoute from "../src/Components/firebase-auth/components/PrivateRoute";
import Signup from "../src/Components/firebase-auth/components/Signup";
import Dashboard from "../src/Components/firebase-auth/components/Dashboard";
import LoginAuth from "../src/Components/firebase-auth/components/Login";
import ForgotPassword from "../src/Components/firebase-auth/components/ForgotPassword";
import UpdateProfile from "../src/Components/firebase-auth/components/UpdateProfile";

function App() {
  return (
    <div className="scrollbar scrollbar-night-fade">
      <Router>
        <AuthProvider>
          <Navbar />
          <ScrollToTop>
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

              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  {/* < PrivateRoute></PrivateRoute> */}
                  <PrivateRoute exact path="/admin" component={Dashboard} />
                  <PrivateRoute
                    path="/admin/update-profile"
                    component={UpdateProfile}
                  />
                  <Route path="/admin/signup" component={Signup} />
                  <Route path="/admin/login" component={LoginAuth} />
                  <Route
                    path="/admin/forgot-password"
                    component={ForgotPassword}
                  />
                </div>
              </Container>
            </Switch>
            <Footer />
          </ScrollToTop>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
