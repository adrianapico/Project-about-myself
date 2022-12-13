import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { CiHome,CiUser, CiDesktop, CiSpeaker } from 'react-icons/ci';

function NavbarAP() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column navColor" >
    <Nav.Link href="/home" type='icon'><CiHome/></Nav.Link>
    <Nav.Link eventKey="link-1"><CiUser/></Nav.Link>
    <Nav.Link eventKey="link-3"><CiDesktop/></Nav.Link>
    <Nav.Link eventKey="link-4"><CiSpeaker/></Nav.Link>
    

 
    </Nav>
  );
}

export default NavbarAP;