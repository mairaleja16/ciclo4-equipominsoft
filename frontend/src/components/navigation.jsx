import React from "react";
import {useState} from "react";
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,NavItem} from "reactstrap";
import { NavLink } from "react-router-dom"


export default function Navigation() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // let width = window.matchMedia('(width: 989px)').matches; //inutil en este caso pero permite un cambio en un tamaño exacto de pantalla devuelve true o false
    var width = window.innerWidth;
    const toggleWhenOpen = () => {
        if (width < 989) { setIsOpen(false) }
        console.log(width)
    };

    return (
            <Navbar color="dark" dark expand="lg" >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <NavbarBrand >MinsoftProjects</NavbarBrand>
                <NavbarToggler onClick={toggle} >
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar className="row">
                    <Nav className="mr-auto col-md-8" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" exact to="/users" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Usuarios</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/projects" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Proyectos</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/inscriptions" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Inscripciones</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/progress" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Avances</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="col-md-4" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="profile" activeClassName="active" onClick={toggleWhenOpen}>Perfil </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="register" activeClassName="active" onClick={toggleWhenOpen}>Registrarse </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Cerrar Sesión </NavLink>
                        </NavItem>
                    </Nav >
                </Collapse>
            </Navbar>
    );
}



      

