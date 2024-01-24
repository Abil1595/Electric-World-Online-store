import {Outlet,Link} from 'react-router-dom';
import React, { useState } from 'react';
import bg from './44.png';
import bg1 from './mycart.png';
import {Nav,Navbar,Collapse,UncontrolledDropdown,Button,Input,NavbarBrand,NavbarToggler,NavItem,NavLink,DropdownMenu,DropdownItem} from 'reactstrap';
function X1()
{
  const [a,b]=useState(false);
  const c=()=>b(!a);
	return(
      <>
      <Navbar style={{'background':'steelblue'}}>
      <NavbarBrand><img src={bg} class="logo"/></NavbarBrand>      
     <Button color="success"><input type="text"/>SEARCH</Button>
     <a href="Login"><Button color="danger">ENQUIRY</Button></a>
    <a href="Login"> <img src={bg1} class="abi21"/></a>
      </Navbar>
     <Navbar color="light" light expand="lg">
     <NavbarBrand>ELECTRIC WORLD</NavbarBrand>
     <NavbarToggler onClick={c}/>
     <Collapse isOpen={a} navbar>
     <Nav className="mt-auto" navbar>
     <NavItem><NavLink><Link to='/'>HOME</Link></NavLink></NavItem>
     <NavItem><NavLink><Link to='/about'>About us</Link></NavLink></NavItem> 
     <NavItem><NavLink><Link to='/contact'>Contact Us</Link></NavLink></NavItem>
      <NavItem><NavLink><Link to='/services'>Services</Link></NavLink></NavItem>
      <NavItem><NavLink><Link to='/products'>Products Details</Link></NavLink></NavItem>
      <NavItem><NavLink><Link to='/login'><Button id="button">Login</Button></Link></NavLink></NavItem>
     </Nav>
     </Collapse>
     </Navbar>
     
    <Outlet/>
      </>

		);
}
export default X1;

