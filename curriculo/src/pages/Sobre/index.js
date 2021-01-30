import React, { Component } from 'react'
import AboutMe from '../../components/AboutMe'
import Habilidades from '../../components/Habilidades'
import Sidebar from '../../components/Sidebar'
import Projetos from '../../components/Projetos'
import FAQ from '../../components/FAQ'
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
              <Habilidades />
              <Projetos />
              <FAQ />
          </div>
      </div>
    )
  }
}