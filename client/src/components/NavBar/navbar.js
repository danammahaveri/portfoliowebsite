import React, { useState } from 'react';
import './navbar.css';
import logo from '../../react-portfolio-assets/assets/logo.png';
import contactImg from '../../react-portfolio-assets/assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../react-portfolio-assets/assets/menu.png';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                 <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                 <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">About</Link>
                 <Link activeclass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">portfolio</Link>
                 <Link activeclass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
             }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact us</button>

                <img src={menu} alt="Menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                 <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                 <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                 <Link activeclass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>portfolio</Link>
                 <Link activeclass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                 <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>contact</Link>
            </div>  
        </nav>
    )
}


export default Navbar;