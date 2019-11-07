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
          <CardTitle><h3>Platform pemenang penghargaan</h3></CardTitle>
          <CardText> 
Ayannah mengoperasikan beberapa layanan yang memungkinkan pemberian, penjualan, dan pembelian online dan seluler yang nyaman dan mudah. </CardText>
        </CardBody>
      </Card>
      <Card>
       <Link to="/">
         <CardImg top width="50%" src={EnrichLive} alt="Card image cap" />
       </Link>
        <CardBody>
        <CardTitle><h3>Memperkaya Hidup</h3></CardTitle>
          <CardText> 
Kami memperkaya kehidupan pelanggan kami dengan memungkinkan mereka mengirim dan berbagi nilai melalui web sosial dan seluler.</CardText>
        </CardBody>

      </Card>
 
      <Card>
        <Link to="/">
          <CardImg top width="50%" src={Market} alt="Card image cap" />
        </Link> 
        <CardBody>
        <CardTitle><h3>Pasar negara berkembang</h3></CardTitle>
          <CardText>
Ayannah adalah penyedia terkemuka layanan keuangan digital yang terjangkau dan dapat diakses oleh kelas menengah yang muncul di dunia, banyak dari mereka adalah migran dan / atau tidak memiliki rekening bank.</CardText>
        </CardBody>
      </Card>
      
    </CardGroup>
  );
};

export default Example;