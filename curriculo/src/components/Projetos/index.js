import React, { Component } from 'react'
import './style.css'

export default  class Projetos extends Component {
  render(){
    return(
      <div className="container-projetos" id="projetos">
           <h1>Projetos:</h1>
           <div className="projeto">
              <h2>Conecta Ensina:</h2>
              <p>Participei do projeto Conecta Ensina como papel de Desenvolvedor. O projeto visa
                 auxiliar alunos e professores com um aplicativo de gerenciamento de aulas
                 particulares.
              </p>
              <a href=" https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile">Mobile</a>
              <br/>
              <a href=" https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend">Back-End</a>
           </div>
           <div className="projeto">
             <h2>Magic Poney Project:</h2>
             <p>Participo em um projeto independente com outros 2 alunos da Universidade de Brasília chamado Magic Poney Project, que criar um Web app ferenciador de metodologias Ágeis</p>
             <a href="https://mppapp.wordpress.com/">Site de apresentação do projeto</a>
           </div> 
      </div>
    )
  }
}