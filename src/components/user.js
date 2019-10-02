import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
 
 
  const Exemple1 = ({item}) => {
    return (<Card className="user1" style={{backgroundColor:item.color}}>
          
          <CardBody>
         
            <CardTitle>{item.titre1}</CardTitle>
            <h2 className="desc1">{item.titre}</h2>
          </CardBody>
          <img className="image1" src={item.img}  alt="image1" />
          <p>Talented seinor manager of user-experience design with the proven know-how to combine creative and usability viewpoints </p>
          <Button>following </Button>
        </Card>
      
  
  
    )
  }
  export default Exemple1