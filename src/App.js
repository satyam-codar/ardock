// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Pages/Home';
import Aboutus from './Components/Pages/Aboutus';
import Footer from './Components/Footer/Footer';
import Contactus from './Components/Pages/Contactus';

function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          {/* <UseEffectScroll> */}
          
          <Route exact path="/" component={Home} />
          <Route path="/About" component={Aboutus} />
          <Route path="/Contactus" component={Contactus} />
          {/* <Route path="/Faculty" component={Faculty} />
          <Route path="/Tradepage" component={Tradepage} />
          <Route path="/Resultspage" component={Resultspage} />
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
    );
}

export default App;