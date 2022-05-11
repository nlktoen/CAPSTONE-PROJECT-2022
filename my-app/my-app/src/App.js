import "./style.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import stm from "./styles.module.css";
import background from "./img/img1.jpg";
import logo from "./img/logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App(){
  return(
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
      <img src = {logo} className={stm.obc}/>
        <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/About">
              <li>ABOUT</li>
            </Link>
            <Link to="/Services">
              <li>SERVICES</li>
            </Link>
            <Link to="/Contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </nav>

        <div  className="p-5 text-center bg-image"
        style={{backgroundImage:`url(${background})`,
        height: "100vh", width: "100%", backgroundPosition: "center",
        backgroundSize:"cover"}}>
        <div className={stm.content}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route path="/Contact" component={Contact}></Route>
          </Switch>
        </div>
        </div>
    </Router>
  )
}

/*
export default function App() {
  return (
    <Router>
      <div
        className="img-fluid"
        style={{ backgroundImage: `url(${background})`}}
      >
        
        <img src = {logo} className={stm.obc}/>
        <nav>
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/About">
              <li>ABOUT</li>
            </Link>
            <Link to="/Services">
              <li>SERVICES</li>
            </Link>
            <Link to="/Contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </nav>
        <div className={stm.content}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route path="/Contact" component={Contact}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
*/
