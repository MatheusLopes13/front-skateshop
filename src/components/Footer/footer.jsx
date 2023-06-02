import React from "react";
import './style.css'
import face from '../../images/footer/facebook.png'
import american from '../../images/footer/american-express-removebg-preview (1).png'
import elo from '../../images/footer/elo-removebg-preview.png'
import email from '../../images/footer/email.png'
import visa from '../../images/footer/imagem.visa.png'
import instagram from '../../images/footer/instagram.png'
import mastercard from '../../images/footer/mastercard (1).png'
import whats from '../../images/footer/whats.png'

const footer = () => {
    return(
        <>
            <footer className="footer-menu">
    <div className="box-contatos">

        <p className="align-contato font-padrao">
            Contatos:
        </p>

        <div className="espaco-contatos">

            <p className="margin-contatos alinhamento-contatos font-padrao">
                <img  className="footer-imagem1" src={instagram}  alt="instagram"/>
                @JetSkateShop
            </p>

            
            <p className="alinhamento-contatos font-padrao">
                <img  className="footer-imagem1 alinhamento-contatos"  src={face}  alt="facebook"/>
                @JetSkateShop
                </p>
            
        </div>

        <div className="espaco-contatos">
            <p className="margin-contatos alinhamento-contatos font-padrao">
                    <img  className="footer-imagem1"  src={email}  alt="mensagem"/>
                jetskateshop@gmail.com

                </p> 

                <p className="alinhamento-contatos font-padrao">
                <img  className="footer-imagem1"  src={whats}  alt="whatsapp"/>
                (11) 9999-9999
                </p>
        </div>
    </div>

    <div className="box-pagamentos">
        
        <p className="font-padrao">
        Formas de Pagamento:
        </p>
        <div className="margin-box-pagamentos">
            <img className="footer-imagens" src={mastercard} alt="mastercard"/>
            <img className="footer-imagens" src={visa} alt="visa"/>
        </div>

        <div  className="margin-box-pagamentos">
            <img className="footer-imagens" src={elo}  alt="elo"/>
            <img className="footer-imagens" src={american}  alt="american"/>
        </div>


    </div>

</footer>
        
        </>
    )
}

export default footer

