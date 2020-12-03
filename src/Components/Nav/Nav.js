import React,{ useState} from 'react'
import { FaBars } from "react-icons/fa"
import {links, social} from './items'
import logo from './nav_logo.png'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {

    const [showLink, setShowLink] = useState(false);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" style={{width:60}} />
                    <button className="nav-toggle" onClick={()=>setShowLink(!showLink)}>
                        <FaBars />
                    </button>
                </div>
                <div className={`${showLink ? 'links-container show-container' : 'links-container'}`}>
                    <ul className="links">
                        {links.map((item) => {
                            const { id, url, text } = item;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((item) => {
                        const { id, url, icon } = item;
                        return (
                            <li key={id}>
                                <Link to={url}>{icon}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
