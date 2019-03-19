import React, { Component } from "react";
import {connect} from "react-redux";
import { Button,Form,Row,Col,Alert} from 'reactstrap';
import Article from './Article';
import NewsCource from "../components/NewsCource.css";


class NewsSources extends Component{

    render(){
        const {generalVal, businessVal, general,business,sports,entertainment} = this.props;   
         console.log("Render called ");
         console.log(this.props);
        return(
             <div className = "App"> 
                   <br></br>                  
               <Row>
               <Col></Col>
                  <Alert color="success">
                  <h4>Please select your news source</h4>
                  <Col>
                  <Row>
                     <Col> General</Col>
                        <Col><label class="switch">
                           <input type="checkbox" onClick ={general} data-toggle="toggle" data-onstyle="success" data-offstyle="danger"/>
                           <span class="slider"></span>
                        </label></Col>
                   </Row>
                     <Row>
                           <Col> Business</Col>
                           <Col><label class="switch">
                              <input type="checkbox" onClick ={business}/>
                              <span class="slider"></span>
                           </label>
                        </Col>
                  </Row>
                     <Row>
                        <Col>  Sports</Col>
                        <Col> <label class="switch">
                           <input type="checkbox" onClick ={sports}/>
                           <span class="slider"></span>
                        </label></Col>
                     </Row>
                     <Row>
                        <Col> Entertainment</Col>
                        <Col>  <label class="switch">
                           <input type="checkbox" onClick ={entertainment}/>
                           <span class="slider"></span>
                        </label> </Col>
                     </Row>
                     
               
                  </Col>
                        
                  </Alert>
                <Col></Col>
                </Row> 
                 </div>
        );
  
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      business: () => dispatch({
       
         type:"business",
         payload : "true"
          }),
       general: () => dispatch({ 
         type:"general",
         payload : "true"
      }),
       sports: () => dispatch({
          type:"sports",
          payload : false
         }),
       entertainment: () => dispatch({
           type: "entertainment",
           payload : false
         })
    };
 };

 const mapStateToProps = (state) => {
    console.log("InMaptoProps" );
    console.log(state);
       return {
        generalVal : state.generalVal,
        businessVal : state.businessVal
    };
    
 };

 export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);
 