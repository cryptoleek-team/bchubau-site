import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages';
import Event from "./pages/event"
import Token from './pages/token';
import ScrollToTop from './components/ScrollToTop';
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact component={() => <Home />}></Route>
      <Route path="/allEvents" exact component={() => <Event />}></Route>
      <Route path="/token" exact component={() => <Token />}></Route>
    </Router >
  );
}

export default App;
