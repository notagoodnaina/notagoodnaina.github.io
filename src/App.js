import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home/Home.jsx";
import Events from "./Events";
import Airbots from "./Airbots/Airbots";
import IndependentProject from './Airbots/IndependentProject';
import Institute from './Airbots/Institute';
import Gallery from './Airbots/Gallery';
import Resources from "./Resources";
import Team from "./Team";
import Footer from "./Footer";
import {Route, Switch, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/events"  component={Events} />
      <Route exact path="/airbots"  component={Airbots} />
      <Route exact path="/airbots/independentproject"  component={IndependentProject} />
      <Route exact path="/airbots/institute"  component={Institute} />
      <Route exact path="/airbots/gallery"  component={Gallery} />
      <Route exact path="/resources"  component={Resources} />
      <Route exact path="/team"  component={Team} />

      <Redirect to="/" />
      <Home />
    </Switch>
    <Footer/>

    </>
  );
};

export default App;
