import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import {FunctionalsContent} from '../context/contextDashboard';
import styled  from '@emotion/styled';
import logo from '../assets/logo.png'


const Aside = styled.aside`
background: #343a40;
width: ${ props=> props.openBar ? '20%':'4.5%'};
height: 100vh;
position: fixed;
overflow:hidden;
transition:0.2s 0.2s all;
.command-list {
    display: flex;
    flex-flow: column;
    text-align: center;
    gap: 9px;
    margin-top: 30px;
    font-size: 18px;
    span {
        transition:0.2s 0.2s all;
        
    }
}
a {
    color:white;
    text-decoration:none;
    span {
        
    }
}
.closeBar span {
    transition:0.2s 0.2s all;
    font-size: 0 !important;
}
.logo{
    padding:3px;
}
.logo {
    display: block;
    margin: auto;
    max-width: 150px;
}
@media(max-width:992px){
    width: ${ props=> props.openBar ? '250px':'0'};
   
}

`;

const SideBar = (props) => {
    const { openBar }= useContext(FunctionalsContent)
    const open=openBar?'openBar':'closeBar';
    return (
        <Aside openBar={openBar}>
            <div className="logo">
                <img src={logo} alt="logo" className="img-fluid"/>
            </div>
            <div className={`${open} command-list`}>
            
            <Link  to='/dashboard/'>
            <i className="fa fa-tachometer-alt"></i>  <span>General</span>       
                </Link>
                <Link   to='/dashboard/productos'>
                <i className="fa fa-gift"></i>  <span>Listado de Productos</span>
                </Link>
                
            </div>
            
        </Aside>
    )
}

export default SideBar
