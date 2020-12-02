import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tour">Tour</Link>
                    </li>
                    <li>
                        <Link to="/accordion">Accordion</Link>
                    </li>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                    <li>
                        <Link to="/tabs">Tabs</Link>
                    </li>
                    <li>
                        <Link to="/lorem">Lorem</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
