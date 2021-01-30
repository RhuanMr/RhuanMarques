import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class Downloads extends Component {
  render(){
    return (
      <div className="container-downloads">
          <h1>Downloads</h1>
          <div className="container-button">
              <Link to="Curriculo.pdf" target="_blank" download>PDF do currículo</Link>
              <Link>APK do currículo</Link>
          </div>       
      </div>
    );
  }
}
