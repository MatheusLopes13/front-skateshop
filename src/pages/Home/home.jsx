import React from "react"
import './style.css'
import photoHome from '../../images/home/capa-home.jpg'
import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"

const Home = () => {
    const arr = [1, 2, 3]


    return (
        <>

            <Header />

            <div className="banner">
                <img className="img-home" src={photoHome} alt="capahome" />
            </div>

            <h3>NOVIDADES</h3>

            <div className="container">
                {arr.map((item) => {
                    return (
                        <div className="produto">

                            <img src={photoHome} alt="produto" />

                            <p>{item}</p>

                            <p>{item} valor </p>

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