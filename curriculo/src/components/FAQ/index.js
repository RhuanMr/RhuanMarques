import React, { Component } from 'react'
import './style.css'

export default  class FAQ extends Component {
  render(){
    return(
      <div className="container-faq" id="FAQ">
           <h1>FAQ:</h1>
           <div className="perguntas">
              <h3>Quando planeja se formar ?</h3>
              <p>Meu planejamento indica que em junho de 2023.</p>
           </div>
           <div className="perguntas">
              <h3>Possui experiências profissionais ?</h3>
              <p>Não, estou embusca do meu primeiro emprego.</p>
           </div>
           <div className="perguntas">
              <h3>Posui disponibilidade de horários ?</h3>
              <p>Sim, minha grade horária foi montada de forma que me permita pelo meno 8 horas por dia para me dedicar à atividades extra acadêmicas.</p>
           </div>
           <div className="perguntas">
              <h3>Estado Civil?</h3>
              <p>Solteiro.</p>
           </div>
           <div className="perguntas">
              <h3>Qual é sua área de maior interesse ?</h3>
              <p>Tenho preferência pelas áreas de desenvolvimento de aplicativos mobile e Web-apps.</p>
           </div>
      </div>
    )
  }
}