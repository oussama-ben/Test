
  import React from 'react';
  import Exemple1 from './user';
  import { Container, Row, Col} from 'reactstrap';
  const tab=[
    {
      name:'David Connor',
      username:'david',
      img:require('./image1.jpg'),
      show:true,
      color:'#00b39b'
    },
   
  ]

const Exemple = () => {
  return (<Container>
  <Row>
    {tab.map((el,index)=><Exemple1 key={index}  item= {el}/>)}
</Row>
</Container>  )
    }

export default Exemple;