import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Countrydrop from "./Countrydrop";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">News Blocks</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/Business" className="mr-5 hover:text-white">
                Business
              </Link>
              <Link to="/Entertainment" className="mr-5 hover:text-white">
                Entertainment
              </Link>
              <Link to="/General" className="mr-5 hover:text-white">
                General
              </Link>
              <Link to="/Health" className="mr-5 hover:text-white">
                Health
              </Link>
              <Link to="/Sports" className="mr-5 hover:text-white">
                Sports
              </Link>
              <Link to="/Technology" className="mr-5 hover:text-white">
                Technology
              </Link>
            </nav>
            {/* <Countrydrop
              country={this.props.country}
              setCountry={this.props.setCountry}
            /> */}
            {/* Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
          </div>
        </header>
      </>
    );
  }
}
