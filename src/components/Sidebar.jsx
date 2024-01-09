import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './sidebar.css';
import logo from "../assets/logo.png";
import energy from "../assets/energy.png";
import water from "../assets/water.png";
import waste from "../assets/waste.png"
const Sidebar = () => {
    return (
        <Navbar expand="lg" className="sidebar">
            <div className="sidebar-header">
                <img
                    src={logo}
                    alt="logo Image"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
            </div>
            <div className="sidebar-text">
                <text>DATA IN</text>
            </div>
            <Nav className="flex-column">
                <div className='nav-item'>
                    <div className='energy-logo'>
                        <img
                            src={energy}
                            alt="energy Image"
                        />
                    </div>
                    <NavDropdown title="Energy" className="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Category 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Category 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Category 1</NavDropdown.Item>
                    </NavDropdown>

                </div>
            </Nav>
            <Nav className="water-flex-column">
                <div className='nav-item'>
                    <div className='water-logo'>
                        <img
                            src={water}
                            alt="water Image"
                        />
                    </div>
                    <NavDropdown title="Water and Effluents" className="basic-nav-dropdown">
                    </NavDropdown>

                </div>
            </Nav>
            <div className="sidebar-text">
                <text>ANALYZE</text>
            </div>
            <Nav className="flex-column">
                <div className='nav-item'>
                    <div className='energy-logo'>
                        <img
                            src={energy}
                            alt="energy Image"
                        />
                    </div>
                    <div className="waste-text">
                        <text>Energy</text>
                    </div>

                </div>
            </Nav>
            <div className="water-flex-column">
                <div className='nav-item'>
                    <div className='waste-logo'>
                        <img
                            src={waste}
                            alt="waste Image"
                        />
                    </div>
                    <div className="waste-text">
                        <text>Waste</text>   
                    </div>
                    <div className='beta'>
                    <text>(Beta)</text>
                    </div>

                </div>
            </div>
            <div className='button'>
                <Button>Open Help Center</Button>
            </div>
        </Navbar>
    );
};

export default Sidebar;
