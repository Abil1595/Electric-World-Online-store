import {Form,FormGroup,Input,Label,Button,Row,Col,CardSubtitle,CardImg,CardGroup,CardBody,CardText,CardTitle,Card} from 'reactstrap';
import bg10 from './GST.jpeg';
import bg11 from './GST1.jpg';
import bg12 from './31.webp';
import bg13 from './32.webp';
import bg14 from './33.webp';
import bg15 from './34.webp';
import bg16 from './35.webp';
import bg17 from './36.webp';
function uvw()
{
	var name=document.getElementById('name1').value;
	var nemail=document.getElementById('email1').value;
	var mobile=document.getElementById('pass1').value;
	var message=document.getElementById('msg').value;
	var nmailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if (name!='') 
		{
			
			if (name.length>5) 
				{
                     document.getElementById('a1').innerHTML="";
                     if (nemail!='') 
                     {
                         if (nemail.match(nmailformat)) 
                         	{
                                document.getElementById('a2').innerHTML="";
                                if (mobile!='') 
                                {
                                	if (mobile.length==10) 
                                		{
                                            document.getElementById('a3').innerHTML="";
                                            alert("form submitted as: "+name);
                                            document.getElementById('y3').innerHTML="FORM submitted as: "+name;
                                		} 
                                		else 
                                		{
                                            document.getElementById('a3').innerHTML="please enter valid mobile number";
                                		}
                                }
                         	} 
                         	else
                         	 {
                               document.getElementById('a2').innerHTML="please enter valid mail id";
                         	 }
                     }
				} 
				else
				 {
                    document.getElementById('a1').innerHTML="please enter minimum 5 chars";
				 }

		}
		else
		 {
           document.getElementById('a1').innerHTML="please enter username";
           document.getElementById('a2').innerHTML="please enter email";
           document.getElementById('a3').innerHTML="please enter phone number";
          

		 }

}
function mno()
{
	document.getElementById('name1').value="";
	document.getElementById('email1').value="";
	document.getElementById('pass1').value="";
	document.getElementById('msg').value="";
}
function Contact()
{
	return(
  <div>
  <Row>
  <Col sm={12}>
<center><h1>CONTACT US</h1></center>
<center><h3 id="y3">Drop us a line and we'll get back to you as soon as possible.</h3></center>
  </Col>
  </Row>
  <Row style={{'background':'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>
    <Col sm="4"></Col>
   <Col sm="5" style={{'background':'skyblue','padding':'20px','margin-top':'20px','margin-bottom':'20px'}}>
    <FormGroup>
     
   <label>USER NAME</label>
   <Input type="text" id="name1"/>
   <h6 id="a1" style={{color:'red'}}></h6>
   <label>EMAIL</label>
   <Input type="text" id="email1"/>
   <h6 id="a2" style={{color:'red'}}></h6>
   <label>MOBILE NUMBER</label>
   <Input type="number" id="pass1"/>
   <h6 id="a3" style={{color:'red'}}></h6>
   <label>MESSAGE: optional</label>
   <Input type="textarea" id="msg" />
<br/>
     <Input type="submit" onClick={uvw}/><br/>
     <Input type="reset" onClick={mno}/>
    </FormGroup>  
    </Col>
    <Col sm="3"></Col>
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
export default Contact;