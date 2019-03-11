import React, { Component } from 'react';
import TopHeadlines from "../components/TopHeadlines.js";
import {  Card, CardImg,CardSubtitle, CardTitle, CardText,CardBody,MDBView, Row,Col, BodyBackgroundColor } from 'reactstrap';
class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: null,
          totalResults: 0,
          article: props.value         
        };
      
    }

  render() {
    return (        
      <div>
         
       <Row>           
         <Col sm="12"md={{ size: 4, offset: 4 }}>
          <Card>
          <CardTitle> {this.state.article.title} </CardTitle>
                <a href={this.state.article.url} className="danger"> 
                  <CardImg top width="100%" src={this.state.article.urlToImage}  alt="Card image cap"  />
                </a>
               <CardBody>
                    
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>{this.state.article.content} </CardText>
               
               </CardBody>
          </Card>
          </Col>
      </Row>

          <br></br>
      </div>
    );
  }

 

}

export default Article;