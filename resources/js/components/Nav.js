import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import "./css/NavBar.css";

const Nav = () => {


    return (
        <div>
            <div className="header">
                <div className="container-fluid">
                    <div className="header-left">
                        <a id="toggle-menu" href="#sidebar" className="logo">
                            <i className="icofont-navigation-menu"></i>
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="page-title-box pull-left">
                            <h3>Admin</h3>
                        </div>
                        <a
                            id="mobile_btn"
                            className="mobile_btn pull-left"
                            href="#sidebar"
                        >
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </a>
                        <ul className="nav navbar-nav navbar-right user-menu pull-right">
                            <div className="dropdown">
                                <a
                                    className="dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="profileLinkDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <i className="far fa-user"></i>
                                    </span>{" "}
                                    Admin
                                </a>

                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="profileLinkDropdown"
                                >
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Setting
                                    </a>
                                    <a className="dropdown-item" href="">
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </ul>

                        <div className="dropdown mobile-user-menu pull-right">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <ul className="dropdown-menu pull-right">
                                <li>
                                    <a href="">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar opened" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/home">
                                    <i className="icofont-dashboard"></i>{" "}
                                    Dashboard
                                </Link>
                            </li>
                            <li className="submenu">
                                <Link to="/add-warehouse">
                                    <i className="icofont-code"></i>

                                    <span> add Warehouse</span>

                                    <span className="menu-arrow">
                                        <i className="icofont-simple-right"></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="submenu">
                                <Link to="/manage-warehouse">
                                    <i className="icofont-code"></i>

                                    <span> Manage Warehouse</span>

                                    <span className="menu-arrow">
                                        <i className="icofont-simple-right"></i>
                                    </span>
                                </Link>
                            </li>

                            <li className="submenu">
                                <Link to="/manage-contact">
                                    <i className="icofont-code"></i>

                                    <span> manage contact</span>

                                    <span className="menu-arrow">
                                        <i className="icofont-simple-right"></i>
                                    </span>
                                </Link>

                                <Link to="/add-contact">
                                    <i className="icofont-code"></i>

                                    <span> Add contact</span>

                                    <span className="menu-arrow">
                                        <i className="icofont-simple-right"></i>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;
