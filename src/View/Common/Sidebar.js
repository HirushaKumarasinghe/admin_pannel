import React, { Component } from "react";

import "./Sidebar.css";

// controllers
import Config from "../../Controller/Config.js";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      activeSublist: null
    };
  }

  setSublist(subList) {
    this.setState({
      activeSublist: subList
    });
  }

  render() {
    return (
      <div className="Sidebar_main">
        <i className="fas fa-users-cog sb_icon"></i>
        <ul className="sb_linkList">
          <li className="sb_linkItem" onClick={() => this.setSublist("client")}>
            <Link to="/client">Client</Link>
          </li>

          <li className="sb_linkItem" onClick={() => this.setSublist("other1")}>
            <Link to="/Other1">Other 1</Link>
          </li>
          <li
            className={
              this.state.activeSublist === "other1"
                ? "sb_sublistContainer sb_sublistShow"
                : "sb_sublistContainer sb_sublistHide"
            }
          >
            <ul className="sb_sublist">
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
              <li>
                <Link to="/users/list">list Users</Link>
              </li>
              <li>
                <Link to="/users/delete">Delete User</Link>
              </li>
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
            </ul>
          </li>
          <li className="sb_linkItem" onClick={() => this.setSublist("other2")}>
            <Link to="/Other2">Other 2</Link>
          </li>
          <li
            className={
              this.state.activeSublist === "other2"
                ? "sb_sublistContainer sb_sublistShow"
                : "sb_sublistContainer sb_sublistHide"
            }
          >
            <ul className="sb_sublist">
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
              <li>
                <Link to="/users/list">list Users</Link>
              </li>
              <li>
                <Link to="/users/delete">Delete User</Link>
              </li>
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
            </ul>
          </li>
          <li className="sb_linkItem" onClick={() => this.setSublist("other3")}>
            <Link to="/Other3">Other 3</Link>
          </li>
          <li
            className={
              this.state.activeSublist === "other3"
                ? "sb_sublistContainer sb_sublistShow"
                : "sb_sublistContainer sb_sublistHide"
            }
          >
            <ul className="sb_sublist">
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
              <li>
                <Link to="/users/list">list Users</Link>
              </li>
              <li>
                <Link to="/users/delete">Delete User</Link>
              </li>
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
            </ul>
          </li>
          <li className="sb_linkItem" onClick={() => this.setSublist("other4")}>
            <Link to="/Other4">Other 4</Link>
          </li>
          <li
            className={
              this.state.activeSublist === "other4"
                ? "sb_sublistContainer sb_sublistShow"
                : "sb_sublistContainer sb_sublistHide"
            }
          >
            <ul className="sb_sublist">
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
              <li>
                <Link to="/users/list">list Users</Link>
              </li>
              <li>
                <Link to="/users/delete">Delete User</Link>
              </li>
              <li>
                <Link to="/users/add">Add User</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
