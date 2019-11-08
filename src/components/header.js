import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    } from 'reactstrap';
import './../support/css/header.css'
import Logo from './../support/img/logo.jpeg'
import './../support/css/main.css'

class Header extends React.Component{
    state = {
        isOpen:false
    }

    toggle =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return(
            <div className="header">
                    <Navbar className="testing" light expand="md">
                        <NavbarBrand className="ml-3"> 
                        <img src={Logo} width="50%" alt='Ayannah'/>
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" >
                            <a  href='#tentang' className="main-nav" activeclassname="main-nav-active">TENTANG</a> 
                            <a  href='#keunggulan' className="main-nav" activeclassname="main-nav-active">KEUNGGULAN</a> 
                            <a  href='#founder' className="main-nav" activeclassname="main-nav-active">TEAM</a> 
                            <a  href='#penghargaan' className="main-nav" activeclassname="main-nav-active">PENGHARGAAN</a> 
                    </Nav>
                    </Collapse>
                      
                    </Navbar>
                    

            </div>
        )
    }
}

export default Header