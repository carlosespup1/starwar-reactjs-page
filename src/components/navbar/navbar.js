import { Navbar, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import AppContext from '../../context/state/appContext';

const Navigation = () => {
    const {  }  = useContext(AppContext);

    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#">Star War</Navbar.Brand>
        <NavDropdown className="ml-auto" title={"Favoritos"} id="basic-nav-dropdown">
        
        </NavDropdown>
    </Navbar>
    )
}

export default Navigation;