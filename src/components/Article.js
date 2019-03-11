import React, { Component } from 'react';
import TopHeadlines from "../components/TopHeadlines.js";
import { Alert,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Jumbotron } from 'reactstrap';
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
       
      <TabPane tabId="2" >
            <Row color="dark">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card body>
                  <CardTitle> {this.state.article.title} </CardTitle>
                  
                   
                    <h5 ><a href={this.state.article.url} className="danger"> <img src={this.state.article.urlToImage} width="500" height="333"></img></a> </h5>
                </Card>
              </Col>
            </Row>
          </TabPane>
          
          <br></br>
      </div>
    );
  }

 

}

export default Article;