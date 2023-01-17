import React from 'react'
import './nav.css'
import logo from './logo.png'

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">TypeHere</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://theleanprogrammer.com/aam"
                    rel="noreferrer"
                >
                </a>
            </div>
        </div>
    )
}

export default Nav