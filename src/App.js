import "./App.css";
// import Footer from "./components/Home/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
// import Footer2 from "./components/Home/Footer2/Footer2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/Login/PrivateRoute";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
