"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = ()=>{
  const session = useSession();
  return (
    <Navbar bg="dark" expand="lg" style={{color:"white"}}>
      <Container>
        <Navbar.Brand href="#home">Todo-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
          </Nav>
          {session?.status=="unauthenticated"
            ?<Nav.Link href="/Login">Login</Nav.Link>
            :<></>
          }
          {session?.status=="authenticated"
            ?<button onClick={()=>signOut()}>
              <Image alt="Avatar" src="/avatar.png" width={30} height={30}/>
              </button>
            :<></>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
