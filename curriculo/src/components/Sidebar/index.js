import React, { Component } from 'react'
import sobreImage from '../../assets/Sobre.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import './style.css'

export default  class Sidebar extends Component {
  render(){
    return(
      <div className="container-sidebar">
          <div className="container-img">
            <img src={sobreImage} alt="sobreImage" />
          </div>
          
          <nav>
              <ul>
                  <li><Link smooth to='#aboutMe'>- Um pouco sobre mim</Link></li>
                  <li><Link smooth to="#habilidades">- Habilidades</Link></li>
                  <li><Link smooth to="#projetos">- Projetos</Link></li>
                  <li><Link smooth to="#FAQ">- FAQ</Link></li>
              </ul>
          </nav>
      </div>
    )
  }
}