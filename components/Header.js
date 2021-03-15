import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
import ActiveLink from './ActiveLink'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
 <Container>
     <Link href="/" >
            <a className="navbar-brand">React-bootstrap</a>   
     </Link>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
   
      <ActiveLink activeClassName="active" href="/">
      <a  className="nav-link">¿Quién soy?</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/blog">
      <a  className="nav-link">Blog</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/GithubPage">
      <a className="nav-link">github</a>
      </ActiveLink>
      
    </Nav>
   
  </Navbar.Collapse>
      
 </Container>
</Navbar>
    )
}

export default Header
