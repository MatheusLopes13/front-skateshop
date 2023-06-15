import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './style.css'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import api from "../../services/api"


const Login = () => {

    // const user = {
    //     email: keywords1,
    //     senha: keywords2
    // };


    // const loginUser = () => {
    //     const response = api.post('logar' , user )

    //     localStorage.setItem('token', response.data.token);
    // }


    
    const navigate = useNavigate()

    const handleLogin = async () => {
        const auth = {
            email: emailLogin,
            senha: senhaLogin
        }
        try {
         
            const response = await api.post('/login', auth)
             const token = response.data.token
             localStorage.setItem('token', token);
            
            navigate('/')
    
        } catch (error) {
          alert(error.response)
        }

    }

   
    
    
    const [emailLogin, setEmailLogin] = useState()
    const [senhaLogin, setSenhaLogin] = useState()
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [email, setEmail] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [cep, setCep] = useState()
    const [senha, setSenha] = useState()
    const [confirma, setConfirma] = useState()

    useEffect(() => {
        
    }, [])

    

return (
    <>
        <Header/>
        
        <div className="conecte font-padrao">
            <h1 className="style">CONECTE-SE AQUI</h1>
            
        </div>
        

        <div className="display-flex">

            <div className="width-30">
                
                    <p className="login">Faça login</p>

                    <div className="inputs">  
                            <label  for="email">E-mail</label>  
                            <input  
                             type="email"
                             name="email" required minlength="8"
                             value={emailLogin}
                             onChange={e => setEmailLogin(e.target.value)}/>
                            <p className="mensagem" id="email-aviso">Campo e-mail obrigatório</p>   
                        </div>
                    
                        <div className="inputs">  
                            <label for="senha">Senha</label>
                            <input
                             type="password"
                             name="senha"
                             minlength="8" required
                             value={senhaLogin}
                             onChange={e => setSenhaLogin(e.target.value)}
                             />
                            <p className="mensagem" id="senha-aviso">Campo senha obrigatório</p>    
                        </div>

                        <div className="inputs">
                        <button type="submit" className="buttom-black" onClick={handleLogin}>Entrar</button>

                        <button className="buttom-facebook">
                            <img src="/images/facebook.png" alt="" className="fb-image"/>
                            Entrar com Facebook
                        </button>
                    </div>

                
            
            </div>

            <div className="width-30">
                
                    <p className="login">Criar conta</p>

                    <div className="input-line">
                        <div className="inputs">
                            <label for="nome">Nome</label>
                            <input 
                             type="text"
                             name="nome"
                             value={nome}
                             onChange={e => setNome(e.target.value)}/>
                            <p className="mensagem" id="nome-aviso">Campo nome obrigatório</p>
                        </div>
                
                        <div className="inputs">
                            <label for="sobrenome">Sobrenome</label>
                            <input 
                             type="text"
                             name="sobrenome"
                             value={sobrenome}
                             onChange={e => setSobrenome(e.target.value)}/>
                            <p className="mensagem" id="sobrenome-aviso">Campo sobrenome obrigatório</p>
                        </div>

                    </div>
                    
            
                    <div className="inputs">  
                        <label for="email">E-mail</label>  
                        <input 
                         type="email"
                         name="email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo email obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="endereço">Rua</label>  
                        <input 
                         type="text"
                         name="endereco"
                         value={rua}
                         onChange={e => setRua(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo rua obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="numero">Numero</label>  
                        <input 
                         type="text"
                         name="numero"
                         value={numero}
                         onChange={e => setNumero(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo número obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="cep">CEP</label>  
                        <input 
                         type="text"
                         name="cep"
                         value={cep}
                         onChange={e => setCep(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo CEP obrigatório</p>
                    </div>
            
                    <div className="input-line">
                        <div className="inputs">  
                            <label for="senha">Senha</label>
                            <input 
                             type="password"
                             name="senha"
                             minlength="8" required
                             value={senha}
                             onChange={e => setSenha(e.target.value)}/> 
                            <p className="mensagem" id="entrar-aviso">Campo senha obrigatório</p>

                        </div>
                
                        <div className="inputs">  
                            <label for="confirmarsenha">Confirmar senha</label>
                            <input 
                            type="password"
                            name="confirmarsenha"
                            minlength="8" required 
                            value={confirma}
                            onChange={e => setConfirma(e.target.value)}/> 
                            <p className="mensagem" id="confirma-aviso">Campo confirmar senha obrigatório</p>   
                        </div>

                    </div>
                    
                    <button type="submit" className="buttom-black">Cadastrar</button>
                    
                
            </div>
        </div>
       
        <Footer/>
    </>
     )
}

export default Login
    
    


        


       
    
            
    
         
            


