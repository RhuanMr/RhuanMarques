import React, { Component } from 'react'
import AboutMe from '../../components/AboutMe'
import Sidebar from '../../components/Sidebar'
import './style.css'

export default  class Sobre extends Component {
  render(){
    return(
      <div className="container-sobre">
          <div className="sidebar-container">
              <Sidebar />
          </div>
          <div className="main-container">
              <AboutMe />
          </div>
      </div>
    )
  }
}