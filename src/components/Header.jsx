import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";
import brandNameLight from "../assets/favicon.png";
import brandNameDark from "../assets/favicon_2.png";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className='site-header'>
            <div className='container'>
                <div className='header-bar'>
                    {/* Left Header */}
                    <div className='brand header-left'>
                        <img src={logo} alt="App logo" className='brand-logo' />
                        <img src={brandNameLight} alt="FlowDAY" className='brand-name brand-name-light' />
                        <img src={brandNameDark} alt="FlowDAY" className='brand-name brand-name-dark' />
                    </div>
                    {/* Right Header */}
                    <div className='header-right'>
                        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </div>
                </div>
                <nav className='nav-placeholder'>
                    <NavLink className="nav-link" to="/" end>Today</NavLink>
                    <NavLink className="nav-link" to="/tasks">All Tasks</NavLink>
                    <NavLink className="nav-link" to="/completed">Completed</NavLink>
                    <NavLink className="nav-link" to="/settings">Settings</NavLink>
                </nav>
            </div>
        </header>
    );
}