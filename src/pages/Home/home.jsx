import React, { useEffect, useState } from "react"
import api from "../../services/api"
import './home.css'
import photoHome from '../../images/home/capa-home.jpg'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import foto_1 from "../../images/footer/american-express-removebg-preview (1).png"
import utils from "../../services/utils"
import { decodeToken} from 'react-jwt'
 


const Home = () => {

    const [allProducts, setAllProducts] = useState([])
    const [userLogged, setUserLogged] = useState()
    
    useEffect(() => {     
        getProducts()
        getUser()
        
    }, [])
    
    const getUser = async () => {
        const token = localStorage.getItem('token')
        
        if(token !== undefined && token !== null){
            try {
                const myDecodedToken = decodeToken(token);
                const url = `usuario/${myDecodedToken.id}`
                const response = await api.get(url, null, { headers: { Authorization: token } })
                localStorage.setItem('usuario', JSON.stringify(response.data.user))
                setUserLogged(response.data.user)
                console.log(userLogged)
            }
            catch (err) {
                console.error(err)
            }
        }
        
    }
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
            <Header usuario={userLogged}/>

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