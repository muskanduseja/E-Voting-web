import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"
import Mission from "./components/Mission";
import Footer from './components/Footer'
import { Switch, Route } from "react-router-dom";
import Team from "./Team";
import './team.css'
import Extra from "./Extra";
import { Parties } from "./Parties";



const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Mission />
      <Footer />
     
      
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Registered Election Parties</h1>
      </section>
      <Parties />
      <Footer />
     
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Extra />
      <br />
      <Footer />
      
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/parties">
        <Service />
      </Route>

      <Route path="/votecaste">
        <Contact />     
      </Route>
    </Switch>
  );
};

export default App;