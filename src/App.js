import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newsbox from "./components/Newsbox";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = { country: "in" };
  }
  setCountry = () => {
    this.setState({ country: "us" });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar country={this.state.country} setCountry={this.setCountry} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newsbox
                  key="General"
                  country={this.state.country}
                  pagesize={15}
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <Newsbox
                  key="General"
                  country={this.state.country}
                  pagesize={15}
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <Newsbox
                  key="Science"
                  country={this.state.country}
                  pagesize={15}
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <Newsbox
                  key="Business"
                  country={this.state.country}
                  pagesize={15}
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <Newsbox
                  key="Entertainment"
                  country={this.state.country}
                  pagesize={15}
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <Newsbox
                  key="Health"
                  country={this.state.country}
                  pagesize={15}
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <Newsbox
                  key="Sports"
                  country={this.state.country}
                  pagesize={15}
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <Newsbox
                  key="Technology"
                  country={this.state.country}
                  pagesize={15}
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
