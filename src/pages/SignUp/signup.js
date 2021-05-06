import React, { useState } from 'react';
import logo from '../../assets/logoPNGGrayMin.png'
import './signup.css'
import axios from "axios";

export default function SignUp() {
    const [allValues, setAllValues] = useState({
        type: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        role: ""
    });
    async function handleSubmit(event) {
        event.preventDefault();
        let result = '';
        if(allValues.type === 'user') {
            const { data: validateEmail } = await axios.post(`http://127.0.0.1:7105/validateEmail`, { email: allValues.email });
            if(validateEmail === 'valid') {
                result = await axios.post(`http://127.0.0.1:7105/insert/${allValues.type}`, allValues);
            } else {
                document.getElementById("emailExists").style.display = 'block';
            }
        }
    }
    function handleChanges(e) {
        if(e.target.name === 'type' && e.target.value !== 'user') {
            document.getElementById("roleSignUp").disabled = true;
            document.getElementById("roleSignUp").value = '';
        } else {
            document.getElementById("roleSignUp").disabled = false;
        }
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    }
    return (
        <div className="container">
            <div className="content">
                <div className="imgContainer">
                    <img src={logo} className="logoImg" alt=""/>
                </div>
                <div className="signUpBox">
                    <form onSubmit={handleSubmit}>
                        <div className="boxes nameDiv">
                            <input type="text" name="name" id="nameSignUp" placeholder="Nome *" onChange={handleChanges} required/>
                        </div>
                        <div className="boxes roleDiv">
                            <input type="text" name="role" id="roleSignUp" placeholder="Função" onChange={handleChanges}/>
                        </div>
                        <div className="boxes emailDiv">
                            <input type="email" name="email" id="emailSignUp" placeholder="Email *" onChange={handleChanges} required/>
                            <div id="emailExists">
                                Email já está vinculado com outra conta.
                            </div>
                        </div>
                        <div className="boxes passwordDiv">
                            <input type="password" name="password" id="passwordSignUp" placeholder="Senha *" onChange={handleChanges} required/>
                        </div>
                        <div className="boxes phoneDiv">
                            <input type="tel" name="phone" id="phoneSignUp" placeholder="Celular *" onChange={handleChanges} required/>
                        </div>
                        <div className="boxes typeDiv">
                            <label htmlFor="type">Criar conta como *</label>
                            <div className="options">
                                <div className="optionDiv">
                                    <span>Musico</span> 
                                    <input type="radio" name="type" className="type" value="user" onChange={handleChanges}/>
                                </div>
                                <div className="optionDiv">
                                    <span>Banda</span> 
                                    <input type="radio" name="type" className="type" value="band" onChange={handleChanges} />
                                </div>
                                <div className="optionDiv">
                                    <span>Produtor</span>
                                    <input type="radio" name="type" className="type" value="producer" onChange={handleChanges}/>
                                </div>
                            </div>
                        </div>      
                        <div className="signUpDiv">
                            <div className="btnDiv">
                                <button className="signUpBtn">Criar conta</button>
                            </div>
                        </div>            
                    </form>
                </div>
            </div>
        </div>
    )
}