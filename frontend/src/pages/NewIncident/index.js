import React,{useState} from 'react'
import './style.css'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export default function NewIncidents() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');
    const ongId = localStorage.getItem('ongId')
    const data ={
        title,
        description,
        value
    }
    const history = useHistory()
   async function handleNewIncidente(e){
        e.preventDefault();
        try {
           await api.post('incidents',
              data,{
            headers:{
                Authorization:ongId
            }
          })  
          alert("Cadastro realizado com sucesso!");
          history.push('/profile')
        } catch (error) {
            alert('erro ao cadastrar caso')
        }
      
    }
    
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
                <form onSubmit={handleNewIncidente} >
                <input placeholder="Titulo"
                value={title}
                onChange ={e => setTitle(e.target.value)}
                />
                <textarea  placeholder="Descrição" value={description}
                onChange ={e => setDescription(e.target.value)}></textarea>
                <input placeholder="Valor em reais"
                 value={value}
                 onChange ={e => setValue(e.target.value)}
                />      
                <button className="button">Cadastrar</button>
                </form>
          
        </div>

    </div>
    )
}