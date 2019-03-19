import React, { Component } from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand, Button, Row,Col } from 'reactstrap';


class Navigation extends  Component{

    render(){
    const {generalVal, businessVal, general,business,sportsVal,entertainmentVal} = this.props;   
    console.log("In Navigation " + generalVal)

    let homeButton = "";
    let businessButton = "";
    let sportsButton = "";
    let entertainmentButton = "";

    if(generalVal == "true"){
        homeButton =  <NavLink to="/general"><Button color="info"> General </Button> </NavLink>
    }
    if(businessVal == "true"){
        businessButton =  <NavLink to="/business"><Button color="info"> Business </Button> </NavLink>
    }
    if(sportsVal == "true"){
        sportsButton =  <NavLink to="/sports"><Button color="info"> Sports </Button> </NavLink>
    }
    if(entertainmentVal == "true"){
        entertainmentButton =  <NavLink to="/entertainment"><Button color="info"> Entertainment </Button> </NavLink>
    }

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
                                {homeButton} 
                                {businessButton} 
                                {sportsButton} 
                                {entertainmentButton}                                
                               
                                
                            </NavItem>
                    </Nav>
                </Navbar>
             </Col>
             <Col sm="1"></Col>
        </Row>
  
       </div>
       
    );
                            }

}

const mapStateToProps = (state) => {
    console.log("InMaptoProps" );
    console.log(state);
       return {
        generalVal : state.generalVal,
        businessVal : state.businessVal,
        sportsVal: state.sportsVal,
        entertainmentVal: state.entertainmentVal
    };
    
 };

export default connect(mapStateToProps, null)(Navigation);
