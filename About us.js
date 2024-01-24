import {Row,Col,Card,CardTitle,CardGroup,CardSubtitle,CardBody,CardImg,CardText} from 'reactstrap';
import bg from './banner.jpg';
import bg10 from './GST.jpeg';
import bg11 from './GST1.jpg';
import bg12 from './31.webp';
import bg13 from './32.webp';
import bg14 from './33.webp';
import bg15 from './34.webp';
import bg16 from './35.webp';
import bg17 from './36.webp';
function About()
{
	return(
  <div>
  <CardGroup>
  <Card body inverse color="success">
  <CardBody>

  <CardTitle tag="h3">About Us</CardTitle>
<CardSubtitle tag="h7">Electric World, which stands tall withholding the frame of excellence since 1967. our founder, instilled commitment, integrity and perseverance in our team. Our values go hand in hand with our ambition to envision a better future. We are all set to revolutionise the industrial and electrical equipment purchases
with technology at the forefront. We make procurement easy for business & hassle-free, with the best prices & on-time deliveries through the power of digitization. We have customised options for all sectors starting from Dealers, Panel Builder, Contractor or Builders, Manufacturer or Industries, OEM’s or even an End Users, which adds value into solution and increasing their growth. We believe in electrifying businesses!!</CardSubtitle></CardBody>
  </Card>
  <Card>
    <img src={bg} class="abi31"/>
 
  </Card>
  </CardGroup>
  <br/>
  <Row>
  <Col sm={12}>
  <div class="about3">
  <table border="1" cellpadding="10px" cellspacing="10px">
      <tr>
        <td></td>
        <td></td>
        <td><h3>Vision</h3></td>
        <td><h3>Mission</h3></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><center>
           
      <h5>At the heart of Electric World is a dream - To build and grow Electric World com as a leading global brand.Decades of hands-on experience reflects in our ability to embrace both scale and speed in the digital era. Our leadership is customer focussed and is pledged to deliver.</h5></center></td>
      <td><center>
      <h5>Our aim is to craft a refined and state of the art industrial, electrical supply venture where we equip your dreams with the correct expertise. We want you to run your business from the comfort of a click. Our brains are focused on providing your businesses AI-based solutions that predict your needs beforehand.</h5></center></td>
      </tr>
    </table>
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
export default About;