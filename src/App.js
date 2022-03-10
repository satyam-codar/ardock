// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Pages/Home';
import Aboutus from './Components/Pages/Aboutus';
import Footer from './Components/Footer/Footer';
import Contactus from './Components/Pages/Contactus';


import "./Components/Scrollkey/Scrollkey.css"
import Ourteam from './Components/Pages/Ourteam';
import Courses from './Components/Pages/Courses';

function App() {
    return (
      <div className="scrollbar scrollbar-night-fade">
      <Router>
        <Navbar />
        <Switch>
          {/* <UseEffectScroll> */}
          <Route exact path="/" component={Home} />
          <Route path="/About" component={Aboutus} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/ourteam" component={Ourteam} />
          <Route path="/Courses" component={Courses} />
          {/* <Route path="/Resultspage" component={Resultspage} />
          <Route path="/Gallerypage" component={Gallerypage} />
          <Route path="/Contactus" component={Contactus} /> */}
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route path="/Login" component={Login} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Logout" component={Logout} /> */}
          {/* </UseEffectScroll> */}
        </Switch>
        <Footer/>
        {/* <Footer /> */}
        {/* <Productcomp/> */}
      </Router>
      </div>
    );
}

export default App;