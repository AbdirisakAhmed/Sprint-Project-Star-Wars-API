import React, {useState, useEffect} from 'react';
import {Col, Row} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardHeader
  } from 'reactstrap';
  import axios from 'axios';
import {Link} from "react-router-dom";

function Films(props){
    
    const [myFilms, setMyfilms] = useState([])
    //Here is the API of Films
   
    useEffect(() => {
     
        axios.get('https://swapi.dev/api/films/')
          .then(res => {
            setMyfilms(res.data.results)   
          })
          .catch((error) => console.log(error)
          );
      
      
    }, []);

       return(
        <div className="info-div" >
            <div className="info">
              {myFilms.map((oneFilm)=> (
               <Link to = "/Films">
                  
        <Row>
    <Col>
    <Card className="space">
    <CardHeader tag="h1" className="Header">Film Info </CardHeader>
        <CardBody>
 
    <CardText ><span>Title : {oneFilm.title}</span> </CardText>
    <CardSubtitle className="middle"> <span>Director: {oneFilm.director}</span></CardSubtitle>
    <CardSubtitle className="middle"> <span>Producer: {oneFilm.producer}</span></CardSubtitle>
    
 
    
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



export default Films;