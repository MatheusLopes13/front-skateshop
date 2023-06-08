import React, { useState } from "react";
import "./detals.css"
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"
import foto_2 from "../../images/footer/elo-removebg-preview.png"
import foto_3 from "../../images/footer/facebook.png"


const Detals = () => {

    const product = {
        nome: "tenis DC",
        cor: "preto",
        imagem_1: foto_1,
        imagem_2: foto_2,
        imagem_3: foto_3,
        valor: 450.00,
        tamanho: 43
    } 

    let [contador, setContador] = useState(1)
    let [imgPrincipal, setImgPrincipal] = useState(foto_1)

    function addNumber() {
        setContador(contador += 1)
    }

    function deleteNumber() {
        if (contador > 0) {
            setContador(contador -= 1)
        }
    }


    return (
        <>

            <Header />

            <main>

                <div className="box-1">
                    <img onClick={() => setImgPrincipal(foto_1)} src={product.imagem_1} alt="defalut" />
                    <img onClick={() => setImgPrincipal(foto_2)} src={product.imagem_2} alt="defalut" />
                    <img onClick={() => setImgPrincipal(foto_3)} src={product.imagem_3} alt="defalut" />
                </div>


                <div className="box-2">
                    <img src={imgPrincipal} />
                </div>

                <div className="box-3">
                    <h1 id="nome-produto">
                        {product.nome}
                    </h1>
                    <p>
                      <strong>cor</strong>:  {product.cor}
                    </p>
                    <p id="valor-produto" className="preco"><strong> R$ {product.valor}</strong> </p>
                    <p id="valor-parcelado">ou em 3x de R$ { product.valor / 3}
                    </p>

                    <ul>
                        <li>material usado</li>
                        <li>tipo simples</li>
                        <li>feito no brasil</li>
                    </ul>

                    <div className="tamanhos-produto">

                       
                    <strong>tamanho</strong> {product.tamanho}
                       
                    </div>

                    <div className="adicionar-comprar">
                        <div className="adicionar-item">
                            <button onClick={addNumber} >+</button>

                            <p className="quantidade">{contador}</p>
                            <button onClick={deleteNumber} >-</button>
                        </div>

                        <div className="button-comprar">
                            <button>Comprar</button>
                        </div>

                    </div>

                </div>


            </main>

            <Footer />

        </>
    )
}

export default Detals
