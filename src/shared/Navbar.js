import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar uppercase font-bold bg-green-600 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <NavLink to="/todo">Todo</NavLink></li>
                        <li> <NavLink to="/completeTask">Completed task</NavLink></li>
                        <li> <NavLink to="/calender">Calender</NavLink></li>

                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-2xl uppercase">Task Manager</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li> <NavLink to="/todo">Todo</NavLink></li>
                    <li> <NavLink to="/completeTask">Completed task</NavLink></li>
                    <li> <NavLink to="/calender">Calender</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="/" className="btn">Get Started</NavLink>
            </div>
        </div>





    );
};

export default Navbar;