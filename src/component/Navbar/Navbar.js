import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/istockphoto-1296601764-170667a.jpg'
import Bchart from '../Bchart/Bchart';





import Graph from '../Graph/Graph';

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-sm-4 sidebar1">
                    <div className="logo">
                        <img src={image} alt="" className='img' />
                    </div>
                    <br />
                    <div className="left-navigation">
                        <ul className="list">

                            <li>
                                <h2>DashBoard</h2>

                                <Link to="" className="nav-link text-white"><i className="fas fa-columns"></i> Dashboard</Link>

                                <Link to="" className="nav-link text-white"><i className="fas fa-bars"></i> Sidebar type</Link>

                                <Link to="" className="nav-link text-white"><i className="fab fa-accusoft"></i> Page layout</Link>
                                <Link to="" className="nav-link text-white"><i className="fas fa-inbox"></i> Inbox</Link>
                                <Link to="" className="nav-link text-white"><i className="fas fa-ticket-alt"></i> Ticket</Link>
                                <Link to="" className="nav-link text-white"><i className="fas fa-plus"></i> extra</Link>
                                <Link to="" className="nav-link text-white"><i className="fab fa-elementor"></i> UI Element</Link>
                                <Link to="" className="nav-link text-white"><i className="far fa-credit-card"></i> card</Link>
                                <Link to="" className="nav-link text-white"><i className="far fa-credit-card"></i> Components</Link>
                                <Link to="" className="nav-link text-white"><i className="fas fa-sliders-h"></i> Widgets</Link>

                            </li>

                        </ul>

                    </div>
                </div>
                <div className="col-md-10 col-sm-8 main-content ">

                    <div className="container bg-dark text-white">
                        <div className="row justify-content-center align-items-center ">
                            <div className="col-md-6 ">
                                <h1 className="h1 font-weight-bold text-uppercase">Welcome <br />Pablo Nicolas
                                </h1>

                                <div className=''>
                                    <p className='bg-white w-25 rounded-pill text-dark'>NY,USA</p>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <img className="w-100" src={image} alt="" />

                            </div>

                        </div>
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className=' justify-content-center align-item-center col-md-6 col-sm-12'>
                            <h2 className='bold '>My Skills</h2>
                            <Graph />

                        </div>
                        <div className='justify-content-center align-item-center col-md-6 col-sm-12'>
                            <Bchart />
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Navbar; 