import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';
import logo from './../../assets/logo.png'
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expanded={expanded}
            expand={false}
            className={`elegant-navbar ${expanded ? 'expanded' : ''}`}
            onToggle={() => setExpanded(!expanded)}
            onClick={() => setExpanded(!expanded)}
        >
            <Navbar.Brand href="#home" >
                <img
                    src={logo} // Usa la imagen que importaste
                    alt="Logo"
                    className={`navbar-logo ${expanded ? 'hidden-logo' : ''}`} // Añade una clase para estilos adicionales
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
                <div className={`hamburger ${expanded ? 'is-active' : ''}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                <Nav className="nav-links">

                    <Link to="/" >
                        <Navbar.Brand className="nav-item" style={outline = none}>Inicio</Navbar.Brand>
                    </Link>

                    <Link to="/acerca-de">
                        <Navbar.Brand className="nav-item">Acerca de</Navbar.Brand>
                    </Link>

                    <Link to="/contacto">
                        <Navbar.Brand className="nav-item">Contacto</Navbar.Brand>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Navigation