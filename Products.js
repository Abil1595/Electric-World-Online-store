import React,{useState} from 'react';
import {Row,Col,Card,CardTitle,CardGroup,CardSubtitle,CardBody,CardImg,CardText,Button,Table,Form,FormGroup,Input,Label} from 'reactstrap';
import bg from './51.webp';
import bg1 from './21.webp';
import bg2 from './22.webp';
import bg3 from './23.webp';
import bg4 from './24.webp';
import bg10 from './GST.jpeg';
import bg11 from './GST1.jpg';
import bg12 from './31.webp';
import bg13 from './32.webp';
import bg14 from './33.webp';
import bg15 from './34.webp';
import bg16 from './35.webp';
import bg17 from './36.webp';
function Products()
{
	return(
    <div>
    <h1>Home  All Categories  Switches and Sockets Switches</h1><br/>
    <Row>
    <Col sm={5}>
   <Card body inverse color="info" >
    <CardBody>
    <center><img src={bg} class="product"/></center><br/>
    <center><Button color="success">Add To Enquiry</Button></center>
    </CardBody>
   </Card>
    </Col>
    <Col sm={7}>
    <Card body outline color="dark">
    <CardBody>
   <CardTitle tag="h3" style={{'background':'orange'}}>Legrand Britzy White Switch 6 A, 1 Module, 1 Way| 673401</CardTitle><br/>
   <CardSubtitle tag="h4">₹24.43 Incl. of Taxes<br/><br/>
-54.99% ₹20.70Each + GST ₹3.73<br/><br/>

₹46.00 IN STOCK<br/><br/>
Min. Order - 3</CardSubtitle><br/>
<Form>
<Row form>
<Col sm={6}>
<FormGroup>
<Label><h2>QUANTITY:</h2></Label>
<Input type="select">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</Input>
</FormGroup>
</Col>
<Col sm={6}>
<FormGroup>
<a href="Login"><Button color="primary" block>ADD TO CART</Button></a>
</FormGroup>
</Col>
</Row>
</Form>
<Form>
<Row form>
<Col sm={6}>
<FormGroup>
<Label><h2>DELIVERY:</h2></Label>
<Input type="number"/>
</FormGroup>
</Col>
<Col sm={6}>
<FormGroup>
<a href="Login"><Button color="danger" block>APPLY</Button></a>
</FormGroup>
</Col>
</Row>
</Form>
<h4 style={{'color':'red'}}>Dispatch by February 07</h4>

    </CardBody>
    </Card>
    </Col>
    </Row><br/><br/>
    <Row>
    <Col sm={6}>
    <Table  striped>
            <thead>
                <tr>
                    <th>Reference No</th>
                    <th>6734 01</th>
                </tr>
            </thead>
                    <tbody>
                <tr>
                    <th>Brand</th>
                    <td>Legrand</td>
                </tr>
                <tr>
                    <th>Brand</th>
                    <td>Legrand</td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td>Britzy - Legrand</td>
                </tr>
                <tr>
                    <th>Rated Voltage (V)</th>
                    <td>240V AC</td>
                </tr>
                <tr>
                    <th>Ampere/Current Rating</th>
                    <td>6/10 A</td>
                </tr>
                <tr>
                    <th>Colour</th>
                    <td>White</td>
                </tr>
                <tr>
                    <th>Modules</th>
                    <td>1 Module</td>
                </tr>
                <tr>
                    <th>Manufacturer Details</th>
                    <td>Legrand India, A-2 MIDC Industrial Area, Malegaon Village, Sinnar, Nashik - Pune Rd, Malegaon Industrial Area, Malegaon, Maharashtra 422113, India</td>
                </tr>
                <tr>
                    <th>Manufacturer Customer Care</th>
                    <td>customer.care@legrand.co.in, 022-3041 6200</td>
                </tr>
            </tbody>
        </Table>
    </Col>
    <Col sm={6}>
    <CardGroup>
    <Card>
   <CardBody>
   <img src={bg1} class="abi1"/>
   </CardBody>
    </Card>
    <Card>
   <CardBody>
   <img src={bg2} class="abi1"/>
   </CardBody>
    </Card>
    <Card>
   <CardBody>
   <img src={bg3} class="abi1"/>
   </CardBody>
    </Card>
    <Card>
   <CardBody>
   <img src={bg4} class="abi1"/>
   </CardBody>
    </Card>
    </CardGroup>
    </Col>
    </Row>
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
export default Products;