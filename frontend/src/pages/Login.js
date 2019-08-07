import React, {useState} from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/Login.css';
import api from '../services/api';

export default function Login({history}){
    const [username, setUsername] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/devs',{username: username});
        const {_id} = response.data;
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input
                    placeholder="Digite seu usuário no GitHub"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}