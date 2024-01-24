import React,{useState} from 'react';
import {Row,Col,Card,CardTitle,CardGroup,CardText,CardBody,CardSubtitle,CardImg,Collapse,Button,Input} from 'reactstrap';
import bg from './51.webp';
import bg1 from './52.webp';
import bg2 from './53.webp';
import bg3 from './delivery.png';
import bg10 from './GST.jpeg';
import bg11 from './GST1.jpg';
import bg12 from './31.webp';
import bg13 from './32.webp';
import bg14 from './33.webp';
import bg15 from './34.webp';
import bg16 from './35.webp';
import bg17 from './36.webp';
function Services()
{
	const [a,b]=useState(false);
	const c=()=>b(!a);
	const [a1,b1]=useState(false);
	const c1=()=>b1(!a1);
	const [a2,b2]=useState(false);
	const c2=()=>b2(!a2);
	const [a3,b3]=useState(false);
	const c3=()=>b3(!a3);
	const [a4,b4]=useState(false);
	const c4=()=>b4(!a4);
	const [a5,b5]=useState(false);
	const c5=()=>b5(!a5);
	return(
  <div>
  <h1>Home  All Categories  Switches and Sockets Switches</h1><br/>
  <Row>
  <Col sm={3}>
  <div class="switch">
  <h3>SWITCHES</h3>
  <Button color="success" onClick={c}>BRAND</Button>
  <Collapse isOpen={a}>
  <Input type="checkbox"/>Crabtree<br/>
  <Input type="checkbox"/>Norisys<br/>
  <Input type="checkbox"/>GM Modular<br/>
  <Input type="checkbox"/>Anchor by Panasonic
  </Collapse><br/>
  <Button color="primary" onClick={c1}>MODEL</Button>
  <Collapse isOpen={a1}>
  <Input type="checkbox"/>Roma Plus - Anchor<br/>
  <Input type="checkbox"/>FourFive - GM Modular<br/>
  <Input type="checkbox"/>Insysta - Hager<br/>
  <Input type="checkbox"/>Lyncus - Legrand<br/>
  </Collapse><br/>
  <Button color="warning" onClick={c2}>AMPERE/CURRENT RATING</Button>
  <Collapse isOpen={a2}>
  <Input type="checkbox"/>6/10 A<br/>
  <Input type="checkbox"/>16 A<br/>
  <Input type="checkbox"/>20 A<br/>
  <Input type="checkbox"/>32 A<br/>
  </Collapse><br/>
  <Button color="dark" onClick={c3}>COLOUR</Button>
  <Collapse isOpen={a3}>
  <Input type="checkbox"/>WHITE<br/>
  <Input type="checkbox"/>BLACK<br/>
  <Input type="checkbox"/>SILVER<br/>
  <Input type="checkbox"/>GREY<br/>
  </Collapse><br/>
  <Button color="light" onClick={c4}>MODULES</Button>
  <Collapse isOpen={a4}>
  <Input type="checkbox"/>WHITE<br/>
  <Input type="checkbox"/>BLACK<br/>
  <Input type="checkbox"/>SILVER<br/>
  <Input type="checkbox"/>GREY<br/>
  </Collapse><br/>
  <Button color="danger" onClick={c5}>WAYS</Button>
  <Collapse isOpen={a5}>
  <Input type="checkbox"/>1 WAY<br/>
  <Input type="checkbox"/>2 WAYS<br/>
  <Button color="primary">SUBMIT</Button>
  </Collapse>
  </div>
  </Col>
  <Col sm={3}>
  <Card body inverse color="light">
  <CardBody>
<center><h6 style={{'color':'black','background':'lightgreen'}}>54.9% discount</h6></center><br/>
 <a href="Products"><img src={bg} class="image1"/><br/>
 <CardTitle tag="h3">
 Legrand Britzy White Switch 6 A 1 Module 1 Way </CardTitle><br/>
<CardSubtitle tag="h5">Ref.No.:6734 01</CardSubtitle>

<CardText tag="p">By Legrand<br/><br/>

₹20.70Each <br/><br/>
₹46.00(54.99% OFF)<br/><br/>
 <img src={bg3} width="10%"/> Delivery<br/><br/>

Dispatch by February 07</CardText></a>
<br/>
<a href="Login"><Button color="primary" block>Add to Cart</Button></a>
  </CardBody> 
   
  </Card>
  
  </Col>
    <Col sm={3}>
  <Card body inverse color="light">
  <CardBody>
<center><h6 style={{'color':'black','background':'lightgreen'}}>54.9% discount</h6></center><br/>
 <a href="Products"><img src={bg1} class="image1"/><br/>
 <CardTitle tag="h3">
 Legrand Britzy White Switch 6 A 1 Module 1 Way </CardTitle><br/>
<CardSubtitle tag="h5">Ref.No.:6734 01</CardSubtitle>

<CardText tag="p">By Legrand<br/><br/>

₹20.70Each <br/><br/>
₹46.00(54.99% OFF)<br/><br/>
 <img src={bg3} width="10%"/> Delivery<br/><br/>

Dispatch by February 07</CardText></a><br/>
<a href="Login"><Button color="primary" block>Add to Cart</Button></a>
  </CardBody> 
   
  </Card>
  
  </Col>
  <Col sm={3}>
  <Card body inverse color="light">
  <CardBody>
<center><h6 style={{'color':'black','background':'lightgreen'}}>54.9% discount</h6></center><br/>
 <a href="Products"><img src={bg2} class="image1"/><br/>
 <CardTitle tag="h3">
 Legrand Britzy White Switch 6 A 1 Module 1 Way </CardTitle><br/>
<CardSubtitle tag="h5">Ref.No.:6734 01</CardSubtitle>

<CardText tag="p">By Legrand<br/><br/>

₹20.70Each <br/><br/>
₹46.00(54.99% OFF)<br/><br/>
 <img src={bg3} width="10%"/> Delivery<br/><br/>

Dispatch by February 07</CardText></a>
<br/>
<a href="Login"><Button color="primary" block>Add to Cart</Button></a>
  </CardBody> 
   
  </Card>
  
  </Col>
  </Row><br/><br/>
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
export default Services;