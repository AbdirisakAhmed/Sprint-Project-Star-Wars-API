import React, {useState, useEffect} from 'react';
import {Col, Row} from 'reactstrap';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,CardHeader
  } from 'reactstrap';
  import axios from 'axios';
  import {Link} from "react-router-dom";
  
function People(props){
    const [peoples, setPeoples] = useState([])

      useEffect(() => {
          axios.get('https://swapi.dev/api/people/')
            .then(response => {
              setPeoples(response.data.results)
            
            
             
             
            })
            .catch((error) => console.log(error)
            );
        
        
      }, []);
    
 
    return (
          
            
          
        <div className="main-div">
            <div className="info">
            
          {peoples.map((onePerson)=> (
            <Link to ={"/people/"}>
            
           
            <Row>
        <Col>
        <Card className="space">
        <CardHeader tag="h1" className="Header">Personal Info</CardHeader>
            <CardBody>
     
        <CardTitle ><span>Person Name:{onePerson.name}</span>  </CardTitle>
        <CardSubtitle> <span>Gender: {onePerson.gender}</span></CardSubtitle>
        <CardText > <span>Birth Date: {onePerson.birth_year}</span></CardText>
        <CardText > <span>Mass:{onePerson.mass}</span> </CardText>
        
        </CardBody>
        </Card>
        </Col>
    </Row>
    </Link>

    ))}
    </div>
     </div>
          
            
  
    )
    
}



export default People;