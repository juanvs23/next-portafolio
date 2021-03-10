import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from '@emotion/styled';
import FotoUser from './FotoUser';
import ButtonActive from './ButtonActive';


const Header = styled.header`
width: 100%;
    height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    background:#343a40;
    a#basic-nav-dropdown {
        display: flex;
        align-items: center;
        color: white;
        justify-content: space-around;
        font-size: 20px;
    }
`

const HeaderDashboard = props => {
    return (
        <Header>
         <ButtonActive/>
<NavDropdown title={<FotoUser image={'https://picsum.photos/30'}/>} id="basic-nav-dropdown" className="d-flex justify-content-end ">
        <NavDropdown.Item >Action</NavDropdown.Item>
        <NavDropdown.Item >Another action</NavDropdown.Item>
        <NavDropdown.Item >Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
        </Header>
    )
}



export default HeaderDashboard
