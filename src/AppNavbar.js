import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import AddTasks from './AddTasks'

//import Nav from 'react-bootstrap/Nav'


export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>{this.props.appname}</Navbar.Brand>
        </Navbar>
        <div>
          <AddTasks />
        </div>
        
      </div>
    )
  }
}

