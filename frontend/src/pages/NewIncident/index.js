import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
export default function NewIncidents() {
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero "/>
                <h1>Cadastro novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
                <Link className="back-link" to="/profile">
                 <FiArrowLeft size={16} color="#E02041" />
                 Voltar para home
            </Link>
            </section>
                <form>
                <input placeholder="Titulo" />
                <textarea  placeholder="Descrição"></textarea>
                <input placeholder="Valor em reais"/>      
                <button className="button">Cadastrar</button>
                </form>
          
        </div>

    </div>
    )
}