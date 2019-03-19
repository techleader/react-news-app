import React, { Component } from "react";
import {connect} from "react-redux";
import { Button,Form,Row,Col} from 'reactstrap';
import Article from './Article';
import NewsCource from "../components/NewsCource.css";


class NewsSources extends Component{

    render(){
        const {generalVal, businessVal, general,business,sports,entertainment} = this.props;   
         console.log("Render called ");
         console.log(this.props);
        return(
             <div className = "App"> 
                                     
               <Row>
               <Col> Displaying General source :  {generalVal}   </Col>
               <Col> Displaying Business source :  {businessVal}   </Col>
                  <Col>
                  <h4>Please select your news source</h4>
                        <label class="switch">
                           <input type="checkbox" onClick ={general} data-toggle="toggle" data-onstyle="success" data-offstyle="danger"/>
                           <span class="slider"></span>
                        </label>  General<br></br>
                        <label class="switch">
                           <input type="checkbox" onClick ={business}/>
                           <span class="slider"></span>
                        </label>  Business<br></br>
                        <label class="switch">
                           <input type="checkbox" onClick ={sports}/>
                           <span class="slider"></span>
                        </label>  Sports<br></br>
                        <label class="switch">
                           <input type="checkbox" onClick ={entertainment}/>
                           <span class="slider"></span>
                        </label>  entertainment<br></br>
                        </Col>
                        
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
 