import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default  class Header extends Component {
  render(){
    return(
      <header>
        <div className="container-header">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/download">Downloads</Link>
        </div>
      </header>
      
    )
  }
}