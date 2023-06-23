import React, { useEffect } from "react"
import Header from "../../../components/Header/header.jsx"
import Footer from "../../../components/Footer/footer.jsx"
import './skate.css'
import utils from "../../../services/utils.js"


import skate from '../../../images/skate/skate.png'




const Skate = () => {

    
useEffect(() => {
console.log(utils.getCarrinho())
})

    return (

        
        <>

        
<p>{utils.getCarrinho()}</p>

        {/* <Header/>
        <h3> S K A T E S</h3>
        <div className="main">
            <div className="filtros">
                <p> TAMANHOS </p>
                <label>
                    <input type="checkbox" />
                    7.5
                </label>

                <label>
                    <input type="checkbox" />
                    7.75
                </label>

                <label>
                    <input type="checkbox" />
                    7.8
                </label>

                <label>
                    <input type="checkbox" />
                    8
                </label>

                <label>
                    <input type="checkbox" />
                    8.1
                </label>

                <label>
                    <input type="checkbox" />
                    8.25
                </label>

                <label>
                    <input type="checkbox" />
                    8.5
                </label>
            </div>

            <div className="container-produtos">

                <div className="produtos-skate">
                    <img className="img-produto" src={skate}/>
                    <p className="text-center mt-2 mb-1"><strong>Shape com lixa grátis!</strong></p>
                    <p className="text-center mb-1"><strong>$ 250,00</strong></p>

                    <button className="button-comprar">Comprar</button>

                </div>

                <div className="produtos-skate">
                    <img className="img-produto" src={skate}/>
                    <p className="text-center mt-2 mb-1"><strong>Shape com lixa grátis!</strong></p>
                    <p className="text-center mb-1"><strong>$ 250,00</strong></p>

                    <button className="button-comprar">Comprar</button>

                </div>

                <div className="produtos-skate">
                    <img className="img-produto" src={skate}/>
                    <p className="text-center mt-2 mb-1"><strong>Shape com lixa grátis!</strong></p>
                    <p className="text-center mb-1"><strong>$ 250,00</strong></p>

                    <button className="button-comprar">Comprar</button>

                </div>
            </div>
        </div>
        <Footer/> */}
       
        </>
    )
}

export default Skate