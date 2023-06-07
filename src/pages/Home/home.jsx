import React from "react"
import './style.css'
import photoHome from '../../images/home/capa-home.jpg'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"
import foto_2 from "../../images/footer/elo-removebg-preview.png"
import foto_3 from "../../images/footer/facebook.png"

const Home = () => {
    const product = [{
        nome: "tenis DC",
        cor: "preto",
        imagem_1: foto_1,
        imagem_2: foto_2,
        imagem_3: foto_3,
        valor: 450.00,
        tamanho: 43
    },
    {
        nome: "tenis DC",
        cor: "preto",
        imagem_1: foto_1,
        imagem_2: foto_2,
        imagem_3: foto_3,
        valor: 450.00,
        tamanho: 43
    },{
        nome: "tenis DC",
        cor: "preto",
        imagem_1: foto_1,
        imagem_2: foto_2,
        imagem_3: foto_3,
        valor: 450.00,
        tamanho: 43
    } ]

    return (
        <>

            <Header />

            <div className="banner">
                <img className="img-home" src={photoHome} alt="capahome" />
            </div>

            <h3>NOVIDADES</h3>

            <div className="container">
                {product.map((item) => {
                    return (
                        <div className="produto">

                            <img src={item.imagem_1} alt="produto" />

                            <p>{item.nome}</p>

                            <p>R$ {item.valor} </p>

                            <div>

                                <a href="">
                                    <button> Comprar </button>
                                </a>

                            </div>
                        </div>
                    )
                })

                }


            </div>

            <Footer />

        </>
    )
}

export default Home