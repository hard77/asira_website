import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
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
                        <NavLink exact to='/' className="main-nav" activeClassName="main-nav-active"> 
                        <img src={Logo} width="50%" alt='Ayannah'/>
                        </NavLink> 
                            
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" >
                          
                        <NavItem>
                            <a  href='#aboutAncor' className="main-nav" activeClassName="main-nav-active">ABOUT</a> 
                        </NavItem>  
                        <NavItem>
                            <a  href='#solution' className="main-nav" activeClassName="main-nav-active">SOLUTION</a> 
                        </NavItem>  
                        <NavItem>
                            <a  href='#sejarahAncor' className="main-nav" activeClassName="main-nav-active">HISTORY</a> 
                        </NavItem>  
                       
                    </Nav>
                    </Collapse>
                      
                    </Navbar>
                    

            </div>
        )
    }
}

export default Header