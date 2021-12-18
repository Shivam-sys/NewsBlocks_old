import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newsbox from "./components/Newsbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = { country: "in", progress: "10" };
  }
  setCountry = (val) => {
    this.setState({ country: val });
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            height={3}
          />
          {/* <Navbar country={this.state.country} setCountry={this.setCountry} /> */}
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newsbox
                  key="General"
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
