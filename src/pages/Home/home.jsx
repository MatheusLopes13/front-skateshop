import React, { useEffect, useState } from "react"
import api from "../../services/api"
import './home.css'
import photoHome from '../../images/home/capa-home.jpg'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"
import utils from "../../services/utils"




const Home = () => {

    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {     
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await api.get('products')
        setAllProducts(response.data)
    }

    const addCarrinho = (item) => {
        utils.setCarrinho(item)
        console.log(utils.getCarrinho())

    }

    



   

    return (
        <>
            <Header />

            <div className="banner">
                <img className="img-home" src={photoHome} alt="capahome" />
            </div>

            <h3>NOVIDADES</h3>

            <div className="container">
                {allProducts.map((item) => {
                    return (
                        <div key={item.id} className="produto">

                            <img src={foto_1} alt="produto" />

                            <p>{item.nome}</p>

                            <p>R$ {item.valor} </p>

                            <button onClick={ () => addCarrinho(item)}> Comprar </button>

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