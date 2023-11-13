import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../assets/TIN.png'

export default function Nav() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <>
            {/* DESKTOP NAVIGATION BAR */}
            <nav className='desktop-nav'>
                <article className='nav-logos-main'>
                    <Link to="/">
                        <img src={logo} alt='logo' />
                    </Link>
                </article>
                <ul className='navigation-links'>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/experience">Experience</CustomLink>
                    <CustomLink to="/portfolio">Portfolio</CustomLink>
                    <CustomLink to="/contacts">Contacts</CustomLink>
                </ul>
            </nav>

            {/* MOBILE NAVIGATION BAR */}
            <nav className='mobile-nav'>
                <Link to="/">
                    <img src={logo} alt='logo' onClick={closeMenu}/>
                </Link>
                <div className='mobile-menu'>
                    <div className={isOpen ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={isOpen ? 'menu-links open' : 'menu-links'}>
                        <ul className='mobile-navigation-links' onClick={toggleMenu}>
                            <CustomLink to="/about">About</CustomLink>
                            <CustomLink to="/experience">Experience</CustomLink>
                            <CustomLink to="/portfolio">Portfolio</CustomLink>
                            <CustomLink to="/contacts">Contacts</CustomLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

function CustomLink({to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

