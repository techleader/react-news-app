import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand, Button,ButtonGroup,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem   } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
            <Navbar  color="dark">
            <NavbarBrand ><h2 className="text-info">News Feeds</h2></NavbarBrand>
                    <Nav  navbar >
                    <NavItem>
                            <NavLink to="/"><Button color="info">Home</Button> </NavLink>            
                            <NavLink to="/general"><Button color="info"> General </Button> </NavLink>
                            <NavLink to="/business"><Button color="info">Business </Button> </NavLink>
                            <NavLink to="/sports"><Button color="info">Sports </Button> </NavLink>
                            <NavLink to=""><Button color="info">Entertainment </Button> </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

          

       </div>
       
    );

};

export default Navigation;