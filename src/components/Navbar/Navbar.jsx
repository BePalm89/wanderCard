import './Navbar.css';

import {NavLink} from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useState } from "react";

import Logo from "../Logo/Logo.jsx";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            title: "Travel Roulette",
            href: "/"
        },
        {
            title: "Favourites",
            href: "/favourites"
        },
        {
            title: "Visited",
            href: "/visited"
        },


    ]
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>
                            <NavLink to={link.href} className={({isActive}) => isActive ? "active" : ""}
                            > {link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                <Menu/>
            </div>
            <div className={`overlay ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>

                <div className="close-icon">
                    <X color="var(--text-color)" onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <ul>
                    {links.map((link) => (
                        <li key={link.title} onClick={() => setIsOpen(false)}>
                            <NavLink to={link.href} className={({isActive}) => isActive ? "active-mobile" : ""}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
};

export default Navbar;
