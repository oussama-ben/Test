
  import React from 'react';
  import Exemple2 from './post';
  import { Container, Row, Col} from 'reactstrap';
  const tab=[
    {
      id:'post',
      username:'declaration',
      body: 'facebook',
    },
   
  ]

const Exemple3 = () => {
  return (<Container>
  <Row>
    {tab.map((el,index)=><Exemple2 key={index}  item= {el}/>)}
</Row>
</Container>  )
    }

export default Exemple3;