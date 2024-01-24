import {Form,FormGroup,Input,Label,Button,Row,Col} from 'reactstrap';
function xyz()
{
	var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var passwordcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    var password=document.getElementById('pass').value;
	var cpassword=document.getElementById('cpass').value;
	var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var passwordcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (username!='') 
		{
			if (username.length>5) 
			{
				document.getElementById('a1').innerHTML="";
				if (email!='') 
					{
                       if (email.match(mailformat)) 
                       	{
                           document.getElementById('a2').innerHTML="";
                           if (password!='') 
                           {
                             if (password.match(passwordcheck)) 
                             	{
                                 document.getElementById('a3').innerHTML="";
                                 if (cpassword!='')
                                  {
                                    if (password.length==cpassword.length && password==cpassword) 
                                    	{
                                          document.getElementById('a4').innerHTML="";
                                          alert("logined as:"+username);
                                          document.getElementById('button').innerHTML="WELCOME GUEST:"+username;
                                    	} 
                                    	else
                                    	 {
                                             document.getElementById('a4').innerHTML="please enter asa same as create password";
                                    	 }
                                  }
                             	} 
                             	else
                             	 {
                                    document.getElementById('a3').innerHTML="please enter atleast 1 number,1upper & lowercase letter,1 special chars";
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
           document.getElementById('a1').innerHTML="please enter 5 chars";
           document.getElementById('a2').innerHTML="please enter email";
           document.getElementById('a3').innerHTML="please create password";
           document.getElementById('a4').innerHTML="please confirm password";

		 }
}
function abc()
{
	document.getElementById('name').value="";
	document.getElementById('email').value="";
	document.getElementById('pass').value="";
	document.getElementById('cpass').value="";
}
function Login()
{
	return(
    <div>
    <Row style={{'background':'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>
    <Col sm="4"></Col>
   <Col sm="5" style={{'background':'skyblue','padding':'20px','margin-top':'20px','margin-bottom':'20px'}}>
    <FormGroup>
     <h1 id="x"></h1>
   <label>USER NAME</label>
   <Input type="text" id="name"/>
   <h6 id="a1" style={{color:'red'}}></h6>
   <label>EMAIL</label>
   <Input type="text" id="email"/>
   <h6 id="a2" style={{color:'red'}}></h6>
   <label>CREATE PASSWORD</label>
   <Input type="password" id="pass"/>
   <h6 id="a3" style={{color:'red'}}></h6>
   <label>CONFIRM PASSWORD</label>
   <Input type="password" id="cpass"/>
   <h6 id="a4" style={{color:'red'}}></h6><br/>
     <Input type="submit" onClick={xyz}/><br/>
     <Input type="reset" onClick={abc}/>
    </FormGroup>  
    </Col>
    <Col sm="3"></Col>
    </Row>
    </div>
		);
}
export default Login;