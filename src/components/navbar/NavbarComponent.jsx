import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"
import home from "../../assets/home.png"
import profilepic from "../../assets/profilepic.svg"
import dropdown from "../../assets/dropdown.svg"
import bell from "../../assets/bell.svg";


const NavbarComponent = () => {
    return (
        <div className='right-navbar'>
            <div className='home-icon'>
                <img
                    src={home}
                    alt="home image" />
                <text>Category-1</text>
            </div>
            <div className='account-details'>
                <div className='proficepic-details'>
                    <img
                        src={profilepic}
                        alt="profile image" />
                </div>
                <div className='dropdown-details'>
                    <img
                        src={dropdown}
                        alt="dropdown image" />
                </div>
                <div className='bell-details'>
                    <img
                        src={bell}
                        alt="bell image" />
                </div>

            </div>
        </div>
    )
}

export default NavbarComponent