import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardGroup,CardBody } from 'reactstrap';
import EnrichLive from './../support/img/c2.jpg'
import Award from './../support/img/c1.jpg'
import Market from './../support/img/c3.jpeg'

import {Link} from 'react-router-dom'
const Example = (props) => {
  return (
    <CardGroup>
       <Card>
       <Link to="/">
          <CardImg top width="50%" src={Award} alt="Card image cap" />
       </Link>
        <CardBody>
          <CardTitle><h3>Award-winning Platform</h3></CardTitle>
          <CardText>Ayannah operates several services that allow convenient online and mobile giving, selling and buying on an award-winning technology platform.  </CardText>
        </CardBody>
      </Card>
      <Card>
       <Link to="/">
         <CardImg top width="50%" src={EnrichLive} alt="Card image cap" />
       </Link>
        <CardBody>
        <CardTitle><h3>Enriching Lives</h3></CardTitle>
          <CardText>We enrich the lives of our customers by allowing them to send and share values over the social and mobile web. </CardText>
        </CardBody>

      </Card>
 
      <Card>
        <Link to="/">
          <CardImg top width="50%" src={Market} alt="Card image cap" />
        </Link> 
        <CardBody>
        <CardTitle><h3>Emerging Markets</h3></CardTitle>
          <CardText>Ayannah is a leading provider of affordable and accessible digital financial services to the world's emerging middle class, many of whom are migrants and/or unbanked.</CardText>
        </CardBody>
      </Card>
      
    </CardGroup>
  );
};

export default Example;