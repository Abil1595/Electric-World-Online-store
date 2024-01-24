import React,{useState} from 'react';
import {Row,Col,UncontrolledCarousel,CardTitle,Card,CardGroup,CardImg,CardBody,CardText,CardSubtitle,Button} from 'reactstrap';
import bg from './mcb.jpg';
import bg1 from './isolators.jpg';
import bg2 from './contractor.jpg';
import bg3 from './01.webp';
import bg4 from './02.webp';
import bg5 from './03.webp';
import bg6 from './04.webp';
import bg7 from './11.webp';
import bg8 from './06.webp';
import bg9 from './3.jpg';
import bg10 from './GST.jpeg';
import bg11 from './GST1.jpg';
import bg12 from './31.webp';
import bg13 from './32.webp';
import bg14 from './33.webp';
import bg15 from './34.webp';
import bg16 from './35.webp';
import bg17 from './36.webp';
import bg18 from './a.webp';
import bg19 from './b.webp';
import bg21 from './d.webp';
import bg22 from './e.webp';
import bg23 from './g.webp';
import bg24 from './h.webp';


function Home()

{
    const items=[
        {
        	src:bg,
        	altText:'SLIDE1',
        	caption:'Miniature Citcuit Breaker',
        	header:'MCB',
        	key:'1'
        },
         {
        	src:bg1,
        	altText:'SLIDE2',
        	caption:'ISOLATORS',
        	header:'ISOLATORS',
        	key:'2'
        },
         {
        	src:bg2,
        	altText:'SLIDE3',
        	caption:'CONTRACTOR',
        	header:'Contractor',
        	key:'3'
        }
    	];
	return(
  <div>
  <UncontrolledCarousel items={items}/><br/>
  <Card body inverse color="primary">
  <img src={bg9}  class="abi1"/>
   </Card><br/>
   <CardGroup>
   <Card body inverse color="primary">
  <CardTitle tag="h5">BRANDS OF CATEGORY</CardTitle>
  </Card>
  <Card body inverse color="info">
  <CardImg top width="100%" src={bg18} alt="card image cap"/>
  </Card>
  <Card body inverse color="secondary">
  <CardImg top width="100%" src={bg19} alt="card image cap"/>
  </Card>
  <Card body inverse color="success">
  <CardImg top width="100%" src={bg21} alt="card image cap"/>
  </Card>
  <Card body inverse color="dark">
  <CardImg top width="100%" src={bg22} alt="card image cap"/>
  </Card>
  <Card body inverse color="warning">
  <CardImg top width="100%" src={bg23} alt="card image cap"/>
  </Card>
  <Card body inverse color="secondary">
  <CardImg top width="100%" src={bg24} alt="card image cap"/>
  </Card>
  </CardGroup><br/>
  <Row>
  <Col sm={2}>
  <div class="abi2">
  <Card body inverse color="success">

  <a href="Services"><img  src={bg3} class="abi2"/></a>
   <CardBody>
   <center><CardTitle tag="h4">SWITCHES</CardTitle></center>
   </CardBody>
  </Card>
  </div>
  </Col>
  <Col sm={2}>
  <div class="abi2">
  <Card body inverse color="success">
  <CardImg top width="80%" src={bg4} alt="card image cap"/>
   <CardBody>
   <center><CardTitle tag="h5">SOCKETS</CardTitle></center>
   </CardBody>
  </Card>
   </div>
   </Col>
   <Col sm={2}>
  <div class="abi2">
  <Card body inverse color="success">
  <CardImg top width="80%" src={bg5} alt="card image cap"/>
   <CardBody>
   <center><CardTitle tag="h4">BELLPUSH</CardTitle></center>
   </CardBody>
  </Card>
   </div>
   </Col>
  <Col sm={2}>
  <div class="abi3">
  <Card body inverse color="success">
  <CardImg top width="80%" src={bg6} alt="card image cap"/>
   <CardBody>
   <center><CardTitle tag="h6">REGULATORS</CardTitle></center>
   </CardBody>
  </Card>
   </div>
   </Col>
  <Col sm={2}>
  <div class="abi2">
  <Card body inverse color="success">
  <CardImg top width="100%" src={bg7} alt="card image cap"/>
   <CardBody>
   <center><CardTitle tag="h6">RELAYS</CardTitle></center>
   </CardBody>
  </Card>
   </div>
   </Col>
  <Col sm={2}>
  <div class="abi4">
  <Card body inverse color="success">
  <CardImg top width="80%" src={bg8} alt="card image cap"/>
   <CardBody>
   <center><CardTitle tag="h6">BOXES</CardTitle></center>
   </CardBody>
  </Card>
   </div>
   </Col>
  </Row><br/>
<CardGroup>
  <Card body inverse color="primary">
  <CardImg top width="100%" src={bg10} alt="card image cap"/>
  </Card>
  <Card body inverse color="secondary">
  <CardImg top width="100%" src={bg11} alt="card image cap"/>
  </Card>
  </CardGroup><br/>
    <Row>
  <Col sm="2">
   <Card body outline color="primary">
  <img src={bg12} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">56 Years Industry
Excellence</CardSubtitle>
  <CardText>Pioneering innovation and exceptional service</CardText>
  
   </Card>
   </Col>
   <Col sm="2">
<Card body outline color="success">
 
  <img src={bg13} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">Nationwide Express Delivery</CardSubtitle>
  <CardText>Swift and  shipping to your doorstep</CardText>
  
   </Card>
   </Col>
   <Col sm="2">
   <Card body outline color="secondary">
  
  <img src={bg14} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">Secure Payment Solutions</CardSubtitle>
  <CardText>Partnered with India's top payment providers
</CardText>
  
   </Card>
   </Col>
   <Col sm="2">
   <Card body outline color="secondary">
  
  <img src={bg15} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">Best Market Prices</CardSubtitle>
  <CardText>Competitive rates without compromising quality</CardText>
  
   </Card>
   </Col>
   <Col sm="2">
   <Card body outline color="secondary">
 
  <img src={bg16} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">ET Protection</CardSubtitle>
  <CardText>Shop with confidence, purchases are fully safeguarded</CardText>
  
   </Card>
   </Col>
   <Col sm="2">
   <Card body outline color="secondary">
  
  <img src={bg17} width={200} style={{'text-align':'center'}} class="abi1"/>
  <CardSubtitle tag="h6">Expert ET Guru Support</CardSubtitle>
  <CardText >Knowledgeable and friendly team available</CardText>
  
   </Card>
   </Col>
   </Row><br/>
    <CardGroup>
      <Card body inverse color="dark">
        <CardBody>

          <CardTitle tag="h4">Products</CardTitle>
          <CardSubtitle tag="h6" className="mb-2" style={{'color':'white'}}>SWITCHES</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">SOCKETS</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">BELLPUSH</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">REGULATORS</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">RELAYS</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">BOXES</CardSubtitle>
        </CardBody>

      </Card>

      <Card body inverse color="dark">
        <CardBody>
          <CardTitle tag="h5">Lights & wires</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Switches & sockets
</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">LED Lights

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Wires & Cables

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">FANs</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Relays</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Plugin & Sockets

</CardSubtitle>

        </CardBody>

      </Card>

      <Card body inverse color="dark">
        <CardBody>

          <CardTitle tag="h5">Products</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Help Topics
</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">FAQs</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Payments</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Shipping</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Cancellation & Return

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Export</CardSubtitle>
        
        </CardBody>

      </Card>
       <Card body inverse color="dark">
        <CardBody>

          <CardTitle tag="h4">Registered Office Address
</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Electric World
</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">2nd floor

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">LMR shopping Arcade

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Salem main road

</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">NAMAKKAL-637401

</CardSubtitle>
         
        </CardBody>

      </Card>

    </CardGroup><br/>
    <CardGroup>
  <Card body inverse color="dark">
  <CardTitle tag="h4">ELECTRIC WORLD</CardTitle>
  </Card>
  <Card body inverse color="dark">
  <CardTitle tag="h5">ELECTRIC WORLD PVT LIMITED</CardTitle>
  </Card>
  <Card body inverse color="dark">
  <CardTitle tag="h5">copyrights@electric world</CardTitle>
  </Card>
  <Card body inverse color="dark">
  <CardTitle tag="h5">All rights reserved</CardTitle>
  </Card>
  </CardGroup>
  </div>
		);
}
export default Home;