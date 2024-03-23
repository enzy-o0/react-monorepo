import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">Foxes and Fossils</h2>
        <p>
          <a href="http://foxesandfossils.com">http://foxesandfossils.com</a>
        </p>
        <div className="row">
          <div className="col-12">
            {/* <Link className="btn btn-success menu" to={"/"}>
              Home
            </Link> */}
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to={"/home"}
            >
              Home
            </NavLink>
            {/* <Link className="btn btn-success menu" to={"/about"}>
              About
            </Link> */}
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to={"/about"}
            >
              About
            </NavLink>
            {/* <Link className="btn btn-success menu" to={"/members"}>
              Members
            </Link> */}
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to={"/members"}
            >
              Members
            </NavLink>
            {/* <Link className="btn btn-success menu" to={"/songs"}>
              Songs 
                </Link>*/}
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to={"/songs"}
            >
              Songs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
