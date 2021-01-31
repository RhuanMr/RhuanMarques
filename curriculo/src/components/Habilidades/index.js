import React, { Component } from 'react'
import './style.css'

export default  class Habilidades extends Component {
  render(){
    return(
      <div className="container-habilidades" id="habilidades">
           <h1>Minhas habilidades:</h1>
           <ul className="lista">
             <li>Tenho conhecimentos avançados na língua inglesa</li>
             <li>As linguagens que mais domino são:</li>
                <ul className="sub-container">
                  <li>JavaScript</li>
                  <li>Ecmascript</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Css</li>
                  <li>Html</li>
                </ul>
             <li>Tenho dominio dos Frameworks</li>
                <ul className="sub-container">
                  <li>React-Native</li>
                  <li>ReactJS</li>
                  <li>NodeJs</li>
                  <li>VueJS</li>
                </ul>
             <li>Sei utilizar os Bancos de Dados:</li>
                <ul className="sub-container">
                  <li>Firebase</li>
                  <li>PostgresSQL</li>
                  <li>MongoDB</li>
                </ul>
             <li>Sei utilizar a ferramenta Figma para a prototipação de interfaces</li>
             <li>Possuo conhecimento das metodologias Ágeis</li>
             <li>Sou animado para adquirir novos conhecimentos e experiências</li>
           </ul>
      </div>
    )
  }
}