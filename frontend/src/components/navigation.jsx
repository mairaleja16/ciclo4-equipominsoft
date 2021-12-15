import React from "react";
import {useState} from "react";
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, NavItem} from "reactstrap";


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
                <NavbarBrand >Proyectos Minsoft</NavbarBrand>
                <NavbarToggler onClick={toggle} >
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar className="row">
                    <Nav className="mr-auto col-md-8" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Usuarios</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/newproduct" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Proyectos</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/products-list" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Inscripciones</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/sales" activeClassName="active" onClick={toggleWhenOpen}>Gestión de Avances</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="col-md-4" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Perfil </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Registrarse </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="#" activeClassName="active" onClick={toggleWhenOpen}>Cerrar Sesión </NavLink>
                        </NavItem>
                    </Nav >
                </Collapse>
            </Navbar>
    );
}



      

