import React from 'react'
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion fixed-top" id="accordionSidebar">

                    
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                                    <div className="sidebar-brand-icon rotate-n-15">
                                        <i className="fas fa-laugh-wink"></i>
                                    </div>
                                    <div className="sidebar-brand-text mx-3">SLUNI Sentiment</div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <Link to="/">

                <li className="nav-item active">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span></a>
                </li>

            </Link>

            <hr className="sidebar-divider"/>


            <div className="sidebar-heading">
                Features
            </div>

            <Link to="/aboutus">
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span> ABOUT US</span>
                            
                    </a>
                
                </li>
            </Link>


            <Link to="/feedback">
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>SUBMIT FEEDBACK</span>
                    </a>
                
                </li>
            </Link>


            
            
            <hr className="sidebar-divider d-none d-md-block"/>


            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </div>
  )
}

export default LeftBar