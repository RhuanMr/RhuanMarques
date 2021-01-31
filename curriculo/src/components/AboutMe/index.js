import React, { Component } from 'react'
import './style.css'

export default  class AboutMe extends Component {
  render(){
    return(
      <div className="container-about" id="aboutMe">
           <h1>Um pouco sobre mim:</h1>
           <p>Me chamo Rhuan Marques, tenho 21 anos e curso o nono semestre de Engenharia de software na Universidade de Bras~ilia (UnB).</p>
      </div>
    )
  }
}