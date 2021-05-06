import React, { useState } from 'react';
import logo from '../../assets/logoPNGGray.png'
import logoSolo from '../../assets/logoSolo.png'
import axios from 'axios';
import {  } from '@material-ui/core';
import './login.css'

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
      const { data: result } = await axios.post('http://127.0.0.1:7105/validate/user', { email, password });
      if(result !== 'valid') {
        document.getElementById("invalid").style.display = 'block';
      } else {
          history.push('/home');
      }
    }

    async function handleSignUp() {
        history.push('/signup');
    }
    return (
        <div className="containerLogin">
            <div className="logoDiv">
            <div className="imgDiv">
                <img src={logoSolo} alt="" className="logo"/>
            </div>
            </div>
            <div className="signinDiv">
            <form onSubmit={handleSubmit}>
                <div id="containerForm">
                    <div className="formContainer">
                        <input type="email" id="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required/>
                        <input type="password" id="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)} required/>
                        <button className="logInButton">Entrar</button>
                    </div>
                    <div className="wrongPassword" id="invalid">
                        Email e/ou senha incorreto(s) ou conta não existe.
                    </div>
                </div>
            </form>
            <div className="signUpContainer">
                <img src={logo} className="logoSlogan" alt=""/>
                <div className="singUpBtnDiv">
                <p className="slogan">Venha se conectar com o mundo da música</p>
                <p className="subslogan">Junte-se a comunidade do Musiclink</p>
                <button className="signUpButton" onClick={handleSignUp}>Criar conta</button>
                </div>
            </div>
            </div>
        </div>
    )
}