import React, { Component } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import logo from "./logo2.jpg";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
    render() {
        return (
                <>
                <Router>
                    <Navbar  sticky="top" collapseOnSelect expand='md' bg='warning' text='dark'>
                        <Container>
                            <Navbar.Brand href='/'>
                                <img
                                src = {logo}
                                height="30"
                                width="30"
                                className="d-inlline-block align-top"
                                alt='logo'
                                />
                            </Navbar.Brand>
                        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="navbar-toggle-re" id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">
                                    About
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/blog">
                                    Blog
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/contacts">
                                    Contacts
                                </Nav.Link>
                                </Nav>
                            <Form inline
                                    className="search-form">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="d-inline mr-sm-2 w-75" />
                                <Button variant='outline-dark'>Search</Button>
                            </Form>
                            </Navbar.Collapse>
                        </Container> 
                    </Navbar>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/contacts' component={Contacts}/>
                            <Route exact path='/blog' component={Blog}/>
                        </Switch>
                    </Router>
                </>
        )
    }
}
