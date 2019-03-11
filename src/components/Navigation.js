import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand, Button, Row,Col } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
             <Row>           
             <Col sm="1"></Col>
             <Col sm="10">
               <Navbar  color="dark">
                    <NavbarBrand ><h4 className="text-danger   ">News Feeds</h4></NavbarBrand>
                        <Nav >
                            <NavItem>
                                <NavLink to="/"><Button color="info">Home</Button> </NavLink>            
                                <NavLink to="/general"><Button color="info"> General </Button> </NavLink>
                                <NavLink to="/business"><Button color="info">Business </Button> </NavLink>
                                <NavLink to="/sports"><Button color="info">Sports </Button> </NavLink>
                                <NavLink to=""><Button color="info">Entertainment </Button> </NavLink>
                            </NavItem>
                    </Nav>
                </Navbar>
             </Col>
             <Col sm="1"></Col>
        </Row>
        
       </div>
       
    );

};

export default Navigation;