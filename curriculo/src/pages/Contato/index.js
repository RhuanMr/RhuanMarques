import React, { Component } from 'react'
import './style.css'
import contatoImage from '../../assets/Contato.jpg'

export default class Contato extends Component {
  render(){
    return (
      <div className="container-contato">
          <img src={contatoImage} alt="contato-img" />
          <div className="info">
            <div className="textos">
                <label>Email: </label>
                <text>rhuan.marques.robias@gmail.com</text>
            </div>
            <div className="textos">
                <label>Telefone: </label>
                <text>+55 (61) 98328-9194</text>
            </div>
            <div className="textos">
                <label>Localização: </label>
                <text>Águas claras/Brasília - DF </text>
            </div>
            <div className="textos">
                <label>Github: </label>
                <text>RhuanMr</text>
            </div>
            <div className="textos">
                <label>LinkedIn: </label>
                <a href="https://www.linkedin.com/in/rhuan-marques-714b4a1aa/">Rhuan Marques</a>
            </div>
          </div>
      </div>
    );
  }
}
