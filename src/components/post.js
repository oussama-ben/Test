import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
 
 
  const Exemple2 = ({item}) => {
    return (<Card className="post1" style={{backgroundColor:item.color}}>
          
          <CardBody>
         
            <CardTitle>{item.titre1}</CardTitle>
            <h2 className="desc1">{item.titre}</h2>
          </CardBody>
          
          <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto </p>
          <Button>commentez</Button>
        </Card>
      
  
  
    )
  }
  export default Exemple2