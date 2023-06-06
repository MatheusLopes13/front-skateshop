import React, { useState } from "react"
import './style.css'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
const Login = () => {
    
    
    const [keywords1, setKeywords1] = useState()
    const [keywords2, setKeywords2] = useState()
    const [keywords3, setKeywords3] = useState()
    const [keywords4, setKeywords4] = useState()
    const [keywords5, setKeywords5] = useState()
    const [keywords6, setKeywords6] = useState()
    const [keywords7, setKeywords7] = useState()
    const [keywords8, setKeywords8] = useState()
    const [keywords9, setKeywords9] = useState()
    const [keywords10, setKeywords10] = useState()

    

return (
    <>
        <Header/>
        
        <div className="conecte font-padrao">
            <h1 className="style">CONECTE-SE AQUI</h1>
            
        </div>
        

        <div className="display-flex">

            <div className="width-30">
                <form>
                    <p className="login">Faça login</p>

                    <div className="inputs">  
                            <label  for="email">E-mail</label>  
                            <input  
                             type="email"
                             name="email" required minlength="8"
                             value={keywords1}
                             onChange={e => setKeywords1(e.target.value)}/>
                            <p className="mensagem" id="email-aviso">Campo e-mail obrigatório</p>   
                        </div>
                    
                        <div className="inputs">  
                            <label for="senha">Senha</label>
                            <input
                             type="password"
                             name="senha"
                             minlength="8" required
                             value={keywords2}
                             onChange={e => setKeywords2(e.target.value)}
                             />
                            <p className="mensagem" id="senha-aviso">Campo senha obrigatório</p>    
                        </div>

                        <div className="inputs">
                        <button type="submit" className="buttom-black">Entrar</button>
                        <a href="../recuperar-senha/recuperar-senha.html">Esqueceu sua senha?</a>
                        <button className="buttom-facebook">
                            <img src="/images/facebook.png" alt="" className="fb-image"/>
                            Entrar com Facebook
                        </button>
                    </div>

                </form>
            
            </div>

            <div className="width-30">
                <form action="/criarconta" method="post">
                    <p className="login">Criar conta</p>

                    <div className="input-line">
                        <div className="inputs">
                            <label for="nome">Nome</label>
                            <input 
                             type="text"
                             name="nome"
                             value={keywords3}
                             onChange={e => setKeywords3(e.target.value)}/>
                            <p className="mensagem" id="nome-aviso">Campo nome obrigatório</p>
                        </div>
                
                        <div className="inputs">
                            <label for="sobrenome">Sobrenome</label>
                            <input 
                             type="text"
                             name="sobrenome"
                             value={keywords4}
                             onChange={e => setKeywords4(e.target.value)}/>
                            <p className="mensagem" id="sobrenome-aviso">Campo sobrenome obrigatório</p>
                        </div>

                    </div>
                    
            
                    <div className="inputs">  
                        <label for="email">E-mail</label>  
                        <input 
                         type="email"
                         name="email"
                         value={keywords5}
                         onChange={e => setKeywords5(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo email obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="endereço">Rua</label>  
                        <input 
                         type="text"
                         name="endereço"
                         value={keywords6}
                         onChange={e => setKeywords6(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo rua obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="numero">Numero</label>  
                        <input 
                         type="text"
                         name="numero"
                         value={keywords7}
                         onChange={e => setKeywords7(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo número obrigatório</p>
                    </div>

                    <div className="inputs">  
                        <label for="cep">CEP</label>  
                        <input 
                         type="text"
                         name="cep"
                         value={keywords8}
                         onChange={e => setKeywords8(e.target.value)}/>
                        <p className="mensagem" id="logar-aviso">Campo CEP obrigatório</p>
                    </div>
            
                    <div className="input-line">
                        <div className="inputs">  
                            <label for="senha">Senha</label>
                            <input 
                             type="password"
                             name="senha"
                             minlength="8" required
                             value={keywords9}
                             onChange={e => setKeywords9(e.target.value)}/> 
                            <p className="mensagem" id="entrar-aviso">Campo senha obrigatório</p>

                        </div>
                
                        <div className="inputs">  
                            <label for="confirmarsenha">Confirmar senha</label>
                            <input 
                            type="password"
                            name="confirmarsenha"
                            minlength="8" required 
                            value={keywords10}
                            onChange={e => setKeywords10(e.target.value)}/> 
                            <p className="mensagem" id="confirma-aviso">Campo confirmar senha obrigatório</p>   
                        </div>

                    </div>
                    
                    <button type="submit" className="buttom-black">Cadastrar</button>
                    
                </form>
            </div>
        </div>
       
        <Footer/>
    </>
     )
}

export default Login
    
    


        


       
    
            
    
         
            


